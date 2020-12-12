// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

// Example 1:



// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

// Constraints:

// The number of nodes in the given tree is less than 6000.
// -100 <= node.val <= 100

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

// SOLUTION 1:

// connect :: Node T => T -> t
const connect = root => {
    const levels = {};
    
    (function dfs(node, level) {
        if(!node) return;
        
        levels[level] = (levels[level] || []).concat(node);
        
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    })(root, 0);
    
    for(let level of Object.values(levels)) {
        for(let i = 0; i < level.length; i++) {
            level[i].next = level[i + 1] || null;
        }
    }
    
    return root;
};

// SOLUTION 2:

// connect :: Node T => T -> t
const connect = root => {
    const levels = {};
    
    (function dfs(node, level) {
        if(!node) return;
        
        if(levels[level] !== undefined) {
            levels[level][levels[level].length - 1].next = node;
            levels[level].push(node);
        } else {
            levels[level] = [node];
        }
        
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    })(root, 0);
    
    return root;
};