// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// MinStack :: () => Object
const MinStack = function() {
    this.stack = [];
    this.queue = [];
};

// addToQueue :: [Number] -> Number -> ()
const addToQueue = q => x => {
    const len = q.length;
    if(len === 0) {
        q.push(x);
        return;
    }

    for(let i = 0; i < len; i++) {
        if(q[i] >= x) {
            q.splice(i, 0, x);
            return;
        }
    }

    q.push(x);
}

// push :: Number -> ()
MinStack.prototype.push = function(x) {
    this.stack.unshift(x);
    addToQueue(this.queue)(x);
};

// pop :: () -> ()
MinStack.prototype.pop = function() {
    let x = this.stack.shift();
    this.queue.splice(this.queue.indexOf(x), 1);
};

// top :: () -> Number
MinStack.prototype.top = function() {
    return this.stack[0];
};

// getMin :: () -> Number
MinStack.prototype.getMin = function() {
    return this.queue[0];
};
