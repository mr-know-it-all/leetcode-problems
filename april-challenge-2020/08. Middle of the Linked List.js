// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
//
// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// middleNode :: ListNode N => N -> N
var middleNode = function(head) {
    const listAsArray = [];
    let current = head;
    while(current.next) {
        listAsArray.push(current);
        current = current.next;
    }
    listAsArray.push(current)

    const len = listAsArray.length;
    const index = len % 2 === 0 ? len/2 : Math.floor(len/2);

    return listAsArray[index];
};
