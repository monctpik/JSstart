// const pinSecret = "55";
// let guess = 0;

// while(true) {
//   const PIN = prompt("Enter PIN, please: ");
//   if (PIN === pinSecret ) {
//     alert(
//       "Congratulations, the password is correct. Wasted attempts: " +
//         guess +
//         "!"
//     );
//     break;
//   } else if (PIN < pinSecret) {
//     guess++;
//     alert(
//       'The secret code is larger than the number you entered. Press "OK" and try again.'
//     );
//   } else if (PIN > pinSecret) {
//     guess++;
//     alert(
//       'The secret code is smaller than the number you entered. Press "OK" and try again.'
//     );
//   }
// }

// function Accumulator(maxCharge, charge){
//     this.maxCharge = maxCharge;
//     this.charge = charge;

// } 
// function AccumulatorPrototype(){
//     this.chargeAccumulator = function(electricity){
//         if(this.charge + electricity <= this.maxCharge){
//             this.charge += electricity
//         }
//         return this.charge
//     };
//     this.chargeSomething = function(somethingElectricity){
//         if(this.charge - somethingElectricity >= 0){
//             this.charge -= somethingElectricity
//         }
//         return this.charge
//     }
// }
// Accumulator.prototype = new AccumulatorPrototype()


// const acc = new Accumulator(1200,0)
// console.log(acc)




// function sum(){
//     console.log(arguments)
//     let summa = 0;
//     for (let index = 0; index < arguments.length; index++) {
//         summa += arguments[index];
        
//     }
//     return summa;
// }

// sum(1,2,3,4,5);
