// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

// A clock has 360 degrees
// A minute has 6 degrees (360 / 60)
// An hour has 30 degrees (360 / 12) + minutes * 0.5 degrees (30 / 60)

// In the degrees of an hour (30) there are 60 minutes
// The hour clock, besides being at a specific hour angle,
// is at minutes * minutes in the degree of an hour (30 / 60)

// angleCount :: (Number, Number) -> Number
const angleClock = function(hour, minutes) {
    const h = hour * 30 + minutes * 0.5;
    const m = minutes * 6;

    const diff = Math.abs(h - m);

    return Math.min(360 - diff, diff);
};
