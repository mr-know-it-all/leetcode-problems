// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
// Example 3:

// Input: head = [1,2,3,4,5], k = 1
// Output: [1,2,3,4,5]
// Example 4:

// Input: head = [1], k = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range sz.
// 1 <= sz <= 5000
// 0 <= Node.val <= 1000
// 1 <= k <= sz
 

// Follow-up: Can you solve the problem in O(1) extra memory space?

// SOLUTION 1:
// Messy O(n) space
// TODO: find better solution and clean up this one

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(!head) return head;
    let pointer: ListNode | null = head;
    
    let buffer: Array<ListNode | null> = [];
    const kGroups: Array<Array<ListNode | null>> = [];
    while(pointer) {
        buffer.unshift(pointer);
        
        if(buffer.length === k) {
            kGroups.push(buffer);
            buffer = [];
        }
        
        pointer = pointer.next; 
    }
    
    kGroups.push(buffer.reverse());
    buffer = [];
    
    const resultList: Array<ListNode | null> = kGroups.flatMap(x => x);
    const result: ListNode = new ListNode(-1);
    pointer = result;
    for(let node of resultList) {
        pointer.next = node;
        pointer = pointer.next;
    }
    pointer.next = null;
    
    return result.next;
};