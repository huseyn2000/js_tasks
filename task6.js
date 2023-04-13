//Task6

function task_six(name, age, quantity, total) {
  if ((total >= 100 && quantity >= 4) || age>60) {
    return console.log(`discount approved`);
  } else {
    return console.log(`discount not approved`);
  }
}

let name = prompt("please enter name?");
let age = +prompt("please enter age?");
let quantity = +prompt("please enter quantity?");
let total = +prompt("please enter amount of order?");

task_six(name, age, quantity, total);
