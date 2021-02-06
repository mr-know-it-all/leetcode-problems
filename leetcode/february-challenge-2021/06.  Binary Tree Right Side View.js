// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

// rightSideView :: TreeNode -> [Number]
const rightSideView = (root) => {
    const res = [];
    const levels = {};
    
    (function traverse(node, level, right) {
        if(!node) return;
        
        if(!levels[level] || levels[level] <= right + level || 1) {
            levels[level] = right;
            res[level] = node.val;
        }
        
        traverse(node.left, level + 1, right - level || 1);
        traverse(node.right, level + 1, right + level || 1);
    })(root, 0, 0);
    
    return res;
};