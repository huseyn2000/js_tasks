
//Task8



function task_eight(number) {

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number < 20) {
      return console.log(ones[number]);
    }
  
    const onesDigit = number % 10;
    const tensDigit = Math.floor(number / 10);
  
    if (onesDigit === 0) {
      return console.log(tens[tensDigit]);
    }
  
    return console.log(tens[tensDigit] + ' ' + ones[onesDigit]);
  }
  
  
  let number = +prompt("please enter number");
  task_eight(number);
  
  