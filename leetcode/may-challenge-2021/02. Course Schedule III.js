// There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.

// You will start on the 1st day and you cannot take two or more courses simultaneously.

// Return the maximum number of courses that you can take.

 

// Example 1:

// Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
// Output: 3
// Explanation: 
// There are totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
// Example 2:

// Input: courses = [[1,2]]
// Output: 1
// Example 3:

// Input: courses = [[3,2],[4,3]]
// Output: 0
 

// Constraints:

// 1 <= courses.length <= 104
// 1 <= durationi, lastDayi <= 104

// scheduleCourse :: [[Number]] -> Number
const scheduleCourse = (courses) => {
    if (!courses.length) return 0
  
    // smallest end time first
    courses.sort(([, d1], [, d2]) => d1 - d2);
    const q = new MinPriorityQueue({priority: x => x})
    
    // used by nth course
    let time = 0;
    // courses that have to be removed
    let removed = 0;
    
    for(let c of courses) {
      // add course time to total
      time += c[0];
      // add its duration to queue (min queue hence the - sign)
      q.enqueue(-c[0]);
      
      // if current course limit is exceded by total time
      if(time > c[1]) {
        // remove previous course with largest duration
        time += q.dequeue().element;
        removed++;
      }
    }
  
    return courses.length - removed;
};