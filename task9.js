
//Task9

function task_nine(number) {
  for (let index = 0; index < 1000; index++) {
    if (number % index == 0) console.log(index);
  }
}
let number = +prompt("please enter number");
task_nine(number);
