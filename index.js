"use strict";













// const words = ['a','e','i', 'o', 'u','y'];

// const vowels = words => Array.from(words)
//   .filter(letter => 'aeiouy'.includes(letter)).length

//   console.log(vowels(words))
// const letter = 'a'
// const vowels = (str,separator='', arr = ['a','e','i', 'o', 'u','y']) => str.toLowerCase.split(separator).filter((letter) => arr.includes(letter)).length

// console.log(vowels(words))

// const str = "to    Be    or NoT     To    bE";
// const toJadenCase = (str, separator = " ") =>
//   str
//     .split(separator)
//     .filter((word)=> word)
//     .map((word) => word.at(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");

// console.log(toJadenCase(str));

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  * @returns number
//  */
// const biggerNumber = (a, b) => (a > b ? a : b);
// console.log(biggerNumber(5, 11));

// const power = (num1,num2) =>{
//   if(num2 === 0){
//     return 1
//   }
//   return num1 * power(num1, num2 - 1)
// }

// console.log(power(3,2))

// const sum = (a, b) => {
//   return a + b;
// };

// const vowels = ['a','o', 'i'];
// const consonants = ['b', 'p', 'w'];
// const vowelsConsonants = [...vowels, ...consonants];
// console.log(vowelsConsonants);

// const sum = (...num) => num.reduce((acum, vol) => acum + vol);
// sum(1,2,4,5,6,1);

// const arrNumbers = [1,2,3,4,5,6]
// sum(...arrNumbers)

// const site = {
//   title: 'green site',
//   headers: ['Header 1', 'Header 2', 'Header 3'],
//   showHeaders(){
//     console.log(this)
//     this.headers.forEach((header)=>{
//       console.log(`${header} | ${this.title} ` )
//     })
//   }
// }

// site.showHeaders()
