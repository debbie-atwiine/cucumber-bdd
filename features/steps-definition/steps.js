const {When, Given, Then, wrapPromiseWithTimeout} = require('@cucumber/cucumber');
const {expect} = require('chai');

Given('the operation completes within unknown minutes', {timeout: -1}, function(minutes) {
  const milliseconds = (minutes + 1) * 60 * 1000
  return wrapPromiseWithTimeout(this.verifyOperationComplete(), milliseconds);
});

let pen = 0;

When('I have {int} pen', function (int1) {
    pen = int1;
});

Then('you give me {int} more pens', function (int2) {
    pen = pen + int2;
});

Then('I will have {int} pens in total', function (totalPens) {
    expect(pen).equal(totalPens)
});
