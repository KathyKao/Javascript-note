//ES6 Spread Operator(展開運算符) & Rest Operator(其餘運算符)
//共同點: 都是使用三個點 ...
//Spread Operator: 展開一個陣列為一個個獨立的值(...後面接的一定是個 array), 用於"陣列字面"與"函式呼叫"
//Rest Operator: 集合所有剩餘的值, 組合成一個陣列, 用於"函數傳入參數"與"解構賦值"

//---------- Spread Operator ----------
// Array contact
const params = ["hello", true, 7];
const other = [1, 2, ...params];
const other2 = [...params, 1, 2, ...params]; // 沒有限制位置和數量
console.log("other", other);
console.log("other2", other2);

// Array 淺拷貝
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log("arr= ", arr, ", arr2=", arr2); //arr2 沒有影響到 arr

// 把陣列展開, 傳入函式作為傳入參數值
function sum(a, b, c) {
  return a + b + c;
}
const args = [1, 2, 3];
let result = sum(...args); //作法等同於下面
//let result = sum.apply(undefined, args);
console.log("result", result);

// iterable 可迭代
const str = "foo";
const chars = [...str];
console.log("chars", chars);

//---------- Rest Operator ----------
// Rest parameters
function add(...numbers) {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  console.log("add", result);
  return result;
}
add(1);
add(1, 2, 3, 4);

// 其餘參數當作傳入參數必須是最後一位且只能有一個
function aFunc(x, ...y) {
  console.log("x= ", x, ", y= ", y);
}
aFunc(1, 2, 3);
aFunc(); // 其餘參數值沒有傳入會是一個空陣列

// Destructuring Assignment 解構賦值
const [x, y, z] = [1, 2, 3];
console.log("x", x);

const [a, ...b] = [1, 2, 3];
console.log("a= ", a, " ,b=", b);

const [d1, d2, ...d3] = [1]; // 對應不到使用 rest operator 就會是空陣列
console.log("d1= ", d1, " ,d2=", d2, " ,d3=", d3);

const { o, p, ...q } = { o: "O", s: "S", p: "P", q: "Q", r: "R" };
console.log("o= ", o, " ,p=", p, " ,q=", q);

// 函式傳入參數中使用解構賦值, 加了前面提到的其餘參數用法
function f(...[a, b, c]) {
  return a + b + c;
}
f(1); // NaN (b and c are undefined)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (the fourth parameter is not destructured)

// Rest Properties
let { obj1, obj2, ...rest } = { obj1: 1, obj2: 2, obj3: 3, obj4: 4 };
console.log(obj1); // 1
console.log(obj2); // 2
console.log(rest); // { obj3: 3, obj4: 4 }

// Spread Properties
let n = { obj1, obj2, ...rest };
console.log(n); // { obj1: 1, obj2: 2, obj3: 3, obj4: 4 }
