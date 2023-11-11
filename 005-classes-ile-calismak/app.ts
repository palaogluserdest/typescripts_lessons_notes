class Person {
  id:number
  firstName:string
  lastName:string

  constructor(id:number,firstName:string,lastName:string) {
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName
  }

  getFullName() {
    return `${this.id} - ${this.firstName} ${this.lastName}`
  }

}

let firstPerson = new Person(1, 'Serdest', 'Palaoglu')


class Employee extends Person {
  department: string;

  constructor (id: number, firstName: string, lastName: string, department: string){
    super(id, firstName, lastName)  
    // Burasıyla paretn olan Person class yapısının constructor yapısı tetiklenir.
    this.department = department
  }
}

let newEmployee = new Employee(123, 'Ali', 'Hamidiyealayı', 'Düz İşçi')
console.log(newEmployee)
console.log(newEmployee.getFullName())


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


abstract class Department {
  constructor(public name:string){  }

  abstract printMeeting():void

  printName():void {
    console.log(`Department name: ${this.name} was printed`)
  }
}

class AccountingDepartment extends Department {
  constructor(){
    super('Accounting')
  }

  printMeeting(): void{
    console.log('AccountingDepartment')
  }

  generateReporting():void {
    console.log('generateReporting')
  }
}

let AD: Department
AD = new AccountingDepartment()
AD.printName()
AD.printMeeting()
// AD.generateReporting()

console.log(AD)