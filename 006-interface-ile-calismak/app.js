// interface Person {
// 	firstName: string, 
// 	lastName: string
// }
var format;
format = function (str, isUpper) {
    return isUpper ? str.toUpperCase() : str.toLowerCase();
};
console.log(format('Hello World!', false));
