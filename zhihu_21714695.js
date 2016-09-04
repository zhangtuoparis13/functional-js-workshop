/**
 * Created by tuo on 16/9/4.
 */
/*

//纯函数
let arr = [1,2,3,4,5];
// Array.slice是纯函数，因为它没有副作用，对于固定的输入，输出总是固定的
// 可以，这很函数式
console.log(arr.slice(0,3));

// Array.splice是不纯的，它有副作用，对于固定的输入，输出不是固定的
// 这不函数式
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));

// 在函数式编程中，我们想要的是 slice 这样的纯函数，而不是 splice这种每次调用后都会把数据弄得一团乱的函数
//不纯的
var min = 18;
var checkage = age => age > min;

//纯的，这很函数式
var checkage1 = age => age > 18;*/

// 函数的 curry 柯里化
// 比如对于加法函数 var add = (x, y) =>　x + y ，我们可以这样进行柯里化：
// ES5 的写法
// let add = function (x) {
//   return function (y) {
//     return x + y
//   }
// }
//
// var add2 = add(2);
// console.log(add2(2));

//  ES6 的写法
// var add = x =>(y => x+y)
// var add200 = add(200);
// console.log(add200(50));

// 对于加法这种极其简单的函数来说，柯里化并没有什么大用处。
//
// 还记得上面那个 checkage 的函数吗？我们可以这样柯里化它：
// var checkage = min => (age => age > min);
// var checkage18 = checkage(18);
//
// console.log(checkage18(20));

// 事实上 柯里化是一种预加载函数的方法,通过传递较少的参数,得到一个已经记住了这些参数的新函数,某种意义上来讲
// 这是对参数的缓存,是一种非常高效的编写函数的方法
//
// 函数组合
//
// 学会了使用纯函数以及如何把它柯里化之后，我们会很容易写出这样的“包菜式”代码：
// h(g(f(x)));
//
// 虽然这也是函数式的代码，但它依然存在某种意义上的“不优雅”。为了解决函数嵌套的问题，我们需要用到“函数组合”：
//
// //两个函数的组合
// var compose = function(f, g) {
//     return function(x) {
//         return f(g(x));
//     };
// };
//


var compose = (f,g) =>(x => f(g(x)));
/*
//
// var compose = (f,g) => (x =>g(f(x)));
// 注意 调换了 f g 的位置 得到的结果是完全不一样的

// var add1 = x => x + 1;
// var mul5 = x => x * 5;
//
// console.log(compose(mul5,add1)(2));
// 我们定义的compose就像双面胶一样，可以把任何两个纯函数结合到一起。当然你也可以扩展出组合三个函数的“三面胶”，甚至“四面胶”“N面胶”。
// 这种灵活的组合可以让我们像拼积木一样来组合函数式的代码：

var first = arr => arr[0];
var reverse = arr => arr.reverse();
var last = compose(first, reverse);

console.log(last([1,2,3,4,5]));
*/

// Point free 风格 精确编程
// 有了柯里化和函数组合的基础知识，下面介绍一下Point Free这种代码风格。
// 细心的话你可能会注意到，之前的代码中我们总是喜欢把一些对象自带的方法转化成纯函数：
// var map = (f, arr) => arr.map(f);
//
// var toUpperCase = word => word.toUpperCase();
// 这种做法是有原因的。
//
// Point Free这种模式现在还暂且没有中文的翻译，有兴趣的话可以看看这里的英文解释：
//
// https://en.wikipedia.org/wiki/Tacit_programming
//
//     用中文解释的话大概就是，不要命名转瞬即逝的中间变量，比如：
//
// 作者：Stark伟
// 链接：https://zhuanlan.zhihu.com/p/21714695
//     来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//这不Piont free
// var f = str => str.toUpperCase().split(' ');
// console.log(f('abcd efgh'));

var _toUpperCase = word => word.toUpperCase();
var _split = x => (str => str.split(x));

var f = compose(_split(' '), _toUpperCase);

console.log(f('abcd efgh'));





















