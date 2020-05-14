// Implement a trie with insert, search, and startsWith methods.

// Trie :: () -> Object
function Trie() {
    this.root = { children: {} };

    // find :: (String, Boolean) -> Boolean
    this.find = function(word, strict) {
        // we'll start ar the root of the trie
        let currentNode = this.root;

        // for each i'th letter
        for(let i = 0; i < word.length; i++) {
            // compute the key as for insertion
            let key = word[i] // word.substr(0, i + 1); (alterrnative B)

            // if there is no path in the trie, return false
            if(!currentNode.children[key]) return false;

            // if we have the complete match
            if(i === word.length - 1) { // key === word (alterrnative B)
                // check if the word is complete
                if(strict && !currentNode.children[key].endWord) return false;

                // return true for startsWith
                return true;
            }

            currentNode = currentNode.children[key];
        }
    }

    // insert :: String -> ()
    this.insert = function(word) {
        let currentNode = this.root;

        // for each i'th letter
        for(let i = 0; i < word.length; i++) {
            // the key for a letter can be the letter or the word up to that letter inclusive
            const key = word[i] // word.substr(0, i + 1); (alterrnative B)

            // if the current node has this key as a descendant
            // we'll mark it if it's a complete word
            // we'll set it as the current node
            // no updates to the trie are needed except for the endWord flag
            if(currentNode.children[key]) {
                if(i === word.length - 1) currentNode.children[key].endWord = true;
                currentNode = currentNode.children[key];
            } else {
                // if it's not already in the trie
                // we'll create a new node
                // we'll add this key to its descendants
                // update the endWord flag
                // and set the currentNode variable to this new node
                let newNode = { children: {} };
                currentNode.children[key] = newNode;
                if(i === word.length - 1) currentNode.children[key].endWord = true;
                currentNode = newNode;
            }
        }
    }

    // startsWith :: String -> (String, Boolean) -> Boolean
    this.startsWith = word => this.find(word, false);
    // this.search = String -> (String, Boolean) -> Boolean
    this.search = word => this.find(word, true);
  }
