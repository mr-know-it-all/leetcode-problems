// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

// SOLUTION 1:

// rotateRight :: ListNode L => (L, Number) -> L
const rotateRight = (head, k) => {
    if(!head) return head;
    
    let pointer = head;
    const list = [];
    
    list.push(pointer.val);
    while(pointer.next) {
        pointer = pointer.next;
        list.push(pointer.val);
    };
    
    k %= list.length
    
    while(k--) list.unshift(list.pop());
    
    head = new ListNode(list[0]);
    pointer = head;
    
    for(let i = 1; i < list.length; i++) {
        pointer.next = new ListNode(list[i]);
        pointer = pointer.next;
    }
    
    return head;
};

// SOLUTION 2:
// reverset rotation N - k times

// rotateRight :: ListNode L => (L, Number) -> L
const rotateRight = (head, k) => {
    if(!head) return head;
    
    let tail = head;
    let N = 1;
    while(tail.next) {
        tail = tail.next;
        N++;
    }
    
    // we connect tail with head, making a circular list
    tail.next = head;
    
    k = N - (k % N);
    while(k > 0) {
        head = head.next;
        tail = tail.next;
        k--;
    }
    
    // we break the circular list
    tail.next = null;
    
    return head;
};