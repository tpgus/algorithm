class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/*
배열을 큐로 충분히 사용할 수 있지만, 스택과는 다르게 성능 문제가 있다.
배열을 큐로 사용할 경우 큐의 선입선출 특성상 입력이 push면, 출력은 shift를 써야하고
입력이 unshift면 출력은 pop을 사용해야 한다.
하지만, 배열 메소드에서 맨 앞에 데이터를 추가하고 삭제하는 경우는 
다음 요소의 모든 인덱스를 다시 수정해야 하기 때문에 시간 복잡도 O(N)을 가지게 된다.
따라서 성능이 중요하다면 큐를 연결 리스트로 구현할 것을 고려해 볼만 하다.

하지만 단일 연결 리스트로 큐를 구현하더라도, 삭제를 뒤쪽에서 하는 경우 (=pop 메소드 이용)에는
마지막 노드 이전까지 탐색을 해야하므로 똑같은 성능 문제가 발생한다. 
따라서 맨 뒤에서 추가하고 맨 앞에서 삭제하는 방식으로 구현을 해야한다.
*/
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //마지막에 추가
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  //앞에서 삭제
  dequeue() {
    if (this.size === 0) {
      return null;
    }

    let targetNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = targetNode.next;
      targetNode.next = null;
    }
    this.size--;
    return targetNode.val;
  }
}

let queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
