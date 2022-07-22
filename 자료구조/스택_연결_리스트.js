class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/*
단일 연결 리스트로 스택을 구현하는 경우
메소드의 이름은 push, pop 이지만, 동작하는 방식은 단일 연결 리스트에서의 unshift, shift 메소드와 같다.
왜냐하면, 스택에서의 push, pop 연산은 상수 시간 복잡도를 가져야하는데,
단일 연결 리스트에서의 pop은 마지막 노드를 삭제하기 위해 직전 노드를 찾아가는 과정이 필요하므로
상수 시간 복잡도가 아니다. 따라서 상수 시간 복잡도를 가지는 unshift와 shift를 활용해야 한다.
*/
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    let popNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popNode.next;
      popNode.next = null;
    }
    this.size--;
    return popNode.val;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
