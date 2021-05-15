// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

// Example 1:


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

// SOLUTION 1:
// O(n) space

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// flatten :: TreeNode -> ()
const flatten = (root) => {
    if(!root) return;
    
    const preorder = (function traverse(node) {
        if(!node) return [];
        return [
            node.val,
            ...(node.left ? traverse(node.left) : []),
            ...(node.right ? traverse(node.right) : [])
        ];
    })(root);
    
    let pointer = root;
    pointer.left = null;
    
    for(let i = 1; i < preorder.length; i++) {
        pointer.right = new TreeNode(preorder[i]);
        pointer = pointer.right;
    }
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


// flatten :: TreeNode -> ()
const flatten = (root) => {
    let prev = null;
    
    (function flatten(root) {
        if(root === null) return;
        flatten(root.right);
        flatten(root.left);
        root.right = prev;
        root.left = null;
        prev = root;
    })(root);
};