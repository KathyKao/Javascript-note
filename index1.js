// function 有分兩種宣告方式
// function declartion & function expression
// function declartion 和變數都有 Hoisting(提升)

hello();
//hello1(); 這段會錯誤, function expression 呼叫前必須先定義好

// function declatrion
function hello() {
  //do something
  console.log("hello");
}

// function expression
const hello1 = function () {
  //do something
  console.log("hello1");
};

// function constructor 建構(構造)函數(JS class 是語法糖, 底層是用建構(構造)函數產生物件)
function createCard(initName) {
  this.name = initName;
}
const card = new createCard("Kathy");
console.log("card", card);

//HoF(Higher-order Functions)高階函數
//函數當成參數傳入另一個函數 或 函數當成另一個函數的回傳值, 其中一個符合即是HoF
//forEach, map, filter 就是HoF
const arr1 = [1, 2, 5, 8, 9, 10];
const result1 = arr1.filter((x) => x > 5);
console.log("result1", result1);

const addNumber = (x) => {
  return (y) => {
    return x + y;
  };
};
//可簡化成
//const addNumber = x => y => x + y;
const result2 = addNumber(10)(20);
console.log("result2", result2);
