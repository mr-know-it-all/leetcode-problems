// Remove all elements from a linked list of integers that have value val.
//
// Example:
//
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// SOLUTION 1:
// TODO: tidy up code

// removeElements :: ListNode H, eq V => (H, V) -> H
const removeElements = (head, val) => {
    let curr = head;
    while(curr && curr.val === val) curr = curr.next;

    let pointer = curr;
    const result = pointer;

    if(curr && !curr.next) return result;

    while(curr) {
        while(curr && curr.val === val) {
            curr = curr.next;
            pointer.next = curr;
        }
        if(!curr) break;

        const prevCurr = curr;
        curr = curr.next;
        pointer.next = prevCurr;
        pointer = pointer.next;
    }

    return result;
};
