// Return the root node of a binary search tree that matches the given preorder traversal.
//
// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)
//
// It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// addNode :: TreeNode T => (T, Number) -> T
const addNode = (root, val) => {
    if(root === null) return new TreeNode(val);

    if(val < root.val) {
        root.left = addNode(root.left, val);
    } else {
        root.right = addNode(root.right, val);
    }

    return root;
}

// bstFromPreorder :: TreeNode T => [Number] -> T
const bstFromPreorder = preorder => {
    if(preorder.length === 0) return null;

    let result = new TreeNode(preorder[0]);

    for(let i = 1; i < preorder.length; i++) {
        addNode(result, preorder[i]);
    }

    return result;
};
