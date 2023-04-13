


//Task 12

function task_twelve(number) {
  let sum = 0;
  while (number != 0) {
    let last_digit = number % 10;
    sum += last_digit;

    number = Math.floor(number / 10);
  }
  console.log(sum);
}
let number = +prompt("please enter number");
task_twelve(number);
