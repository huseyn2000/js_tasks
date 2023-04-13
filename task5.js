

//Task5

function fifth_task(temp1, temp2, temp3) {
  const arr1 = [];
  arr1.push(temp1, temp2, temp3);
  arr1.sort();
  arr1.reverse();

  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];

    console.log(element);
  }
}

let temp1 = +prompt("please enter temp1");
let temp2 = +prompt("please enter temp2");
let temp3 = +prompt("please enter temp3");

fifth_task(temp1, temp2, temp3);
