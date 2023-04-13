
//Task10

function task_ten(initial_amount, duration_in_years, per_year) {
  for (let index = 0; index < duration_in_years; index++) {
    initial_amount += (initial_amount * per_year) / 100;
  }
  return console.log(initial_amount);
}

let initial_amount = +prompt("please enter initial_amount");
let duration_in_years = +prompt("please enter duration_in_years");
let per_year = +prompt("please enter per_year");

task_ten(initial_amount, duration_in_years, per_year);
