// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
// Example:
//
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
//
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
//
//
// Constraints:
//
// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

// SOLUTION 1:

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

// exist :: ([[String]], String) -> [String]
const exist = (board, word) => {
    const trie = new Trie();

    // we assume there is no word on the board
    let foundWord = false;

    // add word to the trie
    trie.insert(word);

    const search = (i, j, word = '') => {
        // stop if already found the word
        if(foundWord) return;

        const trieWord = trie.get(word);

        // if word is non empty and not in trie, stop
        if(word.length > 0 && trieWord === NOT_FOUND) return;

        // if word is non empty and a complete word in trie we found a word, we'll stop here
        if(word.length > 0 && trieWord === COMPLETE_WORD) {
            foundWord = true;
            return;
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

    return foundWord;
};

// SOLUTION 2:

const key = (i, j) => `${i}:${j}`;
const inBounds = (x, N) => x >= 0 && x < N;

// exist :: ([[String]], String) -> [String]
const exist = (board, word) => {
    const rows = board.length;
    const cols = board[0].length;

    const visiting = {};

    const dfs = (i, j, index) => {
        if(board[i][j] !== word[index]) return false;
        if(index === word.length - 1) return true;

        visiting[key(i, j)] = true;

        const directions = [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]];

        for(let [i, j] of directions) {
            if(
                inBounds(i, rows) && inBounds(j, cols) &&
                !visiting[key(i, j)] &&
                dfs(i, j, index + 1)
            ) return true;
        }

        visiting[key(i, j)] = false;
        return false;
    }



    for(let i = 0; i < rows; i++)
        for(let j = 0; j < cols; j++)
            if(word[0] === board[i][j] && dfs(i, j, 0)) return true;

    return false;
};
