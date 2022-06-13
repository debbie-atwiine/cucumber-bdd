const { When, Then } = require('@cucumber/cucumber');
var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 10000);

let pen;

When('I have 1 pen', function (int) {
    pen = int;
});

Then('you give me 6 more pens', function (int) {
    pen = pen + int;
});

Then('I will have 7 pens in total', function (pen) {
    console.log(pen);
});