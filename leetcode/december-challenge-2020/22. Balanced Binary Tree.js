// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// getHeight :: TreeNode -> Number
const getHeight = node => {
    if(!node) return 0;

    const left = getHeight(node.left);
    const right = getHeight(node.right);

    return Math.max(left, right) + 1;
};

// isBalanced :: TreeNode -> Boolean
const isBalanced = (node) => {
    if(!node) return true;
    
    const l = getHeight(node.left);
    const r = getHeight(node.right);
    
    if(Math.abs(l - r) <= 1) return isBalanced(node.left) && isBalanced(node.right);
    else return false;
    
};