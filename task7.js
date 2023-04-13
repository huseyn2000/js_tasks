//Task7

function task_seven(length, width, height, weight, distance) {
  if (
    length <= 100 &&
    width <= 100 &&
    height <= 100 &&
    length + height + width <= 150 &&
    weight <= 10 &&
    distance >= 3 &&
    distance <= 10
  ) {
    return console.log(`small`);
  } else {
    return console.log(`not small`);
  }
}

let length = +prompt("please enter length?");
let width = +prompt("please enter width?");
let height = +prompt("please enter height?");
let weight = +prompt("please enter weight?");
let distance = +prompt("please enter distance?");

task_seven(length, width, height, weight, distance);
