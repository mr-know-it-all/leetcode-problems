// Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.

// Given two positive integers left and right represented as strings, return the number of super-palindromes integers in the inclusive range [left, right].

 

// Example 1:

// Input: left = "4", right = "1000"
// Output: 4
// Explanation: 4, 9, 121, and 484 are superpalindromes.
// Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
// Example 2:

// Input: left = "1", right = "2"
// Output: 1
 

// Constraints:

// 1 <= left.length, right.length <= 18
// left and right consist of only digits.
// left and right cannot have leading zeros.
// left and right represent integers in the range [1, 1018].
// left is less than or equal to right.

// SOLUTION 1:

const isP = n => {
    return String(n).split('').reverse().join('') === String(n);
}

// superpalindromesInRange :: (String, String) -> Number
const superpalindromesInRange = (left, right) => {
    left = BigInt(Number(left));
    right = BigInt(Number(right));
    const limit = 100000;
    let count = 0;
    
    for(let i = 1; i < limit; i++) {
        let s1 = String(i);
        let s2 = s1.split('').reverse().join('');
        let p = s1 + s2;
        let pp = BigInt(p) * BigInt(p);
        
        if(pp > right) break;
        else if(pp >= left && isP(pp)) count++;
    }
    
    for(let i = 1; i < limit; i++) {
        let s1 = String(i);
        let s2 = s1.split('').reverse().join('');
        let p = s1 + s2.slice(1);
        let pp = BigInt(p) * BigInt(p);
    
        if(pp > right) break;
        else if(pp >= left && isP(pp)) count++;
    }
    
    return count;
};

// SOLUTION 2:

/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
 var superpalindromesInRange = function(L, R) {
        
    let V=['1','4','9','121','484','10201','12321','14641','40804','44944','1002001','1234321','4008004','100020001','102030201','104060401','121242121','123454321','125686521','400080004','404090404','10000200001','10221412201','12102420121','12345654321','40000800004','1000002000001','1002003002001','1004006004001','1020304030201','1022325232201','1024348434201','1210024200121','1212225222121','1214428244121','1232346432321','1234567654321','4000008000004','4004009004004','100000020000001','100220141022001','102012040210201','102234363432201','121000242000121','121242363242121','123212464212321','123456787654321','400000080000004','10000000200000001','10002000300020001','10004000600040001','10020210401202001','10022212521222001','10024214841242001','10201020402010201','10203040504030201','10205060806050201','10221432623412201','10223454745432201','12100002420000121','12102202520220121','12104402820440121','12122232623222121','12124434743442121','12321024642012321','12323244744232321','12343456865434321','12345678987654321','40000000800000004','40004000900040004'];
    let res = 0;
    
    for (v of V) {
        if (equal(v, R) && equal(L, v)) res++;
    }
    
    return res;
};

function equal (l, r) {
    if (l.length < r.length) return true;
    if (l.length > r.length) return false;
    for (let i = 0; i < l.length; i++){
       
        if (l[i] < r[i]) return true;
        if (l[i] > r[i]) return false;
       
    }
    return true;
};