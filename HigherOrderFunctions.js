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

function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num)
}

module.exports = repeat;
