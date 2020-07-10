// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
//
// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

// flatten :: Node N -> N
const flatten = head => {
    (function search(node, next = []) {
        if(!node) return;

        if(node.child) {
            let nextNode = node.next;

            node.next = node.child;
            node.next.prev = node;
            node.child = null;

            search(node.next, [...next, nextNode]);
        } else if(!node.next && next.length > 0) {
            const nextNode = next.pop();
            if(!nextNode) return;

            node.next = nextNode;
            node.next.prev = node;

            search(nextNode, next);
        } else if(node.next) {
            search(node.next, next);
        }
    })(head)

    return head;
};
