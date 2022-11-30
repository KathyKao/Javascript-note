// ES6 class 是一個 Syntactic suga (語法糖)
// ES5 下想使用 Class 必須使用 function constructor(建構函式)

// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function () {
  console.log(`Hi I'm ${this.name}. I'm ${this.age} years old.`);
};

const p = new Person("kathy", 33);
p.sayHi();

// ES6 class
class PersonNEW {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi I'm ${this.name}. I'm ${this.age} years old.`);
  }
}
const p1 = new PersonNEW("kathy", 33);
p1.sayHi();

// extend & super keyword
class Son extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  sayHello() {
    console.log(
      `Hi I'm ${this.name}. I'm ${this.age} years old and the gender is ${this.gender}`
    );
  }
}
const s = new Son("Henry", 2, "male");
s.sayHello();

// JS 的 this 取決於你當下執行的環境是誰
class Card {
  constructor(initName) {
    this.name = initName;
    // this 直接綁定在 Card 上, 缺點就是被 new 幾百個就會產生幾個
    this.helloo = this.hello.bind(this);
  }
  hello() {
    // JS class 裡的 function 沒有存在實體物件裡，而是存在 prototype 裡
    // 也就是說 new 幾百個 Card 都是指向同一個 function
    console.log("hello", this.name);
  }
  hellooo = () => {
    // 使用 arrow function 的 this 會直接綁定在 Card 身上, 作法類似 constructor 的 bind
    console.log("hellooo", this.name);
  };
}
const c1 = new Card("Kathy");
//console.log('c1', c1);
c1.hello();

const a = { name: "AAA" };

// this 會跟著當下的執行者做改變
// 當下執行這個函數的人是誰, 那個人就是這個函數的this
a.helloooo = c1.hello;
a.helloooo(); // a 執行, 故此 this 指向 a

a.helloo = c1.helloo;
a.helloo(); // a 執行, 但因為直接綁定在Card身上, 故此 this 指向 Card

a.hellooo = c1.hellooo;
a.hellooo(); // a 執行, 但因為直接綁定在Card身上, 故此 this 指向 Card

// 繼承
class Car {
  constructor(initName) {
    this.name = initName;
  }
  start() {
    console.log("車子啟動");
  }
}

class Tesla extends Car {
  constructor(nameTesla) {
    // super 調用父層的 constructor
    super(nameTesla);
  }
  start2() {
    console.log("車子充完電");
    // super 可以拿到父層繼承下來的東西
    super.start();
  }
  start() {
    // 也可以直接複寫父層的 function
    console.log("Tesla車子啟動");
  }
}

const t = new Tesla("凱西的特斯拉");
//t.start()
console.log("name", t.name);
t.start2();

// this 指向
class MyLog {
  constructor() {
    this.name = "kathy";
    // 可以正確抓到 this.name
    //this.logData();

    // this 抓到的是現在btn_click執行的人
    // document
    //   .querySelector("#btn_click")
    //   .addEventListener("click", this.logData);

    // 綁定 this
    // document
    //   .querySelector("#btn_click")
    //   .addEventListener("click", this.logData.bind(this));

    // 直接把 fucntion 改成匿名函式
    document
      .querySelector("#btn_click")
      .addEventListener("click", this.logData1);
  }

  logData() {
    console.log("logData", this.name);
  }

  logData1 = () => {
    console.log("logData1", this.name);
  };
}
new MyLog();
