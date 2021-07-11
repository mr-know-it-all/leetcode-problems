// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 

// Follow up:

// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

class MedianFinder {
    nums: number[]
    len: number
    
    constructor() {
        this.nums = [];
        this.len = 0;
    }
    
    findIndex(num) {
        let start = 0;
        let end = this.len;
        
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            
            if(this.nums[mid] === num) {
                return mid;
            } else if(this.nums[mid] > num) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        
        return start;
    }

    addNum(num) {
        const index = this.findIndex(num);
        this.nums.splice(index, 0, num);
        this.len++;
    }

    findMedian() {
        const half = this.len / 2;
        
        if(this.len % 2 === 0) {
            return (this.nums[half - 1] + this.nums[half]) / 2;
        } else {
            return this.nums[Math.floor(half)];
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */