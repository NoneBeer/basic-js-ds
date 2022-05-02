const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.array = new Array;
  }

  push(element) {
    const array = this.array;
    array.push(element);
  }

  pop() {
    const array = this.array;
    return array.pop();
  }

  peek() {
    const array = this.array;
    return array[array.length - 1];
  }
}

module.exports = {
  Stack
};
