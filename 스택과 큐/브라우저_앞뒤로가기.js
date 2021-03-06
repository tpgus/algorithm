/*
개발자가 되고 싶은 김세현은 자료구조를 공부하고 있습니다.
인터넷 브라우저를 통해 스택에 대해 검색을 하면서 다양한 페이지에 접속하게 되었는데,
 "뒤로 가기", "앞으로 가기"를 반복하면서 여러 페이지를 참고하고 있었습니다.

그런데 새로운 페이지를 접속하게 되면 "앞으로 가기" 버튼이 비활성화가 되어서 
다시 보고 싶던 페이지로 갈 수 없었습니다. 이러기를 반복하다가 김세현은 스택 자료구조를 떠올리게 되었습니다.

브라우저에서 "뒤로 가기", "앞으로 가기" 기능이 어떻게 구현되는지 궁금해진 김세현은 몇 가지 조건을 아래와 같이 작성하였지만, 
막상 코드를 작성하지 못하고 있습니다.

-조건
1.새로운 페이지로 접속할 경우 prev 스택에 원래 있던 페이지를 넣고 next 스택을 비웁니다.

2.뒤로 가기 버튼을 누를 경우 원래 있던 페이지를 next 스택에 넣고 prev 스택의 top에 있는 페이지로 이동한 뒤 prev 스택의 값을 pop 합니다.

3.앞으로 가기 버튼을 누를 경우 원래 있던 페이지를 prev 스택에 넣고 next 스택의 top에 있는 페이지로 이동한 뒤 next 스택의 값을 pop 합니다.

4.브라우저에서 뒤로 가기, 앞으로 가기 버튼이 비활성화일 경우(클릭이 되지 않을 경우)에는 스택에 push 하지 않습니다.

5.인터넷 브라우저에서 행동한 순서가 들어있는 배열 actions와 시작 페이지 start가 주어질 때 마지막에 접속해 있는 페이지와 방문했던 페이지들이 담긴 스택을 반환하는 솔루션을 만들어 김코딩의 궁금증을 풀어주세요.

-입력
인자 1: actions
String과 Number 타입을 요소로 갖는 브라우저에서 행동한 순서를 차례대로 나열한 배열

인자 2: start
String 타입의 시작 페이지를 나타내는 현재 접속해 있는 대문자 알파벳

-출력
Array 타입을 리턴해야 합니다.

-주의사항
1.만약 start의 인자로 string 자료형이 아닌 다른 자료형이 들어온다면 false를 리턴합니다.
2.새로운 페이지 접속은 알파벳 대문자로 표기합니다.
3.뒤로 가기 버튼을 누른 행동은 -1로 표기합니다.
4.앞으로 가기 버튼을 누른 행동은 1로 표기합니다.
5.다음 방문할 페이지는 항상 현재 페이지와 다른 페이지로 접속합니다.
6.방문한 페이지의 개수는 100개 이하입니다.
7.반환되는 출력값 배열의 첫 번째 요소 prev 스택, 세 번째 요소 next 스택은 배열입니다. 스택을 사용자 정의한다면 출력에서는 배열로 변환해야 합니다.

-예시
const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]
*/

function browserStack(actions, start) {
  let prev = []; // 이전 페이지들을 담을 스택 (뒤로가기)
  let next = []; // 다음 페이지들을 담을 스택 (앞으로가기)
  let current = start; // 현재

  if (typeof current !== "string") {
    //주의사항 1번에 해당하는 코드
    return false;
  }

  for (let i of actions) {
    if (typeof i === "string") {
      //새로운 페이지에 접속할 경우
      prev.push(current); //현재 페이지를 이전 페이지 스택에 넣고
      next = []; //새로운 페이지니까 다음 페이지 스택은 비워지게 된다. (앞으로 가기 불가)
      current = i; //현재 페이지를 다시 설정
    } else {
      //앞으로 가기 로직
      if (i > 0 && next.length > 0) {
        //i가 1이면 앞으로 가기, 앞으로 가기 스택이 비워있지 않다면?
        prev.push(current); //이전 페이지 스택에 현재 페이지를 넣고
        current = next.pop(); //현재 페이지는 앞으로 가기 스택에서 가져온다.
      } else if (i < 0 && prev.length > 0) {
        //위와 반대 (뒤로 가기 로직)
        next.push(current);
        current = prev.pop();
      }
    }
  }
  return [prev, current, next]; //[[이전 페이지 스택], 현재 페이지, [다음 페이지 스택]]
}
