// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
//
// You may return any answer array that satisfies this condition.
//
//
//
// Example 1:
//
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
//
//
// Note:
//
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// DOLUTION 1:

// sortArrayByParity :: [Number] -> [Number]
const sortArrayByParity = xs => {
    const result = [];

    for(let x of xs) x % 2 !== 0 ? result.push(x) : result.unshift(x);

    return result;
};

// SOLUTION 2:

// sortArrayByParity :: [Number] -> [Number]
const sortArrayByParity = xs => {
    for(let i = 0; i < xs.length; i++) {
        if(xs[i] % 2 === 0) {
            xs.unshift(xs.splice(i, 1));
        }
    }

    return xs;
};

// SOLUTION 3:

// sortArrayByParity :: [Number] -> [Number]
const sortArrayByParity = xs => {
    const N = xs.length;
    const result = Array.from({ length: N });

    let left = 0, right = N - 1;
    for(let x of xs) {
        if(x % 2 === 0) {
            while(result[left] !== undefined) left++;
            result[left] = x;
        } else {
            while(result[right] !== undefined) right--;
            result[right] = x;
        }
    }

    return result;
};
