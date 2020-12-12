// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 20

// SOLUTION 1:

const R = 'right';
const D = 'down';
const L = 'left';
const U = 'up';

// generateMatrix :: Number -> [[Number]]
const generateMatrix = n => {
    const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    
    const inBounds = ([x, y]) => x < n && x >= 0 && y >= 0 && y < n; 
    const isOpen = ([x, y]) => matrix[x][y] === 0;
    
    let dir = R;
    let pos = [0, 0];

    for(let i = 1; i <= n * n; i++) {
        let [x, y] = pos;
        
        matrix[x][y] = i;

        if(dir === R) {
            const nextPos = [x, y + 1];
            if(inBounds(nextPos) && isOpen(nextPos)) {
                pos = nextPos;
            } else {
                pos = [x + 1, y];
                dir = D;
            }
        } else if(dir === D) {
            const nextPos = [x + 1, y];
            if(inBounds(nextPos) && isOpen(nextPos)) {
                pos = nextPos;
            } else {
                pos = [x, y - 1];
                dir = L;
            }
        } else if(dir === L) {
            const nextPos = [x, y - 1];
            if(inBounds(nextPos) && isOpen(nextPos)) {
                pos = nextPos;
            } else {
                pos = [x - 1, y];
                dir = U;
            }
        } else if(dir === U) {
            const nextPos = [x - 1, y];
            if(inBounds(nextPos) && isOpen(nextPos)) {
                pos = nextPos;
            } else {
                pos = [x, y + 1];
                dir = R;
            }
        }
    }
    
    return matrix;
};

// SOLUTION 2:

const directions = [[0, 1], [1, 0], [0,-1], [-1, 0]];

// generateMatrix :: Number -> [[Number]]
const generateMatrix = n => {
    const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    
    const inBounds = ([x, y]) => x < n && x >= 0 && y >= 0 && y < n; 
    const isOpen = ([x, y]) => matrix[x][y] === 0;
    const isValid = pos => inBounds(pos) && isOpen(pos);
    
    let direction = 0;
    let pos = [0, 0];
    for(let i = 1; i <= n * n; i++) {
        let [x, y] = pos;
        
        matrix[x][y] = i;

        const [dirX, dirY] = directions[direction];
        
        if(isValid([x + dirX, y + dirY])) {
            pos = [x + dirX, y + dirY];
        } else {  
            direction = (direction + 1) % 4;
    
            const [dirX, dirY] = directions[direction];
            pos = [x + dirX, y + dirY];
        }
    }
    
    return matrix;
};