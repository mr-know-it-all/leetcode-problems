// You are given the root of a binary tree with n nodes, where each node is uniquely assigned a value from 1 to n. You are also given a sequence of n values voyage, which is the desired pre-order traversal of the binary tree.

// Any node in the binary tree can be flipped by swapping its left and right subtrees. For example, flipping node 1 will have the following effect:


// Flip the smallest number of nodes so that the pre-order traversal of the tree matches voyage.

// Return a list of the values of all flipped nodes. You may return the answer in any order. If it is impossible to flip the nodes in the tree to make the pre-order traversal match voyage, return the list [-1].

 

// Example 1:


// Input: root = [1,2], voyage = [2,1]
// Output: [-1]
// Explanation: It is impossible to flip the nodes such that the pre-order traversal matches voyage.
// Example 2:


// Input: root = [1,2,3], voyage = [1,3,2]
// Output: [1]
// Explanation: Flipping node 1 swaps nodes 2 and 3, so the pre-order traversal matches voyage.
// Example 3:


// Input: root = [1,2,3], voyage = [1,2,3]
// Output: []
// Explanation: The tree's pre-order traversal already matches voyage, so no nodes need to be flipped.
 

// Constraints:

// The number of nodes in the tree is n.
// n == voyage.length
// 1 <= n <= 100
// 1 <= Node.val, voyage[i] <= n
// All the values in the tree are unique.
// All the values in voyage are unique.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// flipMatchVoyage :: (TreeNode, [Number]) -> Number
const flipMatchVoyage = (root, voyage) => {
    let res = [];
    
    function traverse(node) {
      if(!node) return true;
      if(voyage.shift() !== node.val) return false;
      
      if(node.left && node.left.val !== voyage[0]) {
        res.push(node.val);
        
        return traverse(node.right) && traverse(node.left);
      }
      
      return traverse(node.left) && traverse(node.right);
    };
    
    return traverse(root) ? res : [-1];
  };

// SOLUTION 2:

// flipMatchVoyage :: (TreeNode, [Number]) -> Number
const flipMatchVoyage = (root, voyage) => {
    let res = [];
    let index = 0;
    
    function traverse(node) {
      if(!node) return true;
      if(voyage[index] !== node.val) return false;
      
      index++;
      
      if(node.left && node.left.val !== voyage[index]) {
        res.push(node.val);
        
        return traverse(node.right, index) && traverse(node.left);
      }
      
      return traverse(node.left) && traverse(node.right);
    };
    
    return traverse(root) ? res : [-1];
  };

// SOLUTION 3:

// flipMatchVoyage :: (TreeNode, [Number]) -> Number
const flipMatchVoyage = (root, voyage) => {
    let res = [];
    let index = 0;
    
    function traverse(node) {
      if(!node) return true;
      if(voyage[index] !== node.val) return false;
      
      index++;
      
      if(node.left && node.left.val !== voyage[index]) {
        res.push(node.val);
        
        [node.right, node.left] = [node.left, node.right];
      }
      
      return traverse(node.left) && traverse(node.right);
    };
    
    return traverse(root) ? res : [-1];
  };