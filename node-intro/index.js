console.log("Hello World!");

const add = (a, b) => {
  return a + b;
};

const sum = add(3, 6);
console.log(sum);

const utils = require("./utils.js");
// const utils = require('./utils')

const product = utils.multiply(6, 7);
console.log(product);

const quotient = utils.divide(4, 2);
console.log(quotient);

const remainder = utils.remainder(2, 2);

console.log(utils.firstName);

console.log(utils);

const chalk = require("chalk");

console.log(chalk.red.bold("hello world in red and bold"));
