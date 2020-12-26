// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes. Only nodes itself may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// SOLUTION 1:

// swapPairs :: ListNode -> ListNode
const swapPairs = head => {
    if(!head || !head.next) return head;
    
    let list = [[]];

    while(head) {
        if(list[list.length - 1].length < 2) list[list.length - 1].unshift(head);
        else list.push([head]);
        head = head.next;
    }
    list = list.reduce((acc, val) => acc.concat(val), []).concat(null);
    
    const res = list[0];
    pointer = res;
    
    for(let i = 1; i < list.length; i++) {
        pointer.next = list[i];
        pointer = pointer.next;
    }
    
    return res;
};

// SOLUTION 2:

// SOLUTION 2:

// swapPairs :: ListNode -> ListNode
const swapPairs = head => {
    if(!head || !head.next) return head;
    
    let result = new ListNode(-1),
        cache = [],
        pointer = result;
    
    while(head) {
        cache.push(head.val);
        
        if(cache.length === 2) {
            pointer.next = new ListNode(cache.pop());
            pointer.next.next = new ListNode(cache.pop());
            pointer = pointer.next.next;
        }
        
        head = head.next;
    }
    
    if(cache.length) pointer.next = new ListNode(cache.pop());
    
    return result.next;
};