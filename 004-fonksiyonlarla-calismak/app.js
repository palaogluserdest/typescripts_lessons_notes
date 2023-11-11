// function multiply(a: number, b: number, c?: number): number {
//   if (typeof c !== 'undefined') {
//     return a * b * c
//   }
//   return a * b
// }
// console.log(multiply(2,5,15))
// let sum = (a:number, b:number): number => a + b
// console.log(sum(5,36))
function sum(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return "".concat(a, " ").concat(total);
}
console.log(sum('yaş', 15, 25, 45, 85));
