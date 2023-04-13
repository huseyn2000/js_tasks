//Task11

function task_eleven(number) {
  let first = 1;
  let second = 1;
  console.log(first);
  console.log(second);

  for (let index = 0; index < number - 2; index++) {
    let next = first + second;
    first = second;
    second = next;
    console.log(next);
  }
}
let number = +prompt("please enter number");
task_eleven(number);
