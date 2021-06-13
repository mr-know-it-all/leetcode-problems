// A car travels from a starting position to a destination which is target miles east of the starting position.

// Along the way, there are gas stations.  Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas.

// The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.

// When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.

// What is the least number of refueling stops the car must make in order to reach its destination?  If it cannot reach the destination, return -1.

// Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.  If the car reaches the destination with 0 fuel left, it is still considered to have arrived.

 

// Example 1:

// Input: target = 1, startFuel = 1, stations = []
// Output: 0
// Explanation: We can reach the target without refueling.
// Example 2:

// Input: target = 100, startFuel = 1, stations = [[10,100]]
// Output: -1
// Explanation: We can't reach the target (or even the first gas station).
// Example 3:

// Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
// Output: 2
// Explanation: 
// We start with 10 liters of fuel.
// We drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.
// Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
// and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
// We made 2 refueling stops along the way, so we return 2.
 

// Note:

// 1 <= target, startFuel, stations[i][1] <= 10^9
// 0 <= stations.length <= 500
// 0 < stations[0][0] < stations[1][0] < ... < stations[stations.length-1][0] < target

// A more intuitive way to look at this problem would be to see it as a BFS
// From one station add to queue all stations that can be reched from it (with its fuel plus available fuel).

// 1. add start to queue
// 2. while queue is not empty
//    pop all stations from queue
//    if station is in reach add the stations that are in its reach to queue
//    if we reach target, stop
//    otherwise return -1


function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
    // how far can we travel
    let range: number = startFuel;
    // at which station we are
    let stationIndex: number = 0;
    // how many stops were made
    let stops: number = 0;
    
    // will hold fuel values
    const q: number[] = [];
    // while we're not at our target
    while(range < target) {
        while(
            stationIndex < stations.length &&
            // current station is in our current range
            // aka we can get here with the fuel we have
            stations[stationIndex][0] <= range
        ) {
            // add its fuel to q
            q.push(stations[stationIndex][1]);
            // adn go to the next station
            stationIndex++;
        }
        
        // if we have no more fuel to use, we can't continue
        if(!q.length) return -1;
        
        // we'll use the maximum available fuel value to increase our range
        const max = Math.max(...q);
        range += max;
        q.splice(q.indexOf(max), 1);
        
        // we made a stop
        stops++;
    }
    
    return stops;
};