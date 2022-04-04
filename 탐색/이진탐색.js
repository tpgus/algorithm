/*
오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

[입력]
-인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수

-인자 2 : target
number 타입의 정수

[출력]
number 타입을 리턴해야 합니다.

[접근 방법]
이진 탐색은 탐색하고자 하는 구간을 절반씩 나누어 탐색하는 방법이다.
구간의 첫 인덱스를 나타내는 left, 
구간의 끝 인덱스를 나타내는 right,
그 중간의 인덱스를 나타내는 middle이 필요하다.
(편하게 인덱스에 해당하는 값을 left, right, middle이라 표현하겠다.)

매 탐색마다 middle값과 탐색하고자 하는 값이 같은지 판별하고,
찾고자 하는 값이 middle 보다 크다면 찾고자 하는 값은 middle < 값 < right 범위에 존재하므로
left의 값을 middle + 1로 바꿔주고 이 구간에서 다시 탐색을 수행한다.

찾고자 하는 값이 middle 값 보다 작다면 right값을 middle - 1로 바꿔주고
이 구간에서 다시 탐색을 수행한다.

재귀적으로 구현하는 방법도 있고, 반복문을 통해 구현할 수도 있다.
*/


const binarySearch = function (arr, target) {
    let left = 0;                   //초기설정, left = 배열의 첫 인덱스
    let right = arr.length - 1;     //         right = 배열의 마지막 인덱스 

    while (left <= right) {
        let middle = parseInt((right + left) / 2); //middle은 중간 값
        if (arr[middle] === target) {              //찾고자 하는 값이 middle과 같다면 출력
            return middle;
        }
        if (target < arr[middle]) {                //위에서 찾지 못했다면, 여기서 비교
            right = middle - 1;                    //찾고자 하는 값이  middle 보다 작다면,
        } else {
            left = middle + 1;                     //찾고자 하는 값이 middle 보다 크다면
        }
    }
    return -1;                                     //찾지 못했다면 -1 출력
};

const recursiveBinarySearch = function (arr, target, left, right) {

    if (left > right) { // 탈출 조건
        return -1;
    }

    let middle = parseInt((left + right) / 2);
    if (arr[middle] === target) {
        return middle;
    } else if (arr[middle] < target) {
        return recursiveBinarySearch(arr, target, middle + 1, right);
    } else {
        return recursiveBinarySearch(arr, target, left, middle - 1);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 8, 10, 20, 15];
arr.sort((a, b) => a - b);
let result = recursiveBinarySearch(arr, 6, 0, arr.length - 1);
console.log(result);