// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// isCousin :: TreeNode N => (N, Numeber, Number) -> Boolean
const isCousins = (root, x, y) => {
    let a = null;
    let b = null;

    const find = (node, parent, depth) => {
        if(node === null) return;

        if(node.val === x) a = [depth, parent];
        if(node.val === y) b = [depth, parent];

        if(!a || !b) {
           find(node.left, node, depth + 1);
           find(node.right, node, depth + 1);
        }
    };

    find(root, null, 0);

    return a[0] === b[0] && a[1] !== b[1];
};
