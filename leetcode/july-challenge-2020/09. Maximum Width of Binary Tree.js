// Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

// The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

// Example 1:

// Input:

//            1
//          /   \
//         3     2
//        / \     \
//       5   3     9

// Output: 4
// Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
// Example 2:

// Input:

//           1
//          /
//         3
//        / \
//       5   3

// Output: 2
// Explanation: The maximum width existing in the third level with the length 2 (5,3).
// Example 3:

// Input:

//           1
//          / \
//         3   2
//        /
//       5

// Output: 2
// Explanation: The maximum width existing in the second level with the length 2 (3,2).
// Example 4:

// Input:

//           1
//          / \
//         3   2
//        /     \
//       5       9
//      /         \
//     6           7
// Output: 8
// Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).


// Note: Answer will in the range of 32-bit signed integer.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

const max = (a, b) => a > b ? a : b;
const ZERO = BigInt(0);
const ONE = BigInt(1);
const TWO = BigInt(2);

// TreeNode T => T -> Number
const widthOfBinaryTree = root => {
    // we assume there is at least a node
    let maxWidth = 1;
    const left = {};

    (function dfs(node, level = ZERO, position = ZERO) {
        if(!node) return;

        // store the left node position for every level
        if(left[level] === undefined) left[level] = position;
        // if left for a level was defined, this will be the right
        // maxWidth will be the right position of a node minus the left position for that level plus one
        else maxWidth = max(maxWidth, position - left[level] + ONE);


        // if we visualize a binary tree as an array
        // left node is array index * 2 + 1 and right node is array index * 2 + 2
        dfs(node.left, level + ONE, position * TWO + ONE);
        dfs(node.right, level + ONE, position * TWO + TWO);
    })(root);

    return maxWidth;
};
