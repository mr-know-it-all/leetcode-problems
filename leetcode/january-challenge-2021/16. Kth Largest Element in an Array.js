// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// SOLUTION 1:

// findKthLargest :: ([[Number]], Number) -> Number
const findKthLargest = (nums, k) => {
    nums.sort((a, b) => b - a);

    return nums[k - 1];
};

// SOLUTION 2:
// TODO: properly internalize this solution (the partition function)

// swap :: ([Number], Number, Number) -> ()
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// partition :: ([Number], Number, Number) -> Number
const partition = (arr, start, end) => {
    const pivot = arr[end];
    let i = start;
    let j = end - 1;

    while(i <= j) {    
        while(arr[i] < pivot) i += 1; 
        while (arr[j] > pivot) j -= 1;
        
        if(i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }

    swap(arr, i, end);
    return i;
}

// quickSelect :: ([Number], Number, Number, Number) -> Number
const quickSelect = (arr, start, end, k) => {
    const pivot = partition(arr, start, end);
    
    if(k < arr.length - pivot) {
        return quickSelect(arr, pivot + 1, end, k);
    } else if(k > arr.length - pivot) {
        return quickSelect(arr, start, pivot - 1, k);
    }
    
    return arr[pivot];
};

// findKthLargest :: ([[Number]], Number) -> Number
const findKthLargest = (nums, k) => {
    return quickSelect(nums, 0, nums.length - 1, k)
};

// SOLUTION 3:

const length = xs => xs.length;
const filter = (fn, xs) => xs.filter(fn)

// quickSelect :: Ord a => (Number := Integer, [a]) -> a
function quickSelect(kth, list) {
  // pivot is to be chosen in a smarter way
  const [x, ...xs] = list;
  // a single pass partition function should be used in production code
  const left = filter(y => y < x, xs);
  const right = filter(y => !(y < x), xs);
  const leftLen = length(left);

  return (
    kth < leftLen + 1
    ? quickSelect(kth, left)
    : kth > leftLen + 1
    ? quickSelect(kth - leftLen - 1, right)
    : x
  );
}

// findKthLargest :: ([[Number]], Number) -> Number
const findKthLargest = (nums, k) => {
    return quickSelect(nums.length - k + 1, nums)
};