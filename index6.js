// Modules(ES6 Modules)
// JS 原生模組系統只能在伺服器環境下運行, 如果是磁碟機檔案路徑則無法測試
// 模組的優點是獨立性, 各自的名稱空間不會衝突, 唯獨 import 名稱不能重複
// 一隻模組檔案只能有 export default 一個, export 則可以有多個, 差別在 import 語法
// export default 資料, import 資料 from "模組檔案路徑"
// export 資料, import { 資料 } from "模組檔案路徑"

function echo(msg) {
  console.log(msg);
}

function add(n1, n2) {
  console.log(n1 + n2);
}

// export default 資料
// export default 後面直接是 JavaScript 物件，可以接 key-value
// import 資料 from "模組檔案路徑"
export default echo;
// export default {
//   echo: echo,
//   add: add,
// };
import echo from "./lib.js";
// import lib from "./lib.js";
// lib.echo("我是Kathy");
// lib.add(3, 4);

// named imports and exports
// 代表匯出 echo 和 add 這兩個變數，不能用 key-value pair
export { echo, add };
import { echo, add } from "./lib.js";
