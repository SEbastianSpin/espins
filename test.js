var assert = require('assert');



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



// 



function converter (string) {
  let numToarr=[...string]
  numToarr.map((i)=>{
    stinger(i)
  })
 return numToarr
}


function converter (string) {
  let numToarr=string.split(",");
  console.log(numToarr)
  let f=numToarr.map(i=>Number(i))
  return f.filter((num)=>Number(num))
}

function summer (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}







describe('Test Suite 1', function() {


  it('Test ONE', function() {
    assert.ok(1 === stinger("one"), "1 ===' 1");
    assert.ok(true, "This should fail");
  });

  it('Test "empty" ', function() {
    assert.ok(0 === stinger(""), "0 ===' empty");
    assert.ok(true, "This should fail");
  });

  it('Test sum ', function() {
    assert.ok(6 === summer(converter("1,2,3")), "0 ===' empty");
    assert.ok(true, "This should fail");
  });


});


"one"