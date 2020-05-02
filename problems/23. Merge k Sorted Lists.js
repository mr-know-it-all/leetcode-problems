// https://leetcode.com/problems/merge-k-sorted-lists/

// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// mergedLists :: ListNode N => [N] -> N
const mergeKLists = lists => {
    if(!lists || !lists.length) return null;
    if (lists.length === 1) return lists[0];
    let result;
    let current;

    while(true) {
        let index = null;

        lists.forEach((list, i) => {
            if(list && list.val !== undefined)  {
                if(index === null || list.val < lists[index].val) {
                    index = i;
                }
            }
        });

        if(index === null) {
            break;
        } else {
            if(!result) result = new ListNode(lists[index].val);
            else {
                const next = new ListNode(lists[index].val);
                if(!current) current = result;
                current.next = next;
                current = current.next;
            }
            lists[index] = lists[index].next;
            index = null;
        }
    }

    return result || null;
};
