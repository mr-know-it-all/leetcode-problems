// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

// levelOrder :: TreeNode T => T -> [[Number]]
const levelOrder = function(root) {
    const result = [];
    
    const stack = [];
    stack.push(root);
    
    while(stack.length) {
        const len = stack.length;
        const level = [];
        for(let i = 0; i < len; i++) {
            const node = stack.shift();
            if(!node) continue;
            
            stack.push(node.left, node.right);
            level.push(node.val);
        }
        level.length && result.push(level);
    }
    
    return result;
};