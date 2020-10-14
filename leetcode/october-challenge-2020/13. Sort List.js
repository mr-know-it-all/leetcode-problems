// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?



// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// SOLUTION 1:
// naive solution
// O(n) + O(n log n) + O(n) -> O(n log n) - time
// O(n) - space

// sortList :: ListNode -> ListNode 
const sortList = head => {
    if(!head) return head;
    
    const list = [];
    let pointer = head;
    list.push(pointer.val);
    
    while(pointer.next) {
        pointer = pointer.next;
        list.push(pointer.val);
    }

    list.sort((a, b) => a - b);
    
    let result;
    while(list.length) {
        if(!result) {
            result = new ListNode(list.shift());
            pointer = result;
        } else {
            pointer.next = new ListNode(list.shift());
            pointer = pointer.next;
        }
    }
    
    return result;
};

// SOLUTION 2:

// sortList :: ListNode -> ListNode 
const sortList = head => {
    if(head == null || head.next == null) return head;  

    // prev will be the pointer for left half ending point
    // slow will be the right part starting point
    // fast is half as fast as slow, it's used to find the middle of the list
    let prev = null, slow = head, fast = head;
    
    while(fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    
    prev.next = null;
    
    const l1 = sortList(head);
    const l2 = sortList(slow);
    
    return merge(l1, l2);
};

const merge = (l1, l2) => {
    const l = new ListNode(0);
    let pointer = l;
    
    while(l1 !== null && l2 !== null) {
      if(l1.val < l2.val) {
        pointer.next = l1;
        l1 = l1.next;
      } else {
        pointer.next = l2;
        l2 = l2.next;
      }
        
      pointer = pointer.next;
    }
    
    if(l1 != null) pointer.next = l1;
    if(l2 != null) pointer.next = l2;
    
    return l.next;
}