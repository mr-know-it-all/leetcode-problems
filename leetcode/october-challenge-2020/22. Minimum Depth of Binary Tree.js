// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
 

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// minDepth :: TreeNode T => T -> T
const minDepth = root => {
    if(!root) return 0;
    
    let min = Infinity;
    (function dfs(node, acc = 1) {
        if(!node || acc >= min) return;
        if(!node.left && !node.right) {
            min = Math.min(min, acc);
            return;
        }
        
        dfs(node.left, acc + 1);
        dfs(node.right, acc + 1);
    })(root);
    
    return min;
};

// SOLUTION 2:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// minDepth :: TreeNode T => T -> T
const minDepth = root => {
    if(!root) return 0;

    return (function dfs(node, acc = 0) {
        if(!node.left && !node.right) return acc + 1; 
        
        return Math.min(
            node.left ? dfs(node.left, acc + 1) : Infinity,
            node.right ? dfs(node.right, acc + 1) : Infinity
        )
    })(root);
};