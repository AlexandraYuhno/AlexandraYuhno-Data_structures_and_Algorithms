class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
    }
      current.next = newNode;
    }
  
    this.length++;
  }
  
  get(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return undefined;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
  
    return current.value;
  }
  
  delete(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return;
    }
  
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
  
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
    this.length--;
  }
}
export default SingleLinkedList;
  