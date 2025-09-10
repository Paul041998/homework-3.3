let number = prompt("Enter a five-digit number:");
if (number.length !== 5 || isNaN(number)) {
  alert("Please enter a five-digit number");
  console.log(number);
} else {
  let myNumber = parseInt(number);
  let digit1 = parseInt(myNumber / 10000);
  let digit2 = parseInt(myNumber / 1000) % 10;
  let digit3 = parseInt(myNumber / 100) % 10;
  let digit4 = parseInt(myNumber / 10) % 10;
  let digit5 = myNumber % 10;

  let result = `${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`;
  console.log(result);
}
