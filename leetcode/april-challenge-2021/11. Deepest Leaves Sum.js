// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// deepestLeavesSum :: TreeNode -> Number
const deepestLeavesSum = (root) => {
    const q = [];
    q.push(root);
    let last = [];
    
    while(q.length) {
      const level = q.length;
      last = Array.from(q);
      
      for(let i = 0; i < level; i++) {
        const node = q.shift();
        
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
      }
    }
    
    return last.reduce((acc, node) => acc + node.val, 0);
  };

  // SOLUTION 2:

  /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// deepestLeavesSum :: TreeNode -> Number
const deepestLeavesSum = (root) => {
    const q = [];
    q.push(root);
    let sum = 0;
    
    while(q.length) {
      const level = q.length;
      sum = 0;
      
      for(let i = 0; i < level; i++) {
        const node = q.shift();
        sum += node.val;
        
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
      }
    }
    
    return sum;
  };