// Given a singly linked list, group all isOdd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// oddEvenList :: ListNode L => L -> L
const oddEvenList = head => {
    let currentNode = head;
    let left;
    let currentLeft;
    let right;
    let currentRight;
    let isOdd = true;

    while(currentNode) {
        if(isOdd) {
           if(left && currentLeft) {
               currentLeft.next = currentNode;
               currentLeft = currentLeft.next;
           } else {
               left = currentNode;
               currentLeft = left;
           }
           isOdd = false;
        } else {
            if(right && currentRight) {
                currentRight.next = currentNode;
                currentRight = currentRight.next;
            } else {
                right = currentNode;
                currentRight = right;
            }
            isOdd = true;
        }
        currentNode = currentNode.next;
    }


    currentRight && (currentRight.next = null);
    currentLeft && (currentLeft.next = right);

    return left || null;
};
