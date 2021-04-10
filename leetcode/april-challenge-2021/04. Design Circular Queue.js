// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implementation the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
 

// Example 1:

// Input
// ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 3, true, true, true, 4]

// Explanation
// MyCircularQueue myCircularQueue = new MyCircularQueue(3);
// myCircularQueue.enQueue(1); // return True
// myCircularQueue.enQueue(2); // return True
// myCircularQueue.enQueue(3); // return True
// myCircularQueue.enQueue(4); // return False
// myCircularQueue.Rear();     // return 3
// myCircularQueue.isFull();   // return True
// myCircularQueue.deQueue();  // return True
// myCircularQueue.enQueue(4); // return True
// myCircularQueue.Rear();     // return 4
 

// Constraints:

// 1 <= k <= 1000
// 0 <= value <= 1000
// At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.
 

// Follow up: Could you solve the problem without using the built-in queue? 

// SOLUTION 1:
// cheat

const MyCircularQueue = function(k) {
    this.queue = [];
    this.length = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.queue.length === this.length) {
        return false;
    }
    
    this.queue.push(value);
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.queue.length) {
        return false;
    }
    
    this.queue.shift();
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.queue.length > 0 ? this.queue[0] : -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.queue.length > 0 ? this.queue[this.queue.length - 1] : -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.length;
};

// SOLUTION 2:

const MyCircularQueue = function(k) {
    this.storage = [];
    this.currentSize = 0;
    this.maxSize = k;
    this.front = 0;
    this.rear = -1;
  };
  
  MyCircularQueue.prototype.enQueue = function(value) {
    if (this.currentSize >= this.maxSize) {
      return false;
    };
  
    this.rear = (this.rear + 1) % this.maxSize;
    this.storage[this.rear] = value;
    this.currentSize++;
    
    return true;
  };
  
  MyCircularQueue.prototype.deQueue = function() {
    if (this.currentSize === 0) {
      return false;
    };
  
    this.front = (this.front + 1) % this.maxSize;
    this.currentSize--;
    
    return true;
  };
  
  MyCircularQueue.prototype.Front = function() {
    return this.currentSize === 0 ? -1 : this.storage[this.front];
  };
  
  MyCircularQueue.prototype.Rear = function() {
    return this.currentSize === 0 ? -1 : this.storage[this.rear];
  };
  
  MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0;
  };
  
  MyCircularQueue.prototype.isFull = function() {
    return this.currentSize === this.maxSize;
  };
