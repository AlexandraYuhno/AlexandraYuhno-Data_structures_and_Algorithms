class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class Queue {
  constructor() {
    this._head = undefined;
    this._tail = undefined;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  push(value) {
    const node = new Node(value);

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }

    this._length++;
    return this;
  }

  pop() {
    if (!this._head) {
      return undefined;
    }

    const value = this._head.value;
    this._head = this._head.next;

    if (!this._head) {
      this._tail = undefined;
    }

    this._length--;
    return value;
  }

  print() {
    const elements = [];
    let current = this._head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    return elements.join(" -> ");
  }
}

export default Queue;
