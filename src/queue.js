const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


class Queue {
  constructor() {
    this.array = new Array;
  }

  getUnderlyingList() {
    return this.array.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }

  enqueue(value) {

    this.array.push(value)
  }

  dequeue() {
    return this.array.shift();
  }
}

module.exports = {
  Queue
};
