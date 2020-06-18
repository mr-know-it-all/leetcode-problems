// Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.
//
// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

// SOLUTION 1:

// hIndex :: [[Number]] -> Number
const hIndex = citations => {
    if(citations.length === 0) return 0;

    for(let i = 0; i < citations.length; i++) {
        const index = citations.length - i;
        if(citations[i] >= index) return index;
    }

    return 0;
};

// SOLUTION 2:

// hIndex :: [[Number]] -> Number
const hIndex = citations => {
    if(citations.length === 0) return 0;

    let start = 0;
    let end = citations.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);

        if(citations[mid] === citations.length - mid) return citations[mid];

        if(citations[mid] >= citations.length - mid) end = mid - 1;
        else start = mid + 1;
    }

    return citations.length - start;
};
