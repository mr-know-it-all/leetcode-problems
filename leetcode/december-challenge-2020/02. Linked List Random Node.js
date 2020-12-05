// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Follow up:
// What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

// Example:

// // Init a singly linked list [1,2,3].
// ListNode head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// Solution solution = new Solution(head);

// // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
// solution.getRandom();

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// SOLUTION 1:

const Solution = function(head) {
    this.head = head;
};

Solution.prototype.getRandom = function() {
    let curr = this.head;
    let count = 0;
    let result = curr.val;
    
    while(curr) {
        let rand = Math.floor(Math.random() * (count + 1));
        
        if(rand === count) result = curr.val;
        curr = curr.next;
        count++;
    }

    return result;
};

// SOLUTION 2:

const Solution = function(head) {
    this.nodes = [];
    
    while(head) {
        this.nodes.push(head.val);
        head = head.next;
    }
};

Solution.prototype.getRandom = function() {
    const nodes = this.nodes.length;
    const index = Math.floor(Math.random() * nodes);

    return this.nodes[index];
};