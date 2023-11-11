console.log('Data Types');
console.log('-----------------------------------------------');

let first_name: string = "Serdest";
let last_name: string = 'PALAOGLU'
let greeting: string = `${first_name} ${last_name} hoş geldiniz`


let first_names: string[] = ['Serdest', 'Havin', 'Dara']
let last_names: Array<string> = ['Serdest', 'Havin', 'Dara']

let ages: number[] = [32, 33, 35, 36]
let ages_2: Array<number> = [32, 33, 35, 36]

let arr = ['Serdest', 31, true]
let arr_2: (string | number | boolean)[] = ['serdest', 31, true]
let arr_3: Array<string | number | boolean> = ['serdest', 31, true]

let arr_tuple: [string, number, number, string, string, boolean] = ['Dara', 15, 20.35, 'Diyarbakır', 'React', false]

let personInfo: [string, number][] = [
  ['Serdest', 31],
  ['Havin', 13],
  ['Dara', 8]
]

type Person = {
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  jobTitle: string
}

let instructor:Person

instructor = {
  firstName: 'Serdest',
  lastName: 'Palaoglu',
  age: 40,
  gender: 'male',
  jobTitle: 'civil engineer'
}



let person: {
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  jobTitle: string
}

person = {
  firstName: 'Dara',
  lastName: 'Karacıl',
  age: 8,
  gender: 'male',
  jobTitle: 'student'
}

enum Media {
  Newspaper,
  Newsletter,
  Magazine,
  Book
}

enum PrintMedia {
  Newspaper = 'NEWSPAPER',
  Newsletter = 'NEWSLETTER',
  Magazine = 'MAGAZINE',
  Book = 'BOOK'
}

let id:number = 123

let userId = <number>id


// console.log(first_name);
// console.log(last_name);
// console.log(greeting);
// console.log("ages: ", ages);
// console.log("ages_2: ", ages_2);
// console.log("arr: ", arr);
// console.log("arr_2: ", arr_2);
// console.log("arr_3: ", arr_3);
// console.log("arr_tuple: ", arr_tuple);
// console.log(instructor);
console.log(Media);
console.log(PrintMedia);






