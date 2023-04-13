
//Task3

function task_fisrt(name, unit_price, quantity, promotion) {
  if (promotion === "yes" && quantity >= 5) {
    const discount = quantity * (unit_price - 0.25 * unit_price);
    return discount;
  } else if (quantity >= 5) {
    const discount = quantity * (unit_price - 0.1 * unit_price);
    return discount;
  } else if (promotion === "yes") {
    const discount = quantity * (unit_price - 0.15 * unit_price);
    return discount;
  } else {
    const discount = quantity * unit_price;
    return discount;
  }
}

let name = prompt("please enter name?");
let unit_price = +prompt("please enter unit_price?");
let quantity = +prompt("please enter quantity?");
let promotion = prompt("please enter promotion?");

const result = task_fisrt(name, unit_price, quantity, promotion);

console.log(result);