const {When, Given, Then, wrapPromiseWithTimeout} = require('@cucumber/cucumber');
const {expect} = require('chai');

Given('the operation completes within unknown minutes', {timeout: -1}, function(minutes) {
  const milliseconds = (minutes + 1) * 60 * 1000
  return wrapPromiseWithTimeout(this.verifyOperationComplete(), milliseconds);
});

let pen;

When('I have 1 pen', function (int) {
    pen = int;
});

Then('you give me 6 more pens', function (int) {
    pen = pen + int;
});

Then('I will have 7 pens in total', function (totalPens) {
    expect(pen).equal(totalPens)
});
