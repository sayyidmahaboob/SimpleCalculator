// getting all numbers and operators

let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let res = document.getElementById("result");

// adding event listener to add
document.getElementById("add").addEventListener("click", (add) => {
  res.value = parseInt(n1.value) + parseInt(n2.value);
});

// adding event listener to sub
document.getElementById("sub").addEventListener("click", (sub) => {
  res.value = parseInt(n1.value) - parseInt(n2.value);
});

// adding event listener to multi
document.getElementById("multi").addEventListener("click", (multi) => {
  res.value = parseInt(n1.value) * parseInt(n2.value);
});

// adding event listener to div
document.getElementById("div").addEventListener("click", (div) => {
  res.value = parseInt(n1.value) / parseInt(n2.value);
});

// let button = document.getElementById("btn");
// button.onclick = () => {
//   let n1 = document.getElementById("num1").value;
//   let n2 = document.getElementById("num2").value;
//   let op = document.getElementById("op").value;

//   let output = null;
//   switch (op) {
//     case "+":
//       output = parseInt(n1) + parseInt(n2);
//       break;

//     case "-":
//       output = parseInt(n1) - parseInt(n2);
//       break;

//     case "*":
//       output = parseInt(n1) * parseInt(n2);
//       break;

//     case "/":
//       output = parseInt(n1) / parseInt(n2);
//       break;
//   }
//   document.getElementById("output").innerText = output;

// };
