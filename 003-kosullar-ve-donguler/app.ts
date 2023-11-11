// let x:number = 15
// let y:number = 35

// if(x>y) {
//   console.log("x y'den büyüktür.");
// }else {
//   console.log("x y'den küçüktür ya da eşittir.");
// }

// if(x+y > 100) {
//   console.log("Değerlerinizi kontrol ediniz.");
// }else if(x+y == 50) {
//   console.log("Doğru toplamı buldunuz.");
// }else {
//   console.log("Değerlerinizi kontrol ediniz.")
// }

// x > y ? console.log("x y'den büyüktür.") : console.log("x y'den küçüktür ya da eşittir.")


// let day: number = 5

// switch (day) {
//   case 0:
//     console.log('Pazar')
//     break
//   case 1:
//     console.log('Pazartesi')
//     break
//   case 2:
//     console.log('Salı')
//     break
//   case 3:
//     console.log('Çarşamba')
//     break
//   case 4:
//     console.log('Perşembe')
//     break
//   case 5:
//     console.log('Cuma')
//     break
//   case 6:
//     console.log('Cumartesi')
//     break
//   default:
//     console.log('Başka evrende yaşıyorsun herhalde.')
//     break
// }

// for(let i:number = 0 ; i<10 ; i++){
//   console.log(`i değeri: ${i}`);
// }

// let names:string[] = ['Serdest', 'Havin', 'Dara', 'Ferhat', 'Bedia']

// let firstName:string

// for(firstName of names) {
//   console.log(firstName)
// }


let sayi:number = 0

while(sayi<10){
  console.log(`Sayi: ${sayi}`)
  sayi++
}

do{
  console.log(`Sayi: ${sayi}`)
  sayi++
}while(sayi<10)