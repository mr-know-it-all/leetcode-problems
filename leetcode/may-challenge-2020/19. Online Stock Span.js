// Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

// For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

// SOLUTION 1:

// StockSpanner :: () -> ()
const StockSpanner = function() {
    this.prices = [];
};

// next :: Number -> Number
StockSpanner.prototype.next = function(price) {
    const n = this.prices.length;

    // we'll represent price as [value, bestIndex it had] in this.prices array
    // bestIndex is the smallest index that had a value <= to price

    // first price, just add it and return 1
    if(n === 0) {
        this.prices.push([price, 0]);
        return 1;
    }

    // if last added price is smaller than the current one
    if(this.prices[n - 1][0] <= price) {
        let bestIndex = this.prices[n - 1][1]

        // jump best indexes (price[1]) of prevous prices
        // next bestIndex will be the index just before the bestIndex that was <= to price
        while(bestIndex - 1 >= 0 && this.prices[bestIndex - 1][0] <= price) {
            bestIndex = this.prices[bestIndex - 1][1];
        }

        // after we can't jump anymore continue searching
        while(bestIndex - 1 >= 0 && this.prices[bestIndex - 1][0] <= price) {
            bestIndex--;
        }

        // we found it, add it to this.prices
        this.prices.push([price, bestIndex]);
        // we'll return length of this.prices plus 1 (bestIndex we just added) minus the bestIndex
        return n + 1 - bestIndex;
    } else {
        // no previous bestIndex, we return 1
        this.prices.push([price, n]);
        return 1;
    }
};

// SOLUTION 2:
// (monotonic stack)

// StockSpanner :: () -> ()
const StockSpanner = function() {
    const stack = [];

    this.next = price => {
        const n = stack.length;

        let span = 1;
        while(stack.length > 0 && stack[stack.length - 1][0] <= price) {
            span += stack.pop()[1];
        }
        stack.push([price, span]);

        return span;
    }
};
