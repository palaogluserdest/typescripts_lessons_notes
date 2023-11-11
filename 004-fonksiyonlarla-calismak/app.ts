// function multiply(a: number, b: number, c?: number): number {
//   if (typeof c !== 'undefined') {
//     return a * b * c
//   }

//   return a * b
// }

// console.log(multiply(2,5,15))


// let sum = (a:number, b:number): number => a + b

// console.log(sum(5,36))

function sum(a:string, ...numbers:number[]): string {
	let total = 0
	numbers.forEach(num => total += num)
	return `${a} ${total}`
}

console.log(sum('yaş', 15,25,45,85));
