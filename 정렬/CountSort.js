/*
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

-입력
number 타입을 요소로 갖는 배열
arr[i]는 0 이상의 정수
arr.length 100,000 이하

-출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)
*/

function radixSort(arr) {

    let result = [];

    //음수 값이 있다면 
    if (arr.some(item => item < 0)) {
        result = getMinus(arr);
    }

    result = result.concat(getRadixSort(arr));
    return result;
}

function getRadixSort(arr) {  //기본 계수 정렬 알고리즘
    const max = Math.max(...arr);
    const newArr = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        newArr[arr[i]]++;
    }

    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        let j = newArr[i];
        for (let k = 0; k < j; k++) {
            result.push(i);
        }
    }
    return result;
}

function getMinus(arr) { //음수 값들을 따로 정렬하여 반환하는 함수
    let minusArr = arr.filter(item => item < 0);
    minusArr = minusArr.map(item => Math.abs(item));
    //1 2 3 4 10 => 10 4 3 2 1 => -10 -4 -3- -2- 1
    minusArr = getRadixSort(minusArr);
    minusArr = minusArr.reverse();
    minusArr = minusArr.map(item => -item);
    return minusArr;
}
