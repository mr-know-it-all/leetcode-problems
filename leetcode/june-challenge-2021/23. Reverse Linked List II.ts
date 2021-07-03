// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
 

// Follow up: Could you do it in one pass?


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }
 
// SOLUTION 1:
// naive approach

 function _reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const asList = [];
    
    let pointer = head;
    while(pointer) {
        asList.push(pointer.val);
        pointer = pointer.next;
    }
    
    const leftPart = asList.slice(0, left - 1);
    const midPart = asList.slice(left - 1, right).reverse();
    const rightPart = asList.slice(right);

    const result = new ListNode(null);
    pointer = result;
    
    for(let val of [...leftPart, ...midPart, ...rightPart]) {
        pointer.next = new ListNode(val);
        pointer = pointer.next;
    }
    
    return result.next;
};

// SOLUTION 2: