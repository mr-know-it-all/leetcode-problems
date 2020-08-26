// In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.
//
// Train tickets are sold in 3 different ways:
//
// a 1-day pass is sold for costs[0] dollars;
// a 7-day pass is sold for costs[1] dollars;
// a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.
//
// Return the minimum number of dollars you need to travel every day in the given list of days.
//
//
//
// Example 1:
//
// Input: days = [1,4,6,7,8,20], costs = [2,7,15]
// Output: 11
// Explanation:
// For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
// On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
// On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
// In total you spent $11 and covered all the days of your travel.
// Example 2:
//
// Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
// Output: 17
// Explanation:
// For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
// On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
// In total you spent $17 and covered all the days of your travel.
//
//
// Note:
//
// 1 <= days.length <= 365
// 1 <= days[i] <= 365
// days is in strictly increasing order.
// costs.length == 3
// 1 <= costs[i] <= 1000

// SOLUTION 1:
// nice intuition but TLE

// mincostTickets :: ([Number], [Number]) -> Number
const mincostTickets = function(days, costs) {
    const [_1, _7, _30] = costs;

    let min = Infinity;
    const compute = (day = 0, until = 0, acc = 0) => {
        if(acc >= min) return;

        if(days[day] === undefined) {
            min = Math.min(min, acc);
        }

        if(until <= days[day]) {
            compute(day + 1, 0, acc + _1);
            compute(day + 1, days[day] + 7, acc + _7);
            compute(day + 1, days[day] + 30, acc + _30);
        } else {
            compute(day + 1, until, acc);
        }
    };

    compute();

    return min;
};

// SOLUTION 2:

// from day 1 to 365
// after day 365 return 0 cost, stop computation
// if day cost already computed return it
// if we don't have a travel day, cost of that day is 0, we go to the next day
// if we are travelling that day, the cost of the day can be:
  // A: one day pass, and we go to next day
  // B: seven days pass, and we go forward seven days
  // C: thirty days pass, and we go forward thirty days
// after the min cost of a day is computed recursively, we return it
// in the end we'll return the value of the 365th day,
// the cost of travel for a year, with non-travelling and travelling days

// note: could return early, at the last travelling day,
// but the improvement would be barely noticeable
// also preallocate space for memo

// mincostTickets :: ([Number], [Number]) -> Number
const mincostTickets = function(days, costs) {
    const [_1, _7, _30] = costs;

    const travelDays = {};
    for(let day of days) travelDays[day] = true;
    const memo = [];

    const compute = (day = 1) => {
        if(day > 365) return 0;
        if(memo[day]) return memo[day];

        if(travelDays[day]) {
            memo[day] = Math.min(
                compute(day + 1) + _1,
                compute(day + 7) + _7,
                compute(day + 30) + _30
            );
        } else {
            memo[day] = compute(day + 1);
        }

        return memo[day];
    };

    return compute();
};

// SOLUTION 3:

// mincostTickets :: ([Number], [Number]) -> Number
const mincostTickets = function(days, costs) {
    const [_1, _7, _30] = costs;

    const travelDays = {};
    for(let day of days) travelDays[day] = true;

    const dp = Array.from({ length: 366 });
    dp[0] = 0;

    for(let i = 1; i < 366; i++) {
        if(!travelDays[i]) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = Math.min(
                dp[i - 1] + _1,
                dp[Math.max(0, i - 7)] + _7,
                dp[Math.max(0, i - 30)] + _30
            );
        }
    }

    return dp[365];
};
