// Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

// Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

// SOLUTION 1:

const base = 26;
const MOD = 2 ** 32;

const pow = (base, exp) => {
    let result = 1;
    for(let i = 0; i < exp; i++) result = (result * base) % MOD;
    return result;
};

// longestDupSubstring :: String -> String
const longestDupSubstring = S => {
    const nums = S.split('').map(c => c.charCodeAt(0) - 'a'.charCodeAt(0));

    // TODO: properly internalize this algorithm
    const test = length => {
        const p = pow(base, length);

        let hash = 0;
        // compute hash for first substring
        for (let i = 0; i < length; i++) hash = (base * hash + nums[i]) % MOD;

        const set = new Set([hash]);

        // compute next substring of length L based on the previous hash
        for(let i = 1; i <= nums.length - length; i++) {
        hash = ((hash * base - ((nums[i - 1] * p) % MOD) + MOD) % MOD) + (nums[i + length - 1] % MOD);

        // we have a duplicate of length L
        if(set.has(hash)) return i;
            set.add(hash);
        }
        return false;
    };

    let length = 0;
    let possibleLength = S.length;
    let startIndex = 0

    while (length < possibleLength) {
        const mid = (length + possibleLength) >> 1;

        const position = test(mid);
        if(position) {
            // if we find a duplicate for a length L, try to find for bigger values of L
            length = mid + 1;
            startIndex = position;
        } else {
            // try to find for smaller values of L
            possibleLength = mid;
        }
    }

    return startIndex >= 0 ? S.substring(startIndex, startIndex + length - 1) : '';
};
