// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// mergeTwoLists :: ListNode L => (L, L) -> L
const mergeTwoLists = (l1, l2) => {
    let res = null;
    let pointer = null;
    
    if(!l1) return l2;
    else if(!l2) return l1;
    
    while(l1 || l2) {
        let min = null;
        
        if(!l1 || !l2) {
            if(!l1) pointer.next = l2;
            if(!l2) pointer.next = l1;
            
            return res;
        }
        
        if(l1.val < l2.val) {
            min = l1;
            l1 = l1.next;
        } else {
            min = l2;
            l2 = l2.next;
        }
        
        if(res === null) {
            res = min;
            pointer = res;
        }
        else {
            pointer.next = min;
            pointer = pointer.next;
        };
        
        pointer.next = null;
    }
    
    return res;
};