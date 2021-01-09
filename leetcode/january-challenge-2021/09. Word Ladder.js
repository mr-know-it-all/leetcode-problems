// Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Return 0 if there is no such transformation sequence.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
 

// Constraints:

// 1 <= beginWord.length <= 100
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the strings in wordList are unique.

// SOLUTION 1:

// ladderLength :: (String, String, [String]) -> Number
const ladderLength = (start, end, words) => {
    if(!words.includes(end)) return 0;
    
    const visited = new Set();
    const q = [[start, 1]];
    
    while(q.length) {
        const [curr, level] = q.pop();
        
        if(curr === end) return level;
        
        for(let word of words) {
            if(word === curr || visited.has(word)) continue;
            
            let diff = 0;
            
            for(let i = 0; i < word.length; i++) {
                if(curr[i] !== word[i]) diff++;
            }
            
            if(diff === 1) {
                q.unshift([word, level + 1]);
                visited.add(word);
            }
        }
    }
    
    return 0;
};

// SOLUTION 2:

// ladderLength :: (String, String, [String]) -> Number
const ladderLength = (start, end, words) => {
    if(!words.includes(end)) return 0;
    
    const graph = new Map();
    
    words.push(start);
    for(let curr of words) {
        for(let word of words) {     
            let diff = 0;
            
            for(let i = 0; i < word.length; i++) 
                if(curr[i] !== word[i]) diff++;
            
            if(diff === 1)
                graph.set(curr, (graph.get(curr) || []).concat(word));
        }
    };
    
    const visited = new Set();
    const q = [[start, 1]];

    while(q.length) {
        const [curr, level] = q.pop();
        
        if(curr === end) return level;
        
        for(let neighbor of (graph.get(curr) || [])) {
            if(visited.has(neighbor)) continue;
            
            q.unshift([neighbor, level + 1]);
            visited.add(neighbor);
        }
    }
    
    return 0;
};