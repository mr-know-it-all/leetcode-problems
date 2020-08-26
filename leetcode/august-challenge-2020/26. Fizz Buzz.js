// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// SOLUTION 1:

// fixxBuzz :: Number -> [String]
const fizzBuzz = n => {
    return Array.from({ length: n }, (_, i) => {
        const n = i + 1;
        const div3 = n % 3 === 0;
        const div5 = n % 5 === 0;

        return (
            div3 && div5 ? 'FizzBuzz'
            : div3 ? 'Fizz'
            : div5 ? 'Buzz'
            : String(n)
        );
    });
};
