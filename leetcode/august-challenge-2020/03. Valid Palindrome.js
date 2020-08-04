// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
//
// Input: "race a car"
// Output: false
//
//
// Constraints:
//
// s consists only of printable ASCII characters.

// isPalindrome :: String -> Boolean
const isPalindrome = s => {
    let start = 0;
    let end = s.length - 1;

    while(start < end) {
        while(!(/[a-z0-9]/i.test(s[start]))) start++;
        while(!(/[a-z0-9]/i.test(s[end]))) end--;

        if(s[start] && s[end] && s[start].toLowerCase() !== s[end].toLowerCase()) return false;

        start++;
        end--;
    }

    return true;
};
