// interface Person {
// 	firstName: string, 
// 	lastName: string
// }

// function getFullName(obj:Person){
// 	return `${person.firstName} ${person.lastName}`
// }

// let person = {
// 	firstName: 'Serdest',
//   lastName: 'Palaoglu'
// 	// lastName olmamasından dolayı getFullName hata verecektir.
// }

// console.log(getFullName(person))

// interface Person {
// 	// readonly firstName: string,
//   firstName: string,
// 	middleName?:string,  // Kullanımı isteğe bırakılmıştır.
// 	lastName:string
// }

// let person: Person =  {
// 	firstName: 'Serdest',
// 	lastName: 'Palaoglu'
// }

// person.firstName = 'Ferhat'  // Bu kullanımda değiştirme işlemi hata vericektir.


interface StringFormat {
  (str:string, isUpper: boolean): string
}

let format:StringFormat

format = (str,isUpper) => {
  return isUpper ? str.toUpperCase() : str.toLowerCase()
}

console.log(format('Hello World!', false));