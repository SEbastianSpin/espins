'use strict';
function converter(string) {
  let numToarr = string.split(",");
  console.log(numToarr)
  let f = numToarr.map(i => i == " " ? 0 : Number(i))
  return f //.filter((num) => Number(num))
}

function summer(arr) {

  if (arr.find(e => e < 0)) return ('negative');
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function solver(s) { return summer(converter(s)) }



module.exports = {
  solver: solver
};





