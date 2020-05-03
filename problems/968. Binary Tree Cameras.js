// https://leetcode.com/problems/binary-tree-cameras/

// Given a binary tree, we install cameras on the nodes of the tree.
//
// Each camera at a node can monitor its parent, itself, and its immediate children.
//
// Calculate the minimum number of cameras needed to monitor all nodes of the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// minCameraCover :: TreeNdoe T => T -> Number
const minCameraCover = root => {
    let cameras = 0;
    const covered = new Map();

    // "children" of leaf nodes are null, we'll mark them as being covered
    covered.set(null, true);

    const search = (node, parent) => {
        // we reached a bottom node (the parent of this node is a leaf)
        if(node === null) return;

        // we'll visit first the leaf nodes
        search(node.left, node);
        search(node.right, node);
        // at this point, all children of node were visited

        if(
            // root node that's not covered
            parent === null && !covered.has(node) ||
            // node that is not covered by left child
            !covered.has(node.left) ||
            // node that is not covered by right child
            !covered.has(node.right)
        ) {
            // place camera on node, will cover itself, its parent and children
            covered.set(node, true);
            covered.set(parent, true);
            covered.set(node.left, true);
            covered.set(node.right, true);

            cameras += 1;
        }
    }

    search(root, null);

    return cameras;
};
