/*
1. 각 노드를 위한 클래스를 정의한다.
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

  //노드를 추가한다.
  push(val) {
    let newNode = new Node(val);
    //리스트의 길이가 0일 때를 검사하기 위해 this.length === 0으로 해도 된다.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; //전체 리스트 반환
  }

  //pop 메소드 : tail 노드를 삭제한다. 새로운 tail을 설정하기 위해 tail 이전 노드를 알아내야 한다.
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
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let prevHead = this.head;
    this.head = prevHead.next;
    prevHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return prevHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //인덱스에 해당하는 노드를 반환한다.
  //연결 리스트의 노드를 인덱스를 통해 접근하는 것은 배열에 비해 비효율적이므로, 이 연산이 많이 사용된다면 배열을 사용해야 한다.
  get(index) {
    if (index < 0 || this.length <= index) {
      return null;
    }
    // 아래의 주석된 if문은 처음에 내가 작성한 코드이지만, 이 코드가 없어도 위에서 걸림
    // if (this.length === 0) {
    // return undefined;
    // }
    let count = 0;
    let node = this.head;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node;
  }

  //인덱스와 값을 받아 해당 인덱스의 노드의 값을 업데이트한다.
  //get() 메소드를 활용하면 된다. -> 노드가 없을 경우도 get이 알아서 처리한다.
  set(index, value) {
    let node = this.get(index);
    if (!node) {
      return false; //업데이트 실패
    }
    node.val = value;
    return true; //업데이트 성공
  }

  insert(index, value) {
    // 길이가 같은 건 유효하다. 가장 끝에 삽입한다는 것이므로
    if (index < 0 || index > this.length) return false;
    //빈 리스트, index가 0일 경우 아래의 두 조건은 같고, if-else문이 아니기에 두 번 실행될 것 같지만, return 문을 사용했기 때문에 문제 없다.
    //insert 메소드 호출 결과로 일관성 있게 true나 false를 반환하고 싶은데, push나 unshift 메소드를 사용하고 그 결과 자체를 return하게 되면,
    //push나 unshift의 결과는 리스트 자체이기 때문에 언제는 리스트가 반환되고 언제는 boolean이 반환된다.
    //하지만 !! 연산자를 쓰게 되면 boolean 타입으로 형변환이 가능하다.
    //'hi' = true -> !'hi' = false -> !false = true 즉 !!'hi'는 false형태로 반환된다.
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    //위의 조건들을 만족하지 않았다는 것은 인덱스가 리스트의 중간 쯤에 위치하고 있다는 의미이다.
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.shift();
    }
    if (index === this.length - 1) {
      return !!this.pop();
    }

    //엣지 케이스를 피하고 여기 까지 왔다는 건 노드가 중간 쯤에 위치하고 있다는 것
    let prevNode = this.get(index - 1);
    let targetNode = prevNode.next;
    prevNode.next = targetNode.next;
    // targetNode = null;
    this.length--;
    return targetNode;
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }
    // a b c d
    //
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prevNode = null;
    let nextNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
// console.log(list.insert(0, "idiot"));
// console.log(list.insert(6, "wow"));

list.print();
console.log(list.reverse());
list.print();
