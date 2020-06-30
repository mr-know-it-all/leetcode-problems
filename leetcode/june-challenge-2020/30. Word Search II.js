// Given a 2D board and a list of words from the dictionary, find all words in the board.
//
// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
//
//
//
// Example:
//
// Input:
// board = [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// words = ["oath","pea","eat","rain"]
//
// Output: ["eat","oath"]
//
//
// Note:
//
// All inputs are consist of lowercase letters a-z.
// The values of words are distinct.

const NOT_FOUND = Symbol();
const STARTS_WITH = Symbol();
const COMPLETE_WORD = Symbol();

// Trie :: () -> Object
function Trie() {
    this.root = { children: {} };

    // find :: String -> Boolean
    this.find = function(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            let key = word[i];

            if(!currentNode.children[key]) return NOT_FOUND;

            if(i === word.length - 1) {
                if(currentNode.children[key].endWord) return COMPLETE_WORD;
                return STARTS_WITH;

            }

            currentNode = currentNode.children[key];
        }
    }

    // insert :: String -> ()
    this.insert = function(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            const key = word[i];

            if(currentNode.children[key]) {
                if(i === word.length - 1) currentNode.children[key].endWord = true;
                currentNode = currentNode.children[key];
            } else {
                let newNode = { children: {} };
                currentNode.children[key] = newNode;
                if(i === word.length - 1) currentNode.children[key].endWord = true;
                currentNode = newNode;
            }
        }
    }

    // get :: String -> (String -> Boolean)
    this.get = word => this.find(word);
}

// findWords :: ([[String]], [String]) -> [String]
const findWords = (board, words) => {
    const trie = new Trie();

    // add all word to the trie
    for(let word of words) trie.insert(word);

    const response = [];
    const search = (i, j, word = '') => {
        const trieWord = trie.get(word);

        // if word is non empty and not in trie, stop
        if(word.length > 0 && trieWord === NOT_FOUND) return;

        // if word is non empty and a complete word in trie add it to response and stop
        if(word.length > 0 && trieWord === COMPLETE_WORD && !response.includes(word)) {
            response.push(word); return;
        }

        // poor man's check for out of bounds
        if(!board[i] || !board[i][j]) return;

        const char = board[i][j];
        // mark this letter as "used" until recursion starting from current point ends
        // this will prevent using letter in loops, aka using it multiple times
        board[i][j] = '*';

        search(i + 1, j, word + char);
        search(i - 1, j, word + char);
        search(i, j + 1, word + char);
        search(i, j - 1, word + char);

        // put it back in after recursion from current point terminates
        board[i][j] = char;
    }

    for(let i = 0; i < board.length; i++)
        for(let j = 0; j < board[0].length; j++)
            // from every point in the board try to find a word
            // search function will try to go up, down, left and right
            search(i, j);

    return response;
};
