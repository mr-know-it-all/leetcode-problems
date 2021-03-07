// Design a HashMap without using any built-in hash table libraries.

// To be specific, your design should include these functions:

// put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
// get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

// Example:

// MyHashMap hashMap = new MyHashMap();
// hashMap.put(1, 1);          
// hashMap.put(2, 2);         
// hashMap.get(1);            // returns 1
// hashMap.get(3);            // returns -1 (not found)
// hashMap.put(2, 1);          // update the existing value
// hashMap.get(2);            // returns 1 
// hashMap.remove(2);          // remove the mapping for 2
// hashMap.get(2);            // returns -1 (not found) 

// Note:

// All keys and values will be in the range of [0, 1000000].
// The number of operations will be in the range of [1, 10000].
// Please do not use the built-in HashMap library.

// SOLUTION 1:
// TODO: implement separete separete chaining method using linked list instea of arrays

const MyHashMap = function() {
    this.nodes = 15000;
    this.buckets = new Array(15001).fill([]);
};
  
MyHashMap.prototype.put = function(k, val) {
    const key = k % this.nodes;
    const ind = this.buckets[key].findIndex(e => e.k === k);
    
    if(ind !== -1) this.buckets[key][ind].val = val;
    else this.buckets[key].push({ k, val });
};
  
MyHashMap.prototype.get = function(k) {
    const key = k % this.nodes;
    const ind = this.buckets[key].findIndex(e => e.k === k);
    
    if(ind === -1) return -1;
    else return this.buckets[key][ind].val;
};
  
MyHashMap.prototype.remove = function(k) {
    const key = k % this.nodes;
    const ind = this.buckets[key].findIndex(e => e.k === k);
    
    if(ind !== -1) this.buckets[key].splice(ind, 1);
};
    