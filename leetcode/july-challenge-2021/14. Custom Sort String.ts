// order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

// order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.

// Return any permutation of str (as a string) that satisfies this property.

// Example:
// Input: 
// order = "cba"
// str = "abcd"
// Output: "cbad"
// Explanation: 
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
 

// Note:

// order has length at most 26, and no character is repeated in order.
// str has length at most 200.
// order and str consist of lowercase letters only.

function customSortString(order: string, str: string): string {
    const val = {};
    let i = 0;
    for(let c of order) {
        val[c] = i++;
    }
    
    for(let c of str) {
        if(val[c] === undefined) val[c] = Infinity;
    }
    
    const list = Array.from(str);
    list.sort((a, b) => val[a] - val[b]);
    
    return list.join('');
};