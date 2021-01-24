// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4.

// SOLUTION 1:

// mergeLists :: ListNode N => [N] -> N
const mergeKLists = list => {
    if(list.length === 0) return null;
    
    const result = new ListNode(-1);
    let pointer = result;
    
    while(true) {
        let min = null;
        for(let i = 0; i < list.length; i++) {
            if(list[i] === null) {
                list.splice(i--, 1);
                continue;
            }
            if(min === null || list[i].val < list[min].val) min = i;
        }
        if(min === null) break;
        
        pointer.next = list[min];
        pointer = pointer.next;
        list[min] = list[min].next;
    }
    
    pointer.next = null;
    
    return result.next;
};

// SOLUTION 2:

// mergeLists :: ListNode N => [N] -> N
const mergeKLists = list => {
    if(list.length === 0) return null;
    
    let pool = [];
    for(let node of list) {
        let pointer = node;
        while(pointer) {
            pool.push(pointer.val);
            pointer = pointer.next;
        }
    }
    pool.sort((a, b) => a - b);
    
    const result = new ListNode(-1);
    let pointer = result;
    for(let val of pool) {
        pointer.next = new ListNode(val);
        pointer = pointer.next;
    }
        
    return result.next;
};