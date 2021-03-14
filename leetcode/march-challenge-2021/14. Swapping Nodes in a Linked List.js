// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]
// Example 3:

// Input: head = [1], k = 1
// Output: [1]
// Example 4:

// Input: head = [1,2], k = 1
// Output: [2,1]
// Example 5:

// Input: head = [1,2,3], k = 2
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100

// SOLUTION 1:

// swapNodes :: ListNode N => (N, Int) -> N
const swapNodes = (head, k) => {
    const list = [];
    let p = head;
    
    while(p) {
      list.push(p);
      p = p.next;
    }
    
    const n = list.length;
    
    const temp = list[k - 1];
    list[k - 1] = list[n - k];
    list[n - k] = temp;
    
    p = list[0];
    for(let x of list) {
      p.next = x;
      p = x;
    }
    list[n - 1].next = null;
    
    return list[0];
  };

// SOLUTION 2:

// swapNodes :: ListNode N => (N, Int) -> N
const swapNodes = (head, k) => {
    let a;
    let b;
    let p = head;
    k--;
    while(p) {
      if(k === 0) {
        a = p;
        b = head;
      }
      
      if(p.next && b) b = b.next;
      p = p.next;
      k--;
    }
  
    const temp = a.val;
    a.val = b.val;
    b.val = temp;
  
    return head;
  };