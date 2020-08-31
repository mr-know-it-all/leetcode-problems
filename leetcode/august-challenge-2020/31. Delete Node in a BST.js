// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
//
// Basically, the deletion can be divided into two stages:
//
// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).
//
// Example:
//
// root = [5,3,6,2,4,null,7]
// key = 3
//
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Given key to delete is 3. So we find the node with value 3 and delete it.
//
// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
//
//     5
//    / \
//   4   6
//  /     \
// 2       7
//
// Another valid answer is [5,2,6,null,4,null,7].
//
//     5
//    / \
//   2   6
//    \   \
//     4   7

// SOLUTION 1:

// minNode :: TreeNode T => T -> T
const minNode = node => {
    while(node.left != null) node = node.left;
    return node;
}

// deleteNode :: TreeNode T -> (T, Number) -> T
const deleteNode = (root, key) => {
    if(root == null) return null;

    if(key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if(key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if(root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }

        const min = minNode(root.right);
        root.val = min.val;
        root.right = deleteNode(root.right, min.val);
    }

    return root;
};

// SOLUTION 2:

// deleteNode :: TreeNode T -> (T, Number) -> T
const deleteNode = (root, key) => {
    if(root == null) return null;

    if(key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if(key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if(root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }

        // add left branch at the left of the smallest element in right branch
        let { left, right } = root;
        let curr = right;
        while(curr.left) curr = curr.left;
        curr.left = left;

        return right;
    }

    return root;
};
