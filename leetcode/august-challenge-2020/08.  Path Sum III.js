// You are given a binary tree in which each node contains an integer value.
//
// Find the number of paths that sum to a given value.
//
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
//
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
//
// Example:
//
// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
//
//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1
//
// Return 3. The paths that sum to 8 are:
//
// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// pathSum :: TreeNode T => (T, Number) -> Number
const pathSum = function(node, sum) {
    if(!node) return 0;

    const computeNodeSum = (node, sum) => {
        if(!node) return 0;

        return (
            (node.val === sum ? 1 : 0) +
            computeNodeSum(node.left, sum - node.val) +
            computeNodeSum(node.right, sum - node.val)
        );
    }

    return (
        computeNodeSum(node, sum) +
        pathSum(node.left, sum) +
        pathSum(node.right, sum)
    );
};
