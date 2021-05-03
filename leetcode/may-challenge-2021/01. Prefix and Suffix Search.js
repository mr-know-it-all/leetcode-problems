// Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.

// Implement the WordFilter class:

// WordFilter(string[] words) Initializes the object with the words in the dictionary.
// f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.
 

// Example 1:

// Input
// ["WordFilter", "f"]
// [[["apple"]], ["a", "e"]]
// Output
// [null, 0]

// Explanation
// WordFilter wordFilter = new WordFilter(["apple"]);
// wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = 'e".
 

// Constraints:

// 1 <= words.length <= 15000
// 1 <= words[i].length <= 10
// 1 <= prefix.length, suffix.length <= 10
// words[i], prefix and suffix consist of lower-case English letters only.
// At most 15000 calls will be made to the function f.
//    Hide Hint #1  
// For a word like "test", consider "#test", "t#test", "st#test", "est#test", "test#test". Then if we have a query like prefix = "te", suffix = "t", we can find it by searching for something we've inserted starting with "t#te".

// Trie :: () -> Object
class Trie {
    constructor() {
        this.root = { children: {} };

        // search :: String -> Boolean
        this.search = function (word, node = this.root) {
            let currentNode = node;
            if ((word === '') && currentNode.endWord)
                return true;

            for (let i = 0; i < word.length; i++) {
                let key = word[i];

                if (!currentNode.children[key])
                    return -1;

                if (i === word.length - 1) {
                    //if(!currentNode.children[key].endWord) return false;
                    return currentNode.children[key].index;
                }

                currentNode = currentNode.children[key];
            }
        };

        // insert :: String -> ()
        this.insert = function (word, index) {
            let currentNode = this.root;

            for (let i = 0; i < word.length; i++) {
                const key = word[i];

                if (currentNode.children[key]) {
                    if (i === word.length - 1)
                        currentNode.children[key].endWord = true;
                    currentNode = currentNode.children[key];
                    currentNode.index = index;
                } else {
                    let newNode = { index, children: {} };
                    currentNode.children[key] = newNode;
                    if (i === word.length - 1)
                        currentNode.children[key].endWord = true;
                    currentNode = newNode;
                }
            }
        };
    }
}

/**
 * @param {string[]} words
 */
class WordFilter {
    constructor(words) {
        this.words = words;
        this.trie = new Trie();

        for (let i = 0; i < words.length; i++) {
            for (let j = this.words[i].length; j >= 0; j--) {
                const key = this.words[i].substring(j) + '$' + this.words[i];

                this.trie.insert(key, i);
            }
        }

    }
    /**
     * @param {string} prefix
     * @param {string} suffix
     * @return {number}
     */
    f(prefix, suffix) {
        let index = this.trie.search(suffix + '$' + prefix);

        return index;
    }
}


/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */