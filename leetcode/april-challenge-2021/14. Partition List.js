// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]
 

// Constraints:

// The number of nodes in the list is in the range [0, 200].
// -100 <= Node.val <= 100
// -200 <= x <= 200

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// SOLUTION 1:

// partition :: ListNode N => (N, Number) -> N
const partition = function(head, x) {
    const smaller = [];
    const larger = [];
    
    while(head) {
      if(head.val < x) smaller.push(head.val);
      else larger.push(head.val);
      head = head.next;
    }
    
    const result = new ListNode(-1);
    let pointer = result;
    
    for(let val of smaller) {
      pointer.next = new ListNode(val);
      pointer = pointer.next;
    }
    
    for(let val of larger) {
      pointer.next = new ListNode(val);
      pointer = pointer.next;
    }
  
    return result.next;
  };

// SOLUTION 2:
  
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// partition :: ListNode N => (N, Number) -> N
const partition = function(head, x) {  
    const left = new ListNode(-1);;
    const right = new ListNode(-1);
    
    let smaller = left;
    let larger = right;
    
    while(head) {
      const val = head.val;
      
      if(val < x) {
        smaller.next = new ListNode(val);
        smaller = smaller.next;
      } else {
        larger.next = new ListNode(val);
        larger = larger.next;
      }
      head = head.next;
    }
    
    smaller.next = right.next;
    
    return left.next;
  };  