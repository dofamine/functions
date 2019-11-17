//Example 1:
// function mul(a, b) {
//     return a * b
// }
//
// const double = mul.bind(null, 2); // context set to null, it doesn’t used here
// const doubleArrow = x => mul(2, x);
// console.log( double(3) ); // = mul(2, 3) = 6
// console.log( double(4) ); // = mul(2, 4) = 8
// console.log( double(5) ); // = mul(2, 5) = 10

// TASK 1
// Из нижепредставленых констант с помощью функции combineUrl создать
// функции, которые при вызове будут возвращать результат представленый
// в блоке вывода в консоль
// const google = 'https://google.com';
// const yandex = 'https://yandex.com';
// const search = 'search';
// const coords = 'coords';
//
// // const googleSearch = your code here...;
// // const yandexSearch = your code here...;
// // const yandexMaps = your code here...;
// // const googleMaps = your code here...;
//
// function combineUrl(url, subUrl, param) {
//     return `${url}/${subUrl}=${param}`;
// }
//
// console.log(googleSearch('JavaScript')); // https://google.com/search=JavaScript
// console.log(googleMaps('45.65&51.45')); // https://google.com/coords=45.65&51.45
// console.log(yandexSearch('hello yandex')); // https://yandex.com/search=hello yandex
// console.log(yandexMaps('45.65&51.45')); // https://yandex.com/coords=45.65&51.45

// Example 2: chaining
// const storage = [ {name: 'John', surname: 'Ivanov'}, {name: 'Petya', surname: 'Petrov'} ];
// const userController = {
//     read(name) {
//         // read user from DB
//         return this;
//     },
//     update(obj) {
//         // update properties
//         return this;
//     },
//     save() {
//         // save user to db
//         return this;
//     }
// };
// userController
//     .read('John')
//     .update({ surname: 'Smith' })
//     .save();

//TASK 2
//Даны два объекта которые нужно расширить методами add, change, log
//реализуйте функции чтобы после расширения объектов они работали
//в произвольном порядке вызова
// const alesha = {
//     name: 'Alesha',
//     surname: 'Popov',
//     age: 18
// };
//
// const vanya = {
//     name: 'Vanya',
//     surname: 'Vasi4kin',
//     age: 30
// };
//
// const change = function() {
//     // code here...;
// };
// const add = function() {
//     // code here...;
// };
// const log = function() {
//     // code here...;
// };
//
// vanya.add('prof','programmer').change('name','Ivan').change('age', 60).log(); // { name: 'Ivan', surname: 'Vasi4kin',age: 60, prof: 'programmer' }
// alesha.change('age',85).add('hobby', 'football').change('hobby', 'volleyball').log(); // { name: 'Alesha', surname: 'Popov',age: 85, hobby: 'volleyball' }

// Example 3: Context may be different depends on how function is invoked
// const user = { firstName: 'User' };
// const admin = { firstName: 'Admin' };
// function getName() {
//     console.log(this.firstName);
// }
// user.f = getName;
// admin.g = getName;
// // this refers to object before dot
// getName(); // undefined
// user.f(); // User
// admin.g(); // Admin

// TASK 3
// Реализовать ф-цию patchObject, которая первым параметром принимает объект который будет разширен
// произвольным числом методов переданных в аргменты ф-ции и возвращает разширенный объект.
// Так же необходимо реализовать ф-ции : greetings, showSuccess, howOldAreYou, таким образом,
// чтобы при их вызове на исходных объектах они работали так как ожидается в блоке консоль логов
// function patchObject() {
//     // your code her...
// }
//
// let obj = {
//     name: 'Ivan',
//     surname: 'Baraban',
//     age: 42,
//     score: 12,
// };
//
// let obj2 = {
//     name: 'Petya',
//     surname: 'Padawan',
//     age: 52,
//     score: 28,
// };
//
// const greetings = function hello(greeting) {
//     // your code here...
// };
// const showSuccess = function showSuccessKoef() {
//     // your code here...
// };
// const howOldAreYou = function myAge() {
//     // your code here...
// };
//
// obj = patchObject(obj, greetings, howOldAreYou, showSuccess);
// obj2 = patchObject(obj2, greetings, howOldAreYou);
// obj3 = patchObject(null, greetings, howOldAreYou, showSuccess);
//
// console.log(obj.myAge()); //42
// console.log(obj.showSuccessKoef()); //3.5
// console.log(obj.hello('yo')); // yo, my name is Ivan
// console.log(obj2.myAge()); // 52
// console.log(obj2.hello('Hi sir')); // Hi sir, my name is Petya
// console.log(obj3.hello('Good Day')); // Good Day, my name is unknown
// console.log(obj3.showSuccessKoef()); // 0
// console.log(obj3.myAge()); // age is unavailable

//Example 4: recursion
// function pow(n, m) {
//     if (m === 0) return 1;
//     if (m === 1) return n;
//     return n * pow(n, m - 1);
// }
//
// console.log(pow(2, 16));

// TASK 4
// создать функцию аргументом которой будет порядковый номер последовательности tribonacci:
// 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012,...
// function tribonacci(n) {
//     your code here...;
// }
// function tribonacci(n) {
//     your code here...;
// }
//
// console.log(tribonacci(15)); // 927

// Example 5: closure
// const greetDeeplyCurried = function (greeting) {
//     return function (separator) {
//         return function (emphasis) {
//             return function (name) {
//                 console.log(greeting + separator + name + emphasis);
//             };
//         };
//     };
// };
//
// const greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
// greetAwkwardly("Heidi"); //"Hello...Heidi?"
// greetAwkwardly("Eddie"); //"Hello...Eddie?"

// TASK 5
// Реализовать ф-ции чисел и ф-ции операторов таким образом чтобы они работали в формате число - оператор - число
// function zero() {your code here...}
// function one() {your code here...}
// function two() {your code here...}
// function three() {your code here...}
// function four() {your code here...}
// function five() {your code here...}
// function six() {your code here...}
// function seven() {your code here...}
// function eight() {your code here...}
// function nine() {your code here...}
//
// function plus() {your code here...}
// function minus() {your code here...}
// function multiply() {your code here...}
// function divide() {your code here...}
//
// console.log(seven(multiply(five()))); // 35
// console.log(four(plus(nine()))); // 13
// console.log(eight(minus(three()))); // 5
// console.log(six(divide(two()))); // 3
