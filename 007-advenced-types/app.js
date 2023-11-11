// interface BussinessPartner {
//   name: string,
//   credit: number
// }
// interface Identity {
//   name: string,
//   id: number
// }
// interface Contact {
//   email: string,
//   phone: string
// }
// type Employee = Identity & Contact
// let personInfo: Employee = {
//   name: 'Serdest',
//   id: 1234567890,
//   email: 'serdest@gmail.com',
//   phone: '05051238974'
// }
// type Customer = BussinessPartner & Contact
// let customerInfo: Customer = {
//   name: 'John Doe',
//   credit: 10000,
//   email: 'john@yahoo.com',
//   phone: '+1-123-456-7890'
// }
// console.log(personInfo);
// console.log(customerInfo);
// type tip = string | number
// function add(a: tip, b: tip) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return `${a} ${b}`;
//   } else {
//     throw new Error("Both inputs must be number or string");
//   }
// }
// let exampleStr = add('Dara', 'Karacıl')
// let exampleNmr = add(32,85)
// // let exampleBln = add(false, 85)
// console.log(exampleNmr)
// console.log(exampleStr)
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message = "";
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? "Sign a new contract with the customer" : "Credit issue";
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? "Sign a new contract with the supplier" : "Need to eveluate further";
    }
    return message;
}
var APartner = new Customer();
console.log(signContract(APartner));
