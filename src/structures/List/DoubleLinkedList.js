class DoubleListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new DoubleListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new DoubleListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current;

    if (index < this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }

    return current ? current.value : undefined;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    let current;

    if (index === 0) {
      current = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    } else {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      if (current.prev) {
        current.prev.next = current.next;
      }

      if (current.next) {
        current.next.prev = current.prev;
      }
    }

    this.length--;
  }
}

export default DoubleLinkedList;
