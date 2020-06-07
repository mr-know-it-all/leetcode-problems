// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.

// SOLUTION 1:

// canConstruct :: (String, String) -> Boolean
const canConstruct = (ransomNote, magazine) => {
    let L = ransomNote.length;
    let letters = magazine.split('');
    let count = 0;

    for(let i = 0; i < L; i++) {
        const letterIndex = letters.indexOf(ransomNote[i]);
        if(letterIndex !== -1) {
            count += 1;
            letters.splice(letterIndex, 1);
        } else {
          break;
        }
    }

    return count === L;
};

// TODO: find faster approach
