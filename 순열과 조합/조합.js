/*
평범한 블랙잭 게임에서 수시로 패배하자 흥미가 떨어진 김코딩은 박타짜에게 게임룰을 변형하여 새로운 카드 놀이를 해 볼 것을 제안합니다.
새로운 룰은 다음과 같습니다.

1. 숫자로 이루어진 카드를 여러 장 받습니다.
2. 3장씩 카드를 고르고, 3장에 적힌 숫자들의 합이 소수인지 확인합니다.
3. 받아든 카드로 만들 수 있는 소수의 개수가 많은 사람이 이기게 됩니다.
예로, [1, 2, 3, 4]라는 카드를 받았을 때 만들 수 있는 숫자는 6, 7, 8, 9이고, 소수는 7 하나이기 때문에 가지고 있는 소수의 개수는 1개입니다.
[2, 3, 4, 8, 13]라는 카드를 받았을 때 만들 수 있는 숫자는 9, 13, 18, 14, 19, 23, 15, 20, 24, 25이고, 소수는 13, 19, 23 총 3개이기 때문에 가지고 있는 소수의 개수는 3개입니다.

게임을 진행하기 전에 소수에 대해 아무런 지식이 없는 박타짜는 게임을 며칠 미룬 뒤, 게임의 룰을 따르는 함수를 만들기로 했습니다.
소수에 약한 박타짜를 도와 여러 장의 카드 중 세 장씩 조합해 소수가 되는 경우의 수를 리턴하는 함수를 완성해 주세요.

-입력:
cards: Array 3개 이상 50개 이하의 카드가 숫자로 들어 있는 배열

-출력:
Number 타입을 리턴해야 합니다.

-예시:
let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1
*/

/*
접근 방법
1. 모든 조합을 구한다. [[1,2,3],[1,2,4],[1,2,5]....]
2. 각 경우들의 합을 구한다. [[6],[7],[8],...]
3. 이 합들을 가지고 소수를 판별한다.
*/
function boringBlackjack(cards) {
  let result = [];

  //조합을 구하는 함수이자 재귀 함수
  function combination(arr, basket, n) {
    if (n === 0) {
      result.push(basket);
      return;
    }

    arr.forEach((curr, idx, origin) => {
      combination(origin.slice(idx + 1), basket.concat(curr), n - 1);
    });
  }
  //시작
  combination(cards, [], 3);

  //결과는 이런식으로 나온다. [[1,2,4],[1,2,5],[1,2,6], ...]
  //위의 결과를 가지고 모든 경우의 합을 구한다. [[7],[8],[9],[7]....]
  result = result.map(
    (item) =>
      item.reduce((acc, curr) => {
        return acc + curr;
      }),
    0
  );

  //아래의 코드부터 소수의 개수를 구하는 로직
  let count = 0;
  for (let i of result) {
    let isPrime = true;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      count++;
    }
  }

  return count;
}
