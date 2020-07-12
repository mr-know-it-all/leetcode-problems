// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example:
//
// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// sortedArrayToBST :: TreeNode T => [Number] -> T
const sortedArrayToBST = nums => {
    return (function compute(start, end) {
        if(start > end) return null;
        const mid = (start + end) >> 1;
        return new TreeNode(nums[mid], compute(start, mid - 1), compute(mid + 1, end));
    })(0, nums.length - 1);
};

// SOLUTION 2:

// sortedArrayToBST :: TreeNode T => [Number] -> T
const sortedArrayToBST
    if(nums.length === 0) return null;

    let mid = nums.length >> 1;
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};
