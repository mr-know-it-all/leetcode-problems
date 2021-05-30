// Count the number of prime numbers less than a non-negative number, n.

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
 

// Constraints:

// 0 <= n <= 5 * 106

// SOLUTION 1:
// naive TLE

// isPrime :: Number -> Boolean
const isPrime = n => {
    for(let i = 2; i < n; i++) if(n % i === 0) return false;
    
    return true;
}

// countPrimes :: Number -> Number
const countPrimes = (n) => {
    let count = 0;
    
    for(let i = 2; i < n; i++) if(isPrime(i)) count++;
    
    return count;
};

// SOLUTION 2:

// countPrimes :: Number -> Number
const countPrimes = (n) => {
    const primes = new Array(n).fill(true);
    
    for(let i = 2; i < n; i++) {
        if(!primes[i]) continue;
        
        for(let j = i * i; j < n; j += i) {
            primes[j] = false;
        }
    }
    
    let count = 0;
    for(let i = 2; i < n; i++) if(primes[i]) count++;
    return count;
};