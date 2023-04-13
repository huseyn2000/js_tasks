
//Task 13

function task_thirteen(number) {

  const quotient1 = Math.floor(number / 100);
  number -= quotient1 * 100;

  if (quotient1 > 0) {
    console.log(`${quotient1} 100$`);
  }

  const quotient2 = Math.floor(number / 50);
  number -= quotient2 * 50;
  if (quotient2 > 0) {
    console.log(`${quotient2} 50$`);
  }

  const quotient3 = Math.floor(number / 20);
  number -= quotient3 * 20

  if (quotient3 > 0) {
    console.log(`${quotient3} 20$`);
  }

  const quotient4 = Math.floor(number / 10);
  number -= quotient4 * 10;

  if (quotient4 > 0) {
    console.log(`${quotient4} 10$`);
  }

  const quotient5 = Math.floor(number / 5);
  number -= quotient5 * 5;

  if (quotient5 > 0) {
    console.log(`${quotient5} 5$`);
  }

  const quotient6 = Math.floor(number / 1);
  number -= quotient6 * 1;
  if (quotient6 > 0) {
    console.log(`${quotient6} 1$`);
  }

}
let number = +prompt("please enter number");
task_thirteen(number);