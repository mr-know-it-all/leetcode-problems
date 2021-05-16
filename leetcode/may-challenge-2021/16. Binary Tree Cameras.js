// Given a binary tree, we install cameras on the nodes of the tree. 

// Each camera at a node can monitor its parent, itself, and its immediate children.

// Calculate the minimum number of cameras needed to monitor all nodes of the tree.

 

// Example 1:


// Input: [0,0,null,0,0]
// Output: 1
// Explanation: One camera is enough to monitor all nodes if placed as shown.
// Example 2:


// Input: [0,0,null,0,null,0,null,null,0]
// Output: 2
// Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

// Note:

// The number of nodes in the given tree will be in the range [1, 1000].
// Every node has value 0.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// minCameraCover :: TreeNdoe T => T -> Number
const minCameraCover = root => {
    let cameras = 0;
    const covered = new Map();
    
    // "children" of leaf nodes are null, we'll mark them as being covered
    covered.set(null, true);
    
    const search = (node, parent) => {
        // we reached a bottom node (the parent of this node is a leaf)
        if(node === null) return;
        
        // by doing this, we'll visit first the leaf nodes
        search(node.left, node);
        search(node.right, node);
        
        if(
            // root node that's not covered
            parent === null && !covered.has(node) ||
            // node that is not covered by left child
            !covered.has(node.left) ||
            // node that is not covered by right child
            !covered.has(node.right)
        ) {
            // the node, its parent and children will be covered by the node
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

// SOLUTION 2:

// minCameraCover :: TreeNdoe T => T -> Number
const minCameraCover = node => {
    let cameras = 0;
        
    const root = (function compute(node) {
        if(!node) return 'covered';
        
        const left = compute(node.left);
        const right = compute(node.right);
        
        if(left === 'blind' || right === 'blind') {
            cameras++;
            return 'camera';
        }
        
        return left === 'camera' || right === 'camera' ? 'covered' : 'blind';
    })(node);

    return (root === 'blind' ? 1 : 0) + cameras;
};