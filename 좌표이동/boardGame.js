/*
N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같다.

좌표 왼쪽 상단(0, 0)에 말을 놓는다.
말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
조작의 기회는 딱 한 번 주어진다.
조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
예시: UDDLLRRDRR, RRRRR
한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
방문한 곳을 또 방문해도 숫자를 획득할 수 있다.
보드 밖을 나간 말은 OUT 처리가 된다.
칸 안의 숫자는 0 또는 1이다.
단, 좌표 왼쪽 상단(0, 0)은 항상 0이다.
획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.*/

function boardGame(board, operation) {
  let now = [0, 0]; //현재 좌표 : 주의해야 할 점은 일반 수학에서 사용하는 좌표 (x,y)와는 반대임. <=> (y,x) 2차원 배열의 인덱스
  let point = 0; //점수

  for (let i of operation) {
    if (i === "U") {
      now[0]--;
    } else if (i === "D") {
      now[0]++;
    } else if (i === "R") {
      now[1]++;
    } else if (i === "L") {
      now[1]--;
    }

    // 말의 현재 좌표가 보드의 범위를 벗어났는지를 검사
    if (
      now[0] > board.length - 1 ||
      now[0] < 0 ||
      now[1] > board[0].length - 1 ||
      now[1] < 0
    ) {
      return "OUT";
    }
    //유효하다면 점수 추가
    point += board[now[0]][now[1]];
  }
  return point;
}

//위의 코드를 개선한 코드
function improved_boardGame(board, operation) {
  const DIR = {
    // LOOK UP 테이블을 이용해 기존의 조건문을 추상화했다.
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  //유효성 검사 함수
  function isValid(y, x) {
    return y < 0 || y > board.length - 1 || x < 0 || x > board[0].length - 1;
  }

  let point = 0;
  let x = 0;
  let y = 0;

  for (let i of operation) {
    const [my, mx] = DIR[i];
    y += my;
    x += mx;
    if (isValid(y, x)) {
      return "OUT";
    }
    point += board[y][x];
  }

  return point;
}
