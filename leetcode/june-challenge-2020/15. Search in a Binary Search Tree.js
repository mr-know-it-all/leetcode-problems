// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

// searchBST :: TreeNode A, B => (A, Number) -> B
const searchBST = function(node, val) {
    if(node.val === val) return node;

    if(val < node.val && node.left) return searchBST(node.left, val);
    if(val > node.val && node.right) return searchBST(node.right, val);

    return null;
};
