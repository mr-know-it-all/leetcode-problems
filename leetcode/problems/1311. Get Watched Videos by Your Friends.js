// https://leetcode.com/problems/get-watched-videos-by-your-friends/

// There are n people, each person has a unique id between 0 and n-1. Given the arrays watchedVideos and friends, where watchedVideos[i] and friends[i] contain the list of watched videos and the list of friends respectively for the person with id = i.
//
// Level 1 of videos are all watched videos by your friends, level 2 of videos are all watched videos by the friends of your friends and so on. In general, the level k of videos are all watched videos by people with the shortest path exactly equal to k with you. Given your id and the level of videos, return the list of videos ordered by their frequencies (increasing). For videos with the same frequency order them alphabetically from least to greatest.
//
// Constraints:
//
// n == watchedVideos.length == friends.length
// 2 <= n <= 100
// 1 <= watchedVideos[i].length <= 100
// 1 <= watchedVideos[i][j].length <= 8
// 0 <= friends[i].length < n
// 0 <= friends[i][j] < n
// 0 <= id < n
// 1 <= level < n
// if friends[i] contains j, then friends[j] contains i

// SOLUTION 1:
// TODO: tidy up code and make it more performant

// watchedVideosByFriends :: ([[String]], [[Number]], Number, Number -> [String]
const watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    let levelFriends = [id];
    const added = { [id]: true };
    while(level > 0) {
        let tempIds = [];
        for(let id of levelFriends) {
            for(let friend of friends[id]) {
                if(added[friend]) continue;
                added[friend] = true;

                tempIds.push(friend)
            }
        }
        levelFriends = tempIds;
        level--;
    }

    let result = [];
    for(let friend of levelFriends) { result = result.concat(watchedVideos[friend]); }

    const freq = {};
    for(let video of result) { freq[video] = (freq[video] || 0) + 1; }

    return [...(new Set(result))].sort((a, b) => {
        if(freq[a] > freq[b]) {
            return 1;
        } else if(freq[a] === freq[b]) {
            if(a > b) return 1;
            else if(b > a) return -1;
            else return 0;
        } else {
            return -1;
        }
    });
};
