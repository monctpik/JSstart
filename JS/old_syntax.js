'use strict'
function User(fname, sname, age) {
  this.fname = fname;
  this.sname = sname;
  this.age = age;
  User.count++;
}

User.count = 0;
User.createTestUser = () => new User("Anonim", "Anonimus", 22);

function UserPrototype() {
  this.getFullname = () => {
    return `${this.fname} ${this.sname}`;
  };
}

User.prototype = new UserPrototype();
const userOld = new User("Elon", "Musk", 50);
