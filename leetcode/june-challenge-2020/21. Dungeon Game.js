// The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.
//
// The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.
//
// Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).
//
// In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
//
//
//
// Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;

    const hp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            const dungeonCell = dungeon[i][j];

            // basically, at each dungeon cell starting from the princess cell,
            // we ask how many hp do we need, at a minimum, to be in that cell
            // A. for the princess cell the answer is maximum of (1, 1 (-) dungeon cell)
            // B> for the others is maxmum of (1, previous hp cell [actually future hp cell :D] (-) dungeon cell)
            // previous hp cell will be min of right or down starting from princess hp cell, the base case

            // if: (1 or minimum of previous hp cell value (-) dungeon cell) < 1
            // then: it means we already have enough min hp to be in the current dungeon cell
            // this value is bigger than 1 only when dungeon cell is negative
            // and its absolute value is bigger than 1 or previous hp cell

            // we're at the princess cell
            if(i === m - 1 && j === n - 1) { hp[i][j] = Math.max(1, 1 - dungeonCell); continue; }

            // we are on the bottom border
            // (i, j + 1) is initially the princess cell
            if(i === m - 1) { hp[i][j] = Math.max(1, hp[i][j + 1] - dungeonCell); continue; }

            // we are on the right border
            // (i + 1, j) is initially the princess cell
            if(j === n - 1) { hp[i][j] = Math.max(1, hp[i + 1][j] - dungeonCell); continue; }

            // we choose the minimum from right and down
            hp[i][j] = Math.max(1, Math.min(hp[i + 1][j], hp[i][j + 1]) - dungeonCell);
        }
    }

    return  hp[0][0];
};
