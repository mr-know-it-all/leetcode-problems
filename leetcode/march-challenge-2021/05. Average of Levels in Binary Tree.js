// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.

// SOLUTION 1:

// sum :: [Number] -> Number
const sum = (xs) => xs.reduce((a, b) => a + b);

// averageOfLevels :: TreeNode -> Number
const averageOfLevels = (root) => {
    let levels = {};
  
    (function dfs(node, lvl = 0) {
      if(!node) return;
      
      if(!levels[lvl]) levels[lvl] = [];
      
      levels[lvl].push(node.val);
      dfs(node.left, lvl + 1);
      dfs(node.right, lvl + 1);
    })(root);
  
    return Object.values(levels).map(lvl => sum(lvl) / lvl.length);
};

// SOLUTION 2:

const sum = (xs) => xs.reduce((a, b) => a + b);

// averageOfLevels :: TreeNode -> Number
const averageOfLevels = (root) => {
  let q = [];
  const result = [];
  
  q.push(root);
  
  while(q.length) {
    const n = q.length;
    let sum = 0;
    for(let i = 0; i < n; i++) {
      const node = q.shift();
      
      sum += node.val;
      
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }
    
    result.push(sum / n);
  }
  
  return result;
};