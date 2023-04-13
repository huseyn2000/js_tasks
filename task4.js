//Task4

function forth_task(number) {
  if (number <= 2 && number >= 0) {
    return console.log(`small table is suitable for you`);
  } else if (number <= 4 && number >= 3) {
    return console.log(`medium table is suitable for you`);
  } else if (number <= 8 && number >= 5) {
    return console.log(`large table is suitable for you`);
  } else {
    return console.log(
      `either your company is too big or it is minus for number of people`
    );
  }
}

let number = +prompt("please enter company");
forth_task(number);
