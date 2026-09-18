'use strict';

//Declare function
function getElementWidth(content, padding, border) {
  //Use parseFloat to convert the string to a number, then add them together
  const total = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
  return total;
}

//Do tests
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
