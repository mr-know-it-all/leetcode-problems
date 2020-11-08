// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// addTwoNumbers :: ListNode N => N -> N
const addTwoNumbers = (l1, l2) => {
    let x = [];
    let y = [];
    
    let pointer = l1;
    while(pointer) {
        x.push(pointer.val);
        pointer = pointer.next;
    }
    
    pointer = l2;
    while(pointer) {
        y.push(pointer.val);
        pointer = pointer.next;
    }
    
    let prev = null;
    let carry = 0;
    while (x.length || y.length || carry) {
        const a = x.pop() || 0;
        const b = y.pop() || 0;
        const sum = a + b + carry;
        carry = sum > 9 ? 1 : 0;

        const newNode = new ListNode(sum % 10);
        newNode.next = prev;
        prev = newNode;
    }

    return prev;
};