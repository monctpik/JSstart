/**
 *
 * @param {string} fname
 * @param {string} lname
 * @param {number} age
 * @param {boolean} isMale
 * @param {string} email
 * @param {boolean} isSubscribed
 */
function User(fname, lname, age, isMale, email, isSubscribed = false) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

function UserPrototype() {
  this.fullName = function () {
    return `${this.fname} ${this.lname}`;
  };
}
User.prototype = new UserPrototype();

function createUsers(amount = 1) {
  const arrUsers = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Elon${i}`,
      `Musk${i}`,
      Math.ceil(Math.random() * (60 - 20) + 20),
      Math.random() > 0.5,
      `emailEM${i}@gmail.com`
    );
    arrUsers.push(user);
  }

  return arrUsers;
}
const users = createUsers(20);
console.table(users);

const arrFullName = users.map(function (user) {
  return user.fullName();
});
// console.table(arrFullName)
const ageOlder = users.filter(function (user) {
  return user.age > AGE_FILTER;
});
// console.table(ageOlder)

users.forEach(function (user) {
  user.isSubscribed = Math.random() > 0.5;
});

console.table(users);

const newArr1 = users
  .filter(function (user) {
    return user.age < AGE_FILTER;
  })
  .filter(function (user) {
    return user.isMale === false;
  })
  .filter(function (user) {
    return user.isSubscribed;
  })
  .map(function (user) {
    return user.email;
  });

// console.table(newArr1)
//

// const fullName = users.filter(function (user) {
//       return user.age < AGE_FILTER;
//     })
//     .filter(function (user) {
//       return user.isMale;
//     })
//     .filter(function (user) {
//       return user.isSubscribed === false;
//     })
//     .map(function(user){
//       return user.fullName()});
// console.table(fullName);

// const summAge = users.reduce(function(result, user){
//   return result + user.age
// })
// console.log(summAge)

const fullName = users.filter(function (user) {
  return user.age < AGE_FILTER;
})
.filter(function (user) {
  return user.isMale;
})
.filter(function (user) {
  return user.isSubscribed === false;
})
console.table(fullName)

const summAge = fullName.reduce(function(result, user){
  return result + user.age
},0)
console.log(summAge)