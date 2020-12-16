// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

// SOLUTION 1:
// naive implementation

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// isValidBST :: TreeNode -> Boolean
const isValidBST = root => {
    if(!root) return false;

    const inorder = node => [
        ...(node.left ? inorder(node.left) : []),
        node.val,
        ...(node.right ? inorder(node.right) : [])
    ];
    
    const list = inorder(root);

    for(let i = 1; i < list.length; i++) if(list[i - 1] >= list[i]) return false;
    
    return true;
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

// isValidBST :: TreeNode -> Boolean
const isValidBST = root => {
    if(!root) return false;
    
    const stack = [];
    let prev = null; //
    
    while(root || stack.length !== 0) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();

        if(prev && prev.val >= root.val) return false; //
        prev = root; //

        root = root.right;
    }
    
    return true;
};