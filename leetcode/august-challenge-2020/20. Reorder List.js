// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
// Example 1:
//
// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:
//
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// reorderList :: ListNode N -> T -> ()
const reorderList = head => {
    if(!head) return null;

    const list = [];
    let curr = head.next;
    while(curr) {
        list.push(curr);
        curr = curr.next;
    }

    let turn = false;
    while(list.length > 0) {
        if(turn) head.next = list.shift();
        else head.next = list.pop();

        head = head.next;
        turn = !turn;
    }

    head.next = null;
};
