// ES6 Destructuring Assignment 解構賦值
// Array Example
let x, y;
[x, y, ...z] = [1, 2, 3, 4, 5];
console.log("z", z);

// Object Example
//const { a, b, ...c } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
({ a, b, ...c } = { a: 1, b: 2, c: 3, d: 4, e: 5 });
console.log("a", a);
console.log("b", b);
console.log("c", c);

const person = {
  name: "Kathy",
  age: 33,
  city: "taipei",
  gender: "female",
};

// ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;
// console.log("name:", name, ", age:", age, ", city:", city);

// ES6
const { name, age, city } = person;
console.log("name:", name, ", age:", age, ", city:", city);

// const sayHi = (obj) => {
//   console.log(`Hi! I'm ${obj.name} and I'm from ${obj.city}`);
// };

const sayHi = ({ name, city, ...rest }) => {
  console.log(`Hi! I'm ${name} and I'm from ${city}`);
  console.log("rest", rest);
};

sayHi(person);

// Give Variable a new name
const phone = {
  type: "iPhone7",
  ssd: "256GB",
};
const { type } = phone;
const { type: model } = phone;
console.log(type);
console.log(model);

// Nesting
const order = {
  data: {
    item: "Macbook 13",
    specs: {
      ram: 16,
      ssd: "1TB",
    },
    status: "已送出",
  },
};

const { data } = order;
const {
  data: { item },
} = order;
const {
  data: { item: computer },
} = order;
const {
  data: { specs },
} = order;
const {
  data: {
    specs: { ssd },
  },
} = order;
console.log(data);
console.log(item);
console.log(computer);
console.log(specs);
console.log(ssd);
