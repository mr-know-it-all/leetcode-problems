// Given a list of non-overlapping axis-aligned rectangles rects, write a function pick which randomly and uniformily picks an integer point in the space covered by the rectangles.
//
// Note:
//
// An integer point is a point that has integer coordinates.
// A point on the perimeter of a rectangle is included in the space covered by the rectangles.
// ith rectangle = rects[i] = [x1,y1,x2,y2], where [x1, y1] are the integer coordinates of the bottom-left corner, and [x2, y2] are the integer coordinates of the top-right corner.
// length and width of each rectangle does not exceed 2000.
// 1 <= rects.length <= 100
// pick return a point as an array of integer coordinates [p_x, p_y]
// pick is called at most 10000 times.
// Example 1:
//
// Input:
// ["Solution","pick","pick","pick"]
// [[[[1,1,5,5]]],[],[],[]]
// Output:
// [null,[4,1],[4,1],[3,3]]
// Example 2:
//
// Input:
// ["Solution","pick","pick","pick","pick","pick"]
// [[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
// Output:
// [null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]
// Explanation of Input Syntax:
//
// The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array of rectangles rects. pick has no arguments. Arguments are always wrapped with a list, even if there aren't any.

// SOLUTION 1:

// getRandomInt :: (Number, Number) -> Number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Solution :: [[Number]] -> ()
const Solution = function(rects) {
    this.rects = rects;
};

// pick :: () -> Number
Solution.prototype.pick = function() {
    let sum = 0;

    let selected = this.rects[0];
    for(let i = 0; i < this.rects.length; i++) {
        const rectangle = this.rects[i];
        const width = rectangle[2] - rectangle[0] + 1;
        const height = rectangle[3] - rectangle[1] + 1;

        const area = width * height;
        sum += area;

        if(getRandomInt(0, sum) < area) selected = rectangle;
    }

    const x = selected[0] + getRandomInt(0, selected[2] - selected[0]);
    const y = selected[1] + getRandomInt(0, selected[3] - selected[1]);

    return [x, y];
};

// an alternative would be to use a areaSumSoFar variable
// for each rectangle save its starting value (e.g. 30: index 1, 70: index 2 ...)
//  ^ all this could be done once during initialization it seems ^
// after all rectangles are processed, generate random number from 0 to sum of all points in rectangles
// using the areaSumSoFar values find the rectangle to which that random number belongs
// after that, generate a random x from x1 to x2 and random y from y1 to y2 in the selected rectangle
