// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

 

// Example 1:


// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [0]
// Output: [0]
// Example 4:

// Input: head = [1,3]
// Output: [3,1]
 

// Constraints:

// The number of nodes in head is in the range [0, 2 * 104].
// -10^5 <= Node.val <= 10^5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:
// TODO: clean up a bit

// sortedListToBST :: ListNode -> TreeNode
const sortedListToBST = function(head) {
    const addInTree = (n, pointer) => {
        if(pointer.val > n) {
            if(pointer.left) addInTree(n, pointer.left);
            else pointer.left = new TreeNode(n);
        }
        if(pointer.val < n) {
            if(pointer.right) addInTree(n, pointer.right);
            else pointer.right = new TreeNode(n);
        }
    }
    
    const list = [];
    let pointer = head;
    while(pointer) {
        list.push(pointer.val);
        pointer = pointer.next;
    }
    if(list.length === 1) return new TreeNode(list[0]);
    
    let Tree = null;
    (function compute(list) {
        if(list.length === 0) return;
        
        if(list.length === 1) {
            addInTree(list[0], Tree);
            return;
        }
        
        const mid = Math.floor(list.length / 2);
        
        if(Tree === null) Tree = new TreeNode(list[mid]);
        else addInTree(list[mid], Tree);
        
        const left = list.length === 2 ? [list[0]] : list.slice(0, mid);
        const right = list.length === 2 ? [list[1]] : list.slice(mid + 1);
        
        compute(left);
        compute(right);
    })(list);
    
    return Tree;
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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// sortedListToBST :: ListNode -> TreeNode
const sortedListToBST = function(head) {
    const addInTree = (n, pointer) => {
        if(pointer.val > n) {
            if(pointer.left) addInTree(n, pointer.left);
            else pointer.left = new TreeNode(n);
        }
        if(pointer.val < n) {
            if(pointer.right) addInTree(n, pointer.right);
            else pointer.right = new TreeNode(n);
        }
    }
    
    const list = [];
    let pointer = head;
    while(pointer) {
        list.push(pointer.val);
        pointer = pointer.next;
    }
    if(list.length === 1) return new TreeNode(list[0]);
    
    // sortedArrayToBST :: TreeNode T => [Number] -> T
    const sortedArrayToBST = function(nums) {
        return (function compute(start, end) {
            if(start > end) return null;
            const mid = Math.floor((start + end) / 2);
            return new TreeNode(nums[mid], compute(start, mid - 1), compute(mid + 1, end));
        })(0, nums.length - 1);
    };
    
    return sortedArrayToBST(list);
};

// SOLUTION 3:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// sortedListToBST :: ListNode -> TreeNode
const sortedListToBST = function(head) {
    if(head === null) return null;
    
    return (function compute(head, tail) {
        if(head === tail) return null;
        
        let slow = head;
        let fast = head;
        
        while(fast !== tail && fast.next !== tail) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        let Tree = new TreeNode(slow.val);
        
        Tree.left  = compute(head, slow);
        Tree.right = compute(slow.next, tail);
        
        return Tree;
    })(head, null);
};