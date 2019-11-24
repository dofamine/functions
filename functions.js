// function showArguments() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
//
// showArguments(1, 2, 'hi', {name: 'Bob'});

// function getSum() {
//     let res = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         res += arguments[i];
//     }
//     return res;
// }
//
// console.log(getSum(10, 20, 30));

// console.log(sayHi);
// var sayHi = function () {
//     console.log('Hi');
// };
// sayHi();
// sayHi();

// console.log(1, sayHi);
// console.log(2, name);
// var name = 'Vasya';
//
// function sayHi() {
//     const name = 'Petya';
//     console.log(3, name);
// }
//
// console.log(4, name);
// sayHi();

// const foo = 1;
//
// function bar() {
//     console.log(foo);
//     if (!foo) {
//         console.log(foo);
//         const foo = 10;
//     }
//     console.log(foo);
// }
//
// bar();

// const sum = new Function('a','b','return a+b;');
//
// console.log(sum(1,2)); // 3

// function checkSum(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
//
// checkSum("2 + 2 = 4", function () {
//     alert("You are right");
// }, function () {
//     alert("You aren`t right");
// });

// function getSum2() {
//     const showArg = () => {
//         arguments[0] + arguments[1];
//     };
//
//     return showArg() + 4;
// }
//
// console.log(getSum2(1, 15));

// function func(a, ...rest) {
//     console.log(typeof rest); // object (Array)
//     console.log(rest === arguments);
//     console.log(rest);
//     console.log(arguments);
// }
//
// func('hello', 'spread', 'operator');

// function sayHi(say, name, ...rest) {
//     return say + ', ' + name + ', ' + rest;
// }
//
// console.log(
//     sayHi("Hi", "Vasya", "Petya", "Sasha")
// );

// function func(name, surname) {
//     console.log(`Greetings ${name} ${surname}`);
// }
//
// const a = ['Vasya', 'Petrov'];
// func(...a);


// const hello = {say: 'Hi', firstName: 'Vasya', lastName: 'Ivanov'};
//
// function sayHiNew({say: a = 2, firstName, lastName}) {
//     return a + ', ' + firstName + ' ' + lastName;
// }
//
// console.log(sayHiNew(hello));
//
// function sayHiOld(say, firstName, lastName) {
//     return say + ', ' + firstName + ' ' + lastName;
// }
//
// console.log(sayHiOld(hello.say, hello.firstName, hello.lastName));

// function makeCounter() {
//     let currentCount = 1;
//     return function () {
//         return currentCount++;
//     };
// }
//
// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// let counter2 = makeCounter();
// console.log(counter2());

// function getPow(x, n) {
//     if (n !== 1) {
//         return x * getPow(x, n - 1);
//     } else {
//         return x;
//     }
// }
//
// console.log(getPow(2, 3));

