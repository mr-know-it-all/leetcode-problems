// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

 

// Example 1:

// Input: root = [2,1,3]
// Output: [2,1,3]
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The input tree is guaranteed to be a binary search tree.

// serialize :: TreeNode -> String
const serialize = root => {
    if(!root) return '';
    
    const result = (function preOrder(node) {
        return [
            node.val,
            ...(node.left ? preOrder(node.left) : ['*']),
            ...(node.right ? preOrder(node.right) : ['*'])
        ];
    })(root);
    
    return result.join(':');
};

// deserialize :: String -> TreeNode
const deserialize = data => {
    if(!data) return null;
    
    const list = data.split(':');

    const root = (function buildTree() {
        const val = list.shift();
        if(val === '*') return null;

        const node = new TreeNode(val);
        
        node.left = buildTree();
        node.right = buildTree();

        return node;
    })();

    return root;
};