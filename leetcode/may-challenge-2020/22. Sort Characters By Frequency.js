// Given a string, sort it in decreasing order based on the frequency of characters.

// SOLUTION 1:

// frequencySort :: String -> String
const frequencySort = function(string) {
    const freq = {};

    const N = string.length;
    const chars = Array.from({ length: N });

    for(let i = 0; i < N; i++) {
        let char = string[i];
        freq[char] = (freq[char] || 0) + 1;
        chars.push(char);
    }

    chars.sort((a, b) => {
        const A = freq[a];
        const B = freq[b];

        if(A > B) return -1;
        if(A < B) return 1;
        if(A === B) {
            if(a > b) return -1;
            if(a < b) return 1;
            return 0
        }
    });

    return chars.join('');
};

// SOLUTION 2:
// TODO: add faster (smarter) solution

// frequencySort :: String -> String
const frequencySort = function(string) {
    const freq = {};

    const chars = [];

    const S = string.length;
    for(let i = 0; i < S; i++) {
        let char = string[i];

        if(freq[char] !== undefined) {
            freq[char]++;
        } else {
            freq[char] = 1;
            chars.push(char);
        }
    }

    chars.sort((a, b) => freq[b] - freq[a]);

    let result = '';

    const C = chars.length;
    for(let i = 0; i < C; i++) {
        const char = chars[i]
        result += char.repeat(freq[char]);
    }

    return result;
};
