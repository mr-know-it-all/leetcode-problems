// Design a data structure that supports the following two operations:
//
// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
//
// Example:
//
// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z

// Trie :: () -> Object
function Trie() {
    this.root = { children: {} };

    // search :: String -> Boolean
    this.search = function(word, node = this.root) {
        let currentNode = node;
        if((word === '') && currentNode.endWord) return true;

        for(let i = 0; i < word.length; i++) {
            let key = word[i];

            if(key === '.') {
                const restOfKeys = Object.keys(currentNode.children);
                const restOfWord = word.substr(i + 1);

                return restOfKeys.some(node => this.search(restOfWord, currentNode.children[node]));
            }

            if(!currentNode.children[key]) return false;

            if(i === word.length - 1) {
                if(!currentNode.children[key].endWord) return false;

                return true;
            }

            currentNode = currentNode.children[key];
        }
    }

    // insert :: String -> ()
    this.insert = function(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            const key = word[i] // word.substr(0, i + 1); (alterrnative B)

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
}

// WordDictionary :: () -> Object
const WordDictionary = function() { this.dict = new Trie(); };
// addWord :: String -> ()
WordDictionary.prototype.addWord = function(word) { this.dict.insert(word); };
// search :: String -> Boolean
WordDictionary.prototype.search = function(word) { return this.dict.search(word); };
