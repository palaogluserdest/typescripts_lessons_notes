// // Kesinlikle tavite edileyen yol
// function getRandomElement(items: any[]): any {
//   let randomIndex = Math.floor(Math.random() * items.length)
//   return items[randomIndex]
// }
// // Generic yapısı ile veri tipinin otomatik ayarlanması
// function getRandomElement<G>(items: G[]): G {
//   let randomIndex = Math.floor(Math.random() * items.length)
//   return items[randomIndex]
// }
// let nums = [5, 85, 32, 87, 356]
// let strs = ['Serdest', 'Dara', 'Havin', 'Bedia', 'Ferhat']
// console.log(getRandomElement(nums))
// console.log(getRandomElement(strs))
//   // Bu şekilde generic değere zorlu atama yapıldı. 
// console.log(getRandomElement<number>(nums))
// console.log(getRandomElement<string>(strs))
// function merge<U extends object, V extends object>(obj1:U, obj2:V) {
//   return{...obj1,...obj2}
// }
// let expObj1 = {name: 'serdest'}
// let expObj2 = {surname: 'palaoglu'}
// console.log(merge(expObj1, expObj2));
// interface Months<U, V> {
//   key: U,
//   value: V
// }
// let month:Months<number,string> = {
//   key: 1,
//   value: 'November'
// }
// let month2:Months<string,string> = {
//   key: "1",
//   value: 'November'
// }
// interface Collection<T> {
//   add(o: T): void;
//   remove(o: T): void;
// }
// class List<T> implements Collection<T>{
//   private items: T[] = [];
//   add(o: T): void {
//     this.items.push(o);
//     console.log(this.items);
//   }
//   remove(o: T): void {
//     let index = this.items.indexOf(o);
//     if (index > -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }
// let list = new List<number>();
// for (let i = 0; i < 10; i++) {
//   list.add(i);
// }
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers = new Stack(5);
while (!numbers.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    numbers.push(n);
}
while (!numbers.isEmpty()) {
    var n = numbers.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
