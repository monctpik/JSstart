"use strict";

// class UserClass{
//     constructor(fname, sname, age){
//         this.fname = fname;
//         this.sname = sname;
//         this.age = age;
//     }
//     getFullname = () => {
//         return `${this.fname} ${this.sname}`;
//       };
//     ageVerification = (adultAge = AGE_ADULT) => this.age >= adultAge

// };

// const userNew = new UserClass("Tom", "Tomson", 30);
// console.log(userNew.ageVerification(19))
class Worker {
  constructor(firstName, secondName, rate, days) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }
  getSalary = () => this.rate * this._days;
  get days() {
    return this._days;
  }
  set days(days) {
    if (typeof days !== "number") {
      throw new TypeError("Days must be number");
    }
    if (days < 0 || days > MAX_DAYS) {
      throw new RangeError("Day must be 0-" + MAX_DAYS);
    }
    this._days = days;
  }
}

const Worker1 = new Worker("Vlad", "Musk", 100, 26);
console.log(Worker1.days);
