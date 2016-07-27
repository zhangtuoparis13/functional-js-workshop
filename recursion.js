/**
 * Created by TBtuo on 27/07/16.
 */

/*function toUpperArray(items) {
    if (!items.length) return []
    var head =items[0]
    head =head.toUpperCase()
    var tail = items.slice(1)
    return [head].concat(toUpperArray(tail))
}

toUpperArray(['hello', 'world'])*/


function reduce(arr,fn,initial) {
    return (function reduceOne(index,value) {
        if (index > arr.length -1) return value
        return reduceOne(index +1 , fn(value,arr[index],index,arr))
    })(0, initial)
}
module.exports = reduce