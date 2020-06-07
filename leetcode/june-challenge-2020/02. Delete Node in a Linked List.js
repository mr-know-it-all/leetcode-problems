/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

 // SOLUTION 1:

 // deleteNode :: ListNode N => ()
 const deleteNode = (node) => {
     node.val = node.next.val;
     node.next = node.next.next;
 };

// SOLUTION 2:
// (since this problem is pretty basic, here's a contrived solution)

// deleteNode :: ListNode N => ()
const deleteNode = (node) => {
    let [prev, curr, next] = [null, node, node.next];

    while(next) {
        curr.val = next.val;
        [prev, curr, next] = [curr, next, next.next];
    }

    prev.next = null;
};
