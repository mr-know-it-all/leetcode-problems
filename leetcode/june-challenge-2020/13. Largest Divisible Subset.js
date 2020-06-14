// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

// Si % Sj = 0 or Sj % Si = 0.

// If there are multiple solutions, return any subset is fine.

// largestDivisibleSubset :: [Number] -> [Number]
const largestDivisibleSubset = nums => {
    if(nums.length <= 1) return nums;

    const tree = { val: 1, children: [] };
    let maxPath = [];

    const addToTree = (val, node, path = []) => {
        if(node.children.length === 0) {
            node.children.push({ val, children: [] });

            const currentPath = path.concat(val);
            if(currentPath.length > maxPath.length) maxPath = currentPath;

            return;
        }

        let dividesSubNode = false;
        if(val % node.val === 0) {
            for(subNode of node.children) {
                if(val % subNode.val === 0) {
                    dividesSubNode = true;
                    addToTree(val, subNode, [...path, subNode.val]);
                }
            }
        }
        if(!dividesSubNode) node.children.push({ val, children: [] })
    };

    nums.sort((a, b) => a - b);
    for(num of nums) addToTree(num, tree);

    return maxPath;
};
