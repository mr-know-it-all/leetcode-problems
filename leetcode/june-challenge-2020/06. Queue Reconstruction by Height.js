// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

// Note:
// The number of people is less than 1,100.

// reconstructQueue :: [[Number]] -> [[Number]]
const reconstructQueue = people => {
    people.sort((a, b) => a[0] - b[0]);

    const res = Array.from({ length: people.length });

    while(people.length > 0) {
        const [h, k] = people.shift();

        let s = 0;
        // every person will be at least at position/index k
        // if there are already s people of smaller height in front
        // position becomes k + s
        for(let i = 0; i <= k + s; i++) if(res[i] && res[i][0] < h) s++;

        res[k + s] = [h, k];
    }

    return res;
};
