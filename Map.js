/**
 * Created by TBtuo on 26/07/16.
 */

//map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
//array.map(callback[, thisArg])
function doubleAll(numbers) {
    // SOLUTION GOES HERE
    return numbers.map(function (num) {
        return num * 2
    })
}


module.exports = doubleAll;

/*module.exports = function doubleAll(numbers) {
    return numbers.map(function double(num) {
        return num * 2
    })
}*/

