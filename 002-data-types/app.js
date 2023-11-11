console.log('Data Types');
console.log('-----------------------------------------------');
var first_name = "Serdest";
var last_name = 'PALAOGLU';
var greeting = "".concat(first_name, " ").concat(last_name, " ho\u015F geldiniz");
var first_names = ['Serdest', 'Havin', 'Dara'];
var last_names = ['Serdest', 'Havin', 'Dara'];
var ages = [32, 33, 35, 36];
var ages_2 = [32, 33, 35, 36];
var arr = ['Serdest', 31, true];
var arr_2 = ['serdest', 31, true];
var arr_3 = ['serdest', 31, true];
var arr_tuple = ['Dara', 15, 20.35, 'Diyarbakır', 'React', false];
var personInfo = [
    ['Serdest', 31],
    ['Havin', 13],
    ['Dara', 8]
];
var instructor;
instructor = {
    firstName: 'Serdest',
    lastName: 'Palaoglu',
    age: 40,
    gender: 'male',
    jobTitle: 'civil engineer'
};
var person;
person = {
    firstName: 'Dara',
    lastName: 'Karacıl',
    age: 8,
    gender: 'male',
    jobTitle: 'student'
};
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
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
