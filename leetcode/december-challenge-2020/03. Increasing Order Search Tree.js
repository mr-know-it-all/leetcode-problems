// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// Example 2:


// Input: root = [5,1,7]
// Output: [1,null,5,null,7]
 

// Constraints:

// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// inOrder :: TreeNode T => T -> [Number]
const inOrder = node => ([
    ...(node.left ? inOrder(node.left) : []),
    node.val,
    ...(node.right ? inOrder(node.right) : [])
]);

// increasingBST :: TreeNode T => T -> T
const increasingBST = root => {
    if(!root) return root;
    
    let [first, ...rest] = inOrder(root);
    const head = new TreeNode(first);
    let curr = head;
    
    for(let node of rest) {
        curr.right = new TreeNode(node);
        curr = curr.right;
    }
    
    return head;
};

// SOLUTION 2:

// increasingBST :: TreeNode T => T -> T
const increasingBST = node => {
    let response = new TreeNode(-1);
    let curr = response;
    
    (function inOrder(node) {
        if(!node) return;
        
        inOrder(node.left);
        
        node.left = null;
        curr.right = node;
        curr = node;
        
        inOrder(node.right);
    })(node);
    
    return response.right;
};
