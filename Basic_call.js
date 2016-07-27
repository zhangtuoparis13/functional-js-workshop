/**
 * Created by TBtuo on 27/07/16.
 */

function duckcount() {
    return Array.prototype.slice.call(arguments).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj,'quack')
    }).length
}

module.exports =duckcount