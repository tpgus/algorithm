/*

다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

인자 1 : arr
양의 정수 또는 배열을 요소로 갖는 다차원 배열

-출력
배열 형태

-주의 사항
함수 flattenArr는 재귀함수의 형태로 작성합니다.
Array Method flat()과 flatMap() 사용은 금지됩니다.
반복문(for, while) 사용이 가능합니다.
입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

-예시
output = flattenArr([[2, [[3]]], 4, [[[5]]]);
console.log(output); // --> [2, 3, 4, 5]
*/


function flattenArr(arr) {
    if (arr.length === 0) { //재귀 탈출 조건
        return []
    }
                                                             //결과 값을 담을 배열
    let result = [];    
    for (let i = 0; i < arr.length; i++) {                   //현재 배열의 길이 만큼 반복 수행
        if (Array.isArray(arr[i])) {                         //현재 요소가 배열이라면 ?  다시 재귀 함수 호출
            result = result.concat(flattenArr(arr[i]))       
        } 
        else {                                             
            result.push(arr[i]);                             //현재 요소가 배열이 아니라면 ? result에 추가
        }
    }
    return result;
}
