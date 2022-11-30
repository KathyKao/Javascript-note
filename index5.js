// Arrow function(箭頭函式, ES6 函式的一種變形)
// Arrow function 只能取代 function declartion 和 function expression, 構造函式不行會出錯
// Arrow function 解決 JS this 問題

//function add(){}
//const add = function(){}
//const add = (n1, n2)=>{ return n1 + n2;}
//const add = (n1, n2) => (n1+n2) // 只有一行的回傳可以這樣縮寫

const add = (num1, num2) => {
  return num1 + num2;
};

const student = {
  name: "Kathy",
  gender: "female",
  age: 18,
  getName: function () {
    //在 object 的 function 叫做 method(方法), 不是函式
    console.log("getName", this);

    // IIFE (Immediately Invoked Function Expression)
    const self = this;
    (function () {
      console.log("IIFE this", this);
      console.log("IIFE self", self); // 如果要抓到此物件本身, 必須用 self 方式去解
    })();

    // IIFE 改使用 arrow function 可以排除 this 問題
    (() => {
      console.log("IIFE arrow function", this);
    })();
  },
  getAge: () => {
    // object 底下的 method 不能用 arrow function, 不然 this 會抓到 window
    //console.log('getAge', this);
  },
};

student.getName();
student.getAge();

function User(name, gender) {
  this.name = name;
  this.gender = gender;
}
// 建構函式不能使用 arrow function, 會直接拋錯誤
// const User = (name, gender) => {
//     this.name;
//     this.gender;
// };

const user = new User("Kathy", "famale");
console.log("user", user);
