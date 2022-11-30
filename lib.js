function echo(msg) {
  console.log(msg);
}

function add(n1, n2) {
  console.log(n1 + n2);
}

// export default 資料
// const x = 10;
// export default x;

// export default x = 10;
// export const x = 10;

// export default echo;
// export default {
//   echo: echo,
//   add: add,
// };

export { echo, add };

export function people() {
  const name = "kathy";
  const getData = () => {
    console.log("getData", `Hello I'm ${name}.`);
  };
  return {
    name,
    getData,
  };
}

// export default function people() {
//   const name = "kathy";
//   const getData = () => {
//     console.log("getData", `Hello I'm ${name}.`);
//   };
//   return {
//     name: name,
//     getData: getData,
//   };
// }
