// https://leetcode.com/problems/reverse-nodes-in-k-group/

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// reverseKGroup :: ListNode N -> (N, Number) -> N
var reverseKGroup = function(head, k) {
    if(k === 1) return head;

    let currentNode = head;
    let responseNode = null;
    let currentResponseNode = null;
    let kNodes = [];

    w1: while(currentNode) {
        for(let i = 1; i <= k; i++) {
            if(!currentNode) break;
            kNodes.push(currentNode);
            currentNode = currentNode.next;
        }

        if(kNodes.length !== k) {
            currentResponseNode.next = kNodes[0];
            break w1;
        }

        for(let i = k - 1; i >= 0; i--) {
            kNodes[i].next = kNodes[i - 1] || null;
        }

        if(!responseNode) responseNode = kNodes[k - 1];
        if(!currentResponseNode) {
            currentResponseNode = kNodes[0];
        } else {
            currentResponseNode.next = kNodes[k - 1];
            currentResponseNode = kNodes[0];
        }

        kNodes = [];
    }

    return responseNode;
};
