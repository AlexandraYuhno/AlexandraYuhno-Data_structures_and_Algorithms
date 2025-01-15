class StackNode {
  constructor(value, prev = null) {
    this.value = value;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.current = null;
  }

  push(value) {
    const newNode = new StackNode(value, this.current);
    this.current = newNode;
    this.length++;
  }

  pop() {
    if (this.current === null) {
      return undefined;
    }

    const value = this.current.value;
    this.current = this.current.prev;
    this.length--;
    return value;
  }

  peek() {
    return this.current ? this.current.value : undefined;
  }
}

export default Stack;
