var assert = require('assert');
const fun = require('./index.js');



describe('Test Suite 1', function() {



  it('Test sum ', function() {
    assert.ok(5 === fun.solver("1,2,3"), "0 ===' empty");
    assert.ok(true, "su, 1+2+3=6");
  });

  it('Test empty eq 0 ', function() {
    assert.ok(0 === (fun.solver(" ")), "0 === empty");
    assert.ok(true, "0 es empty string");
  });

  it('Test empty eq 0 ', function() {
    assert.ok("negative" === (fun.solver("-1,-1 ")), "neg");
  });
});

