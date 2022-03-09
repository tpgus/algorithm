/*
사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다.
박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.
예를 들어, 짐의 무게가 [60kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만
1번째 짐과 3번째 짐의 무게의 합은 140kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.

이때, 박스를 최대한 적게 사용하여 모든 짐을 옮기려고 한다.
짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때,
모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.

인자 1: stuff 
Number 타입의 40 이상 240 이하의 자연수를 담은 배열

인자 2: limited
Number 타입의 40 이상 240 이하의 자연수
*/

//신경써야 하는 것 : 한 번에 최대 2개, 무게 제한
function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    stuff.sort( (a,b) => a-b); // 정렬 
    let left = 0; 
    let right = stuff.length - 1;

    while(left <= right){
      //현재 짐 중에 가장 작은 것과 가장 큰 것의 무게의 합이 무게 제한 보다 작다면 둘 다 빼기,
      if(stuff[left] + stuff[right] <= limit){
        left++;
        right--;
      }else{
     // 무게 제한을 초과 한다면, 큰 것만 빼기
        right--;
      }
      count++;
    }
    return count;
  }