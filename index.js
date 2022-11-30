// JS 資料型別有分成2種, Primitive type(原始型別) & Object type(物件型別)
// Primitive type 就是 call by value
// Object type 就是 call by refrence

// Primitive type
// number, string, boolean, undfined, null
// == 和 === 最大的差異就是 == 會自動做隱含的轉型
// == 和 === 對 Object type 物件型別沒有差異
const str = "1";
const num = 1;
const num2 = 1;
console.log("str == num", str == num);
console.log("str === num", str === num);
console.log("num == num2", num == num);
console.log("num === num2", num === num);

// 基本上 null 和 undefined 只要擇一使用即可
// null typeof 為 object 是 JS 的 bug
const n = null;
const nu = undefined;
console.log("null == undefined", n == nu);
console.log("null === undefined", n === nu);
console.log("typeof null", typeof n, "typeof undefined", typeof nu);
