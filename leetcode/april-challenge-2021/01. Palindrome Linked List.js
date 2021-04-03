// Given the head of a singly linked list, return true if it is a palindrome.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?

// SOLUTION 1:

// isPalindrome :: ListNode -> Boolean
const isPalindrome = (head) => {
    const arr = [];
    
    while(head) {
      arr.push(head.val);
      head = head.next;
    }
    
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
      if(arr[left] !== arr[right]) return false;
      left++;
      right--;
    }
    
    return true;
  };