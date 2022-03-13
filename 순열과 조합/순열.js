/*
개업 이래로 항상 승승장구하는 '승승장구 치킨집'의 비결은 소스에 있다.
수많은 타사 브랜드 치킨집들이 승승장구 치킨집의 소스 비결을 알아내려고 했으나 빈번히 포기했다.
그 이유는 5대째 내려오는 '비밀의 승승장구 치킨 소스 비율 레시피'는 70억 인구 중 사장님만 알고 있기 때문이다.
최근, 누리꾼 사이에서 이 레시피의 일부분을 발췌했다는 소문을 듣게 되었다.
그 소문은 다음과 같다.

N 가지의 재료 중에 단 M 가지만을 사용하여 조합한 모든 경우의 수 중 하나이다.
재료는 0과 1로만 이루어진 숫자로 암호화가 되어 있고, 항상 1로 시작하며 복호화를 할 수 없다.
단, 0이 3개 이상인 재료는 상한 재료이기 때문에 제외한다.
재료의 순서에 따라 맛이 달라지기 때문에, 재료를 넣는 순서가 다르다면 다른 레시피이다.
이 소문을 참고하여 '비밀의 승승장구 치킨 소스'가 될 수 있는 경우의 수를 모두 반환하는 함수를 작성하세요.

--인자 1: stuffArr
Number 타입의 재료를 담은 배열
요소는 0과 1로만 이루어진 숫자이며, 항상 1로 시작합니다.
요소는 중복될 수 없습니다.
요소의 길이는 20 이하입니다.
배열의 길이는 2 이상 10 이하입니다.
ex) [111, 110, 1010, 10, 10110]

--인자 2: choiceNum
Number 타입의 1 이상 stuffArr 길이 이하의 자연수
재료를 선택할 수 있는 수를 뜻합니다.
ex) 2
출력
Number 타입을 반환해야 합니다.
stuffArr가 [1, 10, 11000, 1111] 이고, choiceNum은 2라면 사용 가능한 재료는 [1, 10, 1111] 입니다. 조합할 수 있는 경우의 수는 6 가지입니다.

--입출력 예시
const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);
/*
  [
    [1, 10], [1, 1100], [1, 1111],
    [10, 1], [10, 1100], [10, 1111],
    [1100, 1], [1100, 10], [1100, 1111],
    [1111, 1], [1111, 10], [1111, 1100]
  ];
*/

function newChickenRecipe(stuffArr, choiceNum) {

    //상한재료의 끝은 000으로 끝나므로 나머지 연산자를 이용해 상한재료가 아닌 재료들만 뽑는다.
    stuffArr = stuffArr.filter(item => item % 1000 !== 0);
  
    //엣지 케이스
    if(stuffArr.length === 0){
      return [];
    }
    //레시피가 담길 배열
    let result = [];
    //순열을 구하는 재귀 함수
    const permutate = (arr, basket, n) => {
  
      if( n === 0){
        result.push(basket);
        return;
      }
  
      for(let i=0; i<arr.length; i++){
        const fixed = arr[i];     //값 하나를 고정하고
        const copy = arr.slice(); //슬라이스한다. (원본을 건들지 않기 위해)
        copy.splice(i,1);         //고정된 값을 뺀다.
        permutate(copy, basket.concat(fixed), n-1); //재귀
      }
      /*
      forEach((curr, idx, origin) => {
        const copy = origin.slice()
        copy.splice(idx,1);
        permutate(copy,basket.concat(curr),n-1);
      })
      */

    }
  
    permutate(stuffArr, [], choiceNum); //첫 실행
    return result;
  }