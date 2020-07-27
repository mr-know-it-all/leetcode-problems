// Given inorder and postorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// buildTree :: TreeNode T => ([Number], [Number]) -> T
const buildTree = (inOrder, postOrder) => {
    if(!inOrder.length) return null;

    const node = new TreeNode(postOrder.pop());
    const i = inOrder.indexOf(node.val);

    node.right = buildTree(inOrder.slice(i + 1), postOrder);
    node.left = buildTree(inOrder.slice(0, i), postOrder);

    return node;
};

// SOLUTION 2:

// buildTree :: TreeNode T => ([Number], [Number]) -> T
const buildTree = (inOrder, postOrder) => {
    let postIndex = postOrder.length - 1;

    return (function search(inOrder) {
        if(!inOrder.length) return null;

        const nodeVal = postOrder[postIndex--];

        const node = new TreeNode(nodeVal);
        const inIndex = inOrder.indexOf(nodeVal);

        node.right = search(inOrder.slice(inIndex + 1))
        node.left = search(inOrder.slice(0, inIndex));

        return node;
    })(inOrder);
};
