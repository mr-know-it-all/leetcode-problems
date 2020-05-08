// https://leetcode.com/problems/minimum-number-of-refueling-stops/

// The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.

// When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.

// What is the least number of refueling stops the car must make in order to reach its destination?  If it cannot reach the destination, return -1.

// Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.  If the car reaches the destination with 0 fuel left, it is still considered to have arrived.

// addToQueue :: [Number] -> Number -> ()
const addToQueue = q => x => {
    const len = q.length;
    if(len === 0) { q.push(x); return; }

    for(let i = 0; i < len; i++) {
        if(q[i] <= x) { q.splice(i, 0, x); return; }
    }

    q.push(x);
}

// minRefuelStops :: (Number, Number, [[Number, Number]]) -> Number
const minRefuelStops = (target, startFuel, stations) => {
    if(startFuel > target) return 0;

    // add target as the final station
    const trip = stations.concat([[target, 0]]);

    // this will store stations we passed by and could use in the future
    const queue = [];

    let tank = startFuel;
    let currentDistance = 0;

    let STOPS = 0;

    // for every i'th station
    for(let i = 0; i < trip.length; i++) {
        const [stationDistance, stationFuel] = trip[i];

        // travel to station by consuming fuel, we are not stopping though
        tank -= (stationDistance - currentDistance);

        // if more fuel is needed to get there, and
        // there are stations we passed by,
        // we stop (in the past :D) at those stations to refuel
        while(tank < 0 && queue.length > 0) {
            const stop = queue.shift();
            tank += stop;
            STOPS += 1;
        }

        // if there were not enough passed stations to offer us fuel, we are done
        if(tank < 0) return -1;

        // we add the i'th station fuel to the queue of possible stops and
        // update current travelled distance
        addToQueue(queue)(stationFuel);
        currentDistance = stationDistance;
    }
    // we are now at the target, because we added it as the final station in out trip

    return STOPS;
}
