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

function rockPaperScissors (rounds) {

    // 단축평가를 이용해 rounds가 인수로 전달되면 그대로 사용하고, 전달되지 않는다면 3라운드.
    rounds = rounds || 3;
    const rps = ['rock', 'paper', 'scissors']; 

    //결과를 담을 배열
    const result = [];
  
    //재귀에 사용될 함수와 인자 1.하나씩 값을 담아가기 위한 바구니 2.남은 라운드
    //라운드 숫자만큼 바구니에 rps 요소를 넣는다.   
    const permutate = (basket, n) => {

      //남은 라운드가 0이라면, 결과에 추가하고 재귀를 빠져 나온다.
      if(n === 0){
        result.push(basket);
        return;
      }
      //rps 배열을 순회한다.
      for(let i=0; i<rps.length; i++){
        const fixed = rps[i]; //rps의 i번째 요소를 고정하고,
        permutate(basket.concat(fixed),n-1);  //바구니에 그 고정 값을 담고, 라운드를 1 감소시켜 다시 재귀 함수 호출
      }
    }
  
    permutate([],rounds) //재귀 함수 실행
    return result;
  
  }