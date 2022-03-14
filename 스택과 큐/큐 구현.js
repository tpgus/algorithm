/*
큐의 특징
FIFO : 먼저 들어간 데이터가 먼저 나온다.
즉, Queue는 데이터가 입력된 순서대로 처리할 때 주로 사용한다.
실생활에서 예를 들면, 프린터, 고속도로의 톨게이트와 마트의 계산대와 비슷하다.
*/

class Queue {
    constructor() {
        this.storage = {}; //값 보관하는 저장소
        this.front = 0;    //큐의 가장 앞을 가리키기 위한 변수
        this.rear = 0;     //큐의 가장 뒤를 가리키기 위한 변수
    }

    //큐의 사이즈를 반환하는 메소드
    size() {
        return this.rear - this.front;
    }

    //큐에 데이터를 추가하는 메소드
    enqueue(element) {
        this.storage[this.rear] = element;
        this.rear += 1;
    }

  // queue에서 element를 제거 한 뒤 해당 element를 반환하는 로직.
  // 만약 size가 0이라면 아무 일도 일어나지 않는다.
  // this.front+1로 가장 앞에 있는 요소를 다시 설정한 후 변수에 저장하고, 큐에서 삭제한 뒤에, 저장된 값을 반환한다.
  // 큐는 FIFO : 먼저 들어간 값이 먼저 나온다!
  dequeue() {
    if (this.size() === 0) {
      return;
    }
    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return result;
  }
}