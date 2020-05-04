// https://leetcode.com/problems/text-justification/

// Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// fullJustify :: ([String], Number) -> [String]
const fullJustify = (words, maxWidth) => {
    let result = [];

    // while there are words left to add
    while(words.length > 0) {
        let row = [];
        let rowLength = 0;

        // while there is a word available
        // and its length added to the current row plus the spaces required between words
        // is within the bounds of maxWidth
        while(words[0] && rowLength + words[0].length + row.length - 1 < maxWidth) {
            // add it to row
            row.push(words[0]);
            // increase length of current row variable by word length
            rowLength += words[0].length;
            // remove word from list to be processed
            words.shift();
        }

        // add spaces to length of current row
        rowLength += row.length - 1;

        // if we're not at the last line of text
        if(words.length > 0) {
            let index = 0;
            // if there is the need to justify
            while(rowLength < maxWidth) {
                if(row.length === 1) {
                    // for a single word row add spaces to the word
                    row[0] = row[0].padEnd(maxWidth);
                    break;
                } else {
                    // for multiple words rows use index variable as a state machine
                    // and add spaces starting from the left of the row
                    row[index] += ' ';
                    rowLength += 1;
                    index += 1;
                    if(index === row.length - 1) { index = 0; };
                }
            }
        } else {
            const lastWord = row[row.length - 1];
            // for the last line of text add spaces at the end if required
            row[row.length - 1] = lastWord.padEnd(lastWord.length + maxWidth - rowLength);
        }

        result.push(row.join(' '));
    }

    return result;
};
