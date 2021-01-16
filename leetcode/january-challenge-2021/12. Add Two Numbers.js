// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// SOLUTION 1:

// addTwoNumbers :: ListNode N => (N, N) -> N
const addTwoNumbers = (a, b) => {
    let carry = 0;
    let r;
    let c;
    
    while(carry > 0 || a || b) {
        let s = (a && a.val || 0) + (b && b.val || 0) + carry
        a = a && a.next;
        b = b && b.next;
        
        if(s > 9) {
            s = s - 10;
            carry = 1;
        } else {
            carry = 0;
        }
        
        if(!r) {
            r = new ListNode(s);
            c = r;
        } else {
            c.next = new ListNode(s);
            c = c.next;
        }

    }
    
    return r;
};

