/**
 * Created by TBtuo on 26/07/16.
 */

/*
function repeat(operation, num) {
    // SOLUTION GOES HERE
    return operation.num
}

// Do not remove the line below
module.exports = repeat*/

// a function that takes a function as its first argument
// a number num as its second argument, then executes the passed in fucntion num times.
function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num)
}

module.exports = repeat;
