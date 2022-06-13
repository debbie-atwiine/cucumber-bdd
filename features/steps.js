const { When, Then } = require('@cucumber/cucumber')

let pen

When('I have 1 pen', function (int) {
    pen = int
});

Then('you give me 6 more pens', function (int) {
    pen = pen + int
});

Then('I will have 7 pens in total', function (int) {
    console.log(pen)
})