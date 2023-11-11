var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id,
            this.firstName = firstName,
            this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.id, " - ").concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var firstPerson = new Person(1, 'Serdest', 'Palaoglu');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, department) {
        var _this = _super.call(this, id, firstName, lastName) || this;
        // Burasıyla paretn olan Person class yapısının constructor yapısı tetiklenir.
        _this.department = department;
        return _this;
    }
    return Employee;
}(Person));
var newEmployee = new Employee(123, 'Ali', 'Hamidiyealayı', 'Düz İşçi');
console.log(newEmployee);
console.log(newEmployee.getFullName());
// class Circle {
//   static pi:number = 3.14
//   pi = 3
//   constructor(){
//     Circle.pi++
//     this.pi++
//   }
// }
// let objem = new Circle()
// console.log('Circle PI : ',objem.pi)
// console.log('Static PI : ',Circle.pi)
// let objem2 = new Circle()
// console.log('Circle PI : ',objem2.pi)
// console.log('Static PI : ',Circle.pi)
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: ".concat(this.name, " was printed"));
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('AccountingDepartment');
    };
    AccountingDepartment.prototype.generateReporting = function () {
        console.log('generateReporting');
    };
    return AccountingDepartment;
}(Department));
var AD = new AccountingDepartment();
console.log(AD);
