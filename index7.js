// Callback
// ES6 Promise
// ES7 Async Await

// JS 是一個非同步語言
// https://ithelp.ithome.com.tw/articles/10194569

// 如果想延遲 add 函式, 就會產生非同步(異步)問題
// function add(n1, n2) {
//   return n1 + n2;
// }

// function test() {
//   const result = add(3, 4);
//   console.log("result", result);
// }

// ---------- Callback 回呼函式 ----------
// function delayAdd(n1, n2, delaytime, callback) {
//   setTimeout(() => {
//     callback(n1 + n2);
//   }, delaytime);
// }

// function test() {
//   const callback = (result) => {
//     console.log("result", result);
//   };
//   delayAdd(3, 4, 2000, callback);
// }

// ---------- Promise 物件 ----------
// function delayAdd(n1, n2, delaytime) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(n1 + n2);
//       //reject("delayAdd error");
//     }, delaytime);
//   });
// }

// // .then 是個函式(方法), 裡面有兩個函式, 第一個處理 resolve(onFulfilled) 傳回來的結果, 第二個處理 reject(onRejected) 傳回來的結果
// // .catch 方法處理 reject(onRejected) 傳回來的結果
// // .finally 不帶任何參數, 無論成功失敗最後執行
// function test() {
//   const promise = delayAdd(3, 4, 2000);
//   promise
//     .then(
//       (res) => {
//         console.log("res", res);
//       },
//       (err) => {
//         console.log("err[1]", err);
//       }
//     )
//     .catch((err) => {
//       console.log("err[2]", err);
//     })
//     .finally(() => {
//       console.log("done");
//     });
// }

// ---------- Async/Await 簡化 Promise 語法 ----------
function delayAdd(n1, n2, delaytime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
      //reject("delayAdd error");
    }, delaytime);
  });
}

// 在函式裡使用了 await 關鍵字, 此函式前面必須要加 async
// awiat 必須接收一個回傳 promise 物件
// async/ await 如果要處理 reject 則必須要包 try catch
async function test() {
  try {
    const res = await delayAdd(3, 4, 2000);
    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  }
}
//test();

// 多個非同步處理
// async/await 會真的等待, promise 則是依序丟下去執行, 利用 promise.all 等全部執行完的結果
function test2() {
  const p1 = delayAdd(3, 4, 3000);
  const p2 = delayAdd(2, 3, 2000);
  Promise.all([p1, p2]).then((res) => {
    const num1 = res[0];
    const num2 = res[1];
    const multiple = num1 * num2;
    console.log("[promise] multiple", multiple);
  });
}
test2();

async function test3() {
  const num1 = await delayAdd(3, 4, 3000);
  const num2 = await delayAdd(2, 3, 2000);
  const multiple = num1 * num2;
  console.log("[async/await] multiple", multiple);
}
test3();

// chain promise
// test4()案例才是和 async/await類似, 會依序等待執行結果
function test4() {
  const promise1 = delayAdd(3, 4, 3000);
  promise1
    .then((res) => {
      return delayAdd(res, 2, 2000); // 必須要有 return 才會把 promise 結果往下傳
    })
    .then((res) => {
      console.log("[chain promise]", res);
    });
}
test4();
