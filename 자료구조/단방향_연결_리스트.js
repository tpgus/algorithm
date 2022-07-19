/*
1.각 노드를 위한 클래스를 정의한다.
2. 각 노드는 단일 데이터 항목을 저장하고 다음 노드를 가리키는 포인터 next를 가지고 있다.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
    // if (!this.head) {
    //   return undefined;
    // }
    // let current = this.head;
    // let newTail = current;
    // while (current.next) {
    //   newTail = current;
    //   current = current.next;
    // }
    // newTail.next = null;
    // this.tail = newTail;
    // return current;
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("my name is");
list.push("fuck you");
// list.traverse();
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
