// You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

 

// Example 1:


// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:


// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 

// Constraints:

// The number of nodes in the tree is in the range [2, 1000].
// -231 <= Node.val <= 231 - 1

// SOLUTION 1:

// reecoverTree :: TreeNode -> ()
const recoverTree = root => {
    let a, b, prev;
    const inOrder = node => {
        if(!node) return;
        
        inOrder(node.left);
        
        // if we have prev we are on the right branch
        // if a prev node is bigger than a node to its right we have a mistake
        if(prev && prev.val > node.val) {
            if(!a) a = prev;
            b = node;
        }
        prev = node;
        
        inOrder(node.right);
    };
    inOrder(root);
    
    [a.val, b.val] = [b.val, a.val];
};

// SOLUTION 2:

// reecoverTree :: TreeNode -> ()
const recoverTree = root => {
    const inOrder = node => ([
        ...(node.left ? inOrder(node.left) : []),
        ...(node ? [node] : []),
        ...(node.right ? inOrder(node.right) : [])
    ]);
    
    const list = inOrder(root);
                         
    for(let i = list.length - 1; i > 0; i--) {
        if(list[i].val < list[i - 1].val) {
            let j = i - 1;
            while(j >= 0 && list[i].val < list[j].val) j--;
            
            [list[i].val, list[j + 1].val] = [list[j + 1].val, list[i].val]
            break;
        }
    }
};