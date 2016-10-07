/**
 * Created by TBtuo on 19/09/16.
 */

var Container = function (x) {
    this._value = x;
}
Container.of = x => new Container(x);

// console.log(Container.of(1));
// console.log(Container.of('abcd'));

Container.prototype.map =function (f) {
    return Container.of(f(this._value))
}

console.log(Container.of(3).map(x => x+1));
