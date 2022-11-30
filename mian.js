// import 資料 from "模組檔案路徑"
import { echo } from "./lib.js";
import { people } from "./lib.js";

// import lib from "./lib.js";
// console.log(lib);
// lib.echo("我是Kathy");
// lib.add(3, 4);

let name = "我又大又肥";
echo(name);

const { name: myName, getData } = people();
console.log("people()", people());
console.log("name", myName);
getData();
