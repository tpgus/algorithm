class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let targetNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = targetNode.prev;
      targetNode.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return targetNode;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.head.prev = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) {
      return null;
    }
    let node;
    let half = Math.floor(this.length / 2);
    if (half <= index) {
      let count = this.length - 1;
      node = this.tail;
      while (count > index) {
        node = node.prev;
        count--;
      }
    } else {
      let count = 0;
      node = this.head;
      while (count < index) {
        node = node.next;
        count++;
      }
    }
    return node;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;
  }

  insert(index, val) {
    //없던 것이 새로 들어온다. = 이전 노드를 찾아야 한다.
    if (index < 0 || index > this.length) {
      //remvove와 다른 조건 >=
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next; //이건 없어도 가능하지만, 가독성 측면에서 이용
    let newNode = new Node(val);

    nextNode.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    //있던 것을 삭제한다. = 해당 노드를 바로 찾으면 된다.
    if (index < 0 || index >= this.length) {
      //insert와 다른 조건 >
      return false;
    }
    if (index === 0) {
      return !!this.shift();
    }

    if (index === this.length - 1) {
      return !!this.pop();
    }

    let targetNode = this.get(index);
    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;

    targetNode.next = null;
    targetNode.prev = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return targetNode;
  }
}

let list = new DoublyLinkedList();
list.push(13);
list.push(15);
list.push(17);
console.log(list.remove(0));
console.log(list.remove(0));
console.log(list.remove(0));
console.log(list);
// console.log(list.get(1));
