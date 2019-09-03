const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => a / b;

module.exports = {
  multiply: multiply,
  divide: divide,
  remainder: (a, b) => {
    return a % b;
  },
  firstName: "Kiran",
  stack: ["MongoDB", "Node.js"]
};
