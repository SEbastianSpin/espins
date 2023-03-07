'use strict';
console.log('Hello world');


function stinger(string) {
  const numToletter = {
    "one": 1,
    "two": 2,
    "tree": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
   

  }
  if(string=="") return 0
  if(numToletter[string])  return (numToletter[string])
  return (string);
}


console.log(`${stinger("")}  ${stinger("two")}  ${stinger("tree")}  ${stinger("")}`)


function converter (string) {
  let numToarr=string.split(",");
  console.log(numToarr)
  let f=numToarr.map(i=>stinger(i))
  return f.filter((num)=>Number(num))
}


console.log(converter("one,two,tree"))

