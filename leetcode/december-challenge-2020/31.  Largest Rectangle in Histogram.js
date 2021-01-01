// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

 


// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

 


// The largest rectangle is shown in the shaded area, which has area = 10 unit.

 

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

// SOLUTION 1:
// O(n ^ 2)
 
// largestRectangleArea :: [Number] -> Number
const largestRectangleArea = function(heights) {
    let maxArea = -Infinity;
    for (let i = 0; i < heights.length; i++){
      let minHeight = heights[i];
      for (let j = i; j <  heights.length; j++){
        minHeight = Math.min(minHeight, heights[j]);
        maxArea = Math.max(maxArea, minHeight * (j - i + 1));
      }
    }

    return maxArea === -Infinity ? 0 : maxArea;
};

// SOLUTION 2:
// O(n)
 
// largestRectangleArea :: [Number] -> Number
const largestRectangleArea = function(heights) {
    const stack = [-1];
    heights.push(0);
    let max = 0;
    for(let i = 0; i < heights.length; i++) {
        while(heights[i] < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const w = i - stack[stack.length - 1] - 1;
            max = Math.max(h * w, max);
      }
        stack.push(i);
    }
    
    return max;
};