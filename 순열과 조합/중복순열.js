/*
가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 
동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임입니다.
세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다.
세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

-입력 : 없음
-출력 :
2차원 배열(arr[i])을 리턴해야 합니다.
arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
arr[i].length는 3

예시) :
let output = rockPaperScissors();

console.log(output);
/*
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
*/

function rockPaperScissors(rounds) {
  // 단축평가를 이용해 rounds가 인수로 전달되면 그대로 사용하고, 전달되지 않는다면 3라운드.
  rounds = rounds || 3;
  const rps = ["rock", "paper", "scissors"];

  //결과를 담을 배열
  const result = [];

  //재귀에 사용될 함수와 인자 1.값을 담아가기 위한 바구니 2.남은 라운드
  //라운드 숫자만큼 바구니에 rps 요소를 넣는다.
  const permutate = (basket, remainRounds) => {
    //남은 라운드가 0이라면, 결과에 추가하고 재귀를 빠져 나온다.
    if (remainRounds === 0) {
      result.push(basket);
      return;
    }
    //rps 배열을 순회한다.
    for (let i = 0; i < rps.length; i++) {
      const fixed = rps[i]; //rps의 i번째 요소를 고정하고,
      permutate(basket.concat(fixed), remainRounds - 1); //바구니에 그 고정 값을 담고, 라운드를 1 감소시켜 다시 재귀 함수 호출
    }
  };
  //처음에는 permutate함수에 인수로 빈 배열인 basket과 총 라운드(3)를 전달하며 재귀함수는 시작된다. permutate([], rounds=3)
  //남은 라운드는 0이 아니므로, 반복문을 처음으로 수행하게 된다.
  //빈 배열이었던 바구니(basket)에 rps 배열의 첫 요소인 'rock'을 담고, 남은 라운드를 1 감소시킨다.
  //이들을 인수로 사용해 재귀적으로 함수를 호출한다.
  //남은 라운드는 아직 2이므로 반복문을 다시 진입한다. 이때는 함수안의 새로운 함수를 호출한 상황이므로,
  //현재의 반복문은 이전과 다른 반복문이므로 새로 시작하는 반복문이다. i=0 => rock을 가리킴
  //현재 바구니에 [rock]이 담겨 있는 상태에서 rock을 추가해 [rock,rock]이 된다. 라운드는 1 감소
  //다시 재귀를 돈다. 현재 라운드는 1이므로 재귀 탈출 조건을 만족하지 못하고 다시 새로운 배열을 순회해야 한다.
  //현재 [rock,rock]이 담겨 있는 바구니에 rock을 추가해서 바구니는 [rock,rock,rock]이 되고 라운드는 1 감소한다.
  //[rock,rock,rock]과 0 라운드를 인수로 전달하여 함수를 호출한다.
  //라운드가 0이 되었으므로, 결과를 담는 result 배열에 push하고 마지막으로 호출된 함수가 종료된다.
  //종료되었을 때의 바구니 상황은 [rock,rock]인 상황이고, i는 1이 되어 'paper'를 가리킨다. 그리고 라운드도 0라운드 이전인 1라운드가 된다.
  //paper를 바구니에 담고, [rock,rock,paper]와 현재 라운드-1을 인수로 전달하며 호출한다.
  //라운드는 0이므로 현재 결과 result에 [rock,rock,paper]를 담고 종료한다.
  //현재 바구니에는 [rock,rock]이 담겨 있고 i는 2가되어 scissor를 가리키고, 라운드는 1이다.
  //permuate 함수를 호출하며 바구니에 scissors를 담아 [rock,rock,scissors], 0 을 인수로 전달한다.
  //라운드는 0이므로 결과에 담고 함수를 종료한다.
  //위 과정을 반복한다.

  permutate([], rounds); //재귀 함수 실행
  return result;
}
