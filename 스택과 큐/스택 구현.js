/*
스택 특징
LIFO : 가장 나중에 들어간 데이터가 가장 먼저 나온다.
한 쪽 방향이 막힌 막다른 골목길?이라고 생각할 수 있다.
즉 스택의 데이터 입출력 방향은 한 쪽 방향으로 제한되어 있다.
대표적으로 실생활에서 브라우저의 앞, 뒤로가기가 있다.
*/

class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 변수 top
  }

  //스택의 사이즈를 반환하는 size 메소드
  size() {
    return this.top;
  }

  //스택에 값을 추가하는 push 메소드
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  //스택의 값을 하나씩 빼내는 pop 메소드
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않도록!
    if (this.size() === 0) {
      return;
    }

    //pop을 수행하고, 해당 값을 반환하기 위한 로직
    //[this.top-1]을 해주는 이유는 스택에 값을 push 해주면, 탑은 top+1을 가리키게 된다. (즉, 빈 공간이다.)
    //그렇기 때문에 삭제하기 전에 먼저 [this.top-1]을 해주어야 한다.
    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}
