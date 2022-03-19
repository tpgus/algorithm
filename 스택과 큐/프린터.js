/*
[문제]
김세현은 프린터의 인쇄 작업 목록의 크기와 최대 용량을 가정하고
각기 다른 용량의 문서를 차례대로 인쇄하여 모든 문서가 인쇄되는데 최소 몇 초가 걸리는지 테스트하기로 했습니다.
프린터 인쇄 작업 목록의 제한사항은 다음과 같습니다.

[제한사항]
1.인쇄 작업 목록은 칸으로 이루어져 있습니다.
2.각 칸에는 한 개의 문서만 위치할 수 있습니다.
3.문서는 1초에 한 칸만 이동할 수 있습니다.
4.인쇄 작업 목록의 크기는 bufferSize이고 최대 용량 capacities 만큼 문서를 담을 수 있습니다.

[설명]
만약, 인쇄 작업 목록의 크기가 2이고 최대 용량이 10라면 크기가 [7, 4, 5, 6]인 문서들이
최단 시간 안에 순서대로 모두 인쇄되는 과정은 다음과 같습니다.
1. 1초가 지나면 인쇄 작업 목록에는 7 크기의 문서가 추가됩니다.
2. 2초일 때 인쇄 작업 목록의 최대 용량이 10이기 때문에 4 문서는 작업 목록에 들어갈 수 없습니다. 동시에 7 문서는 작업 목록에서 1칸 앞으로 이동합니다.
3. 3초일 때 7 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 4 문서는 인쇄 작업 목록에 추가됩니다.
4. 4초일 때 4 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다. 동시에 5 문서는 인쇄 작업 목록에 추가됩니다.
5. 5초일 때 4 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 5 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다.
   최대 용량 10 제한으로 6 문서는 인쇄 작업 목록으로 추가될 수 없습니다.
6. 6초일 때 5 문서는 인쇄 작업 목록에서 나와 프린터가 인쇄합니다. 동시에 6 문서가 인쇄 작업 목록에 추가됩니다.
7. 7초일 때 6 문서는 인쇄 작업 목록에서 1칸 앞으로 이동합니다.
8. 8초일 때 6 문서가 마지막으로 인쇄됩니다.

위 예시에서와 같이 모든 문서가 출력되는데 걸리는 최소 시간은 8초가 걸립니다.

김세현이 가지고 있는 프린터의 제한사항인 인쇄 작업 목록의 크기 bufferSize, 최대 용량 capacities가 주어집니다.
인쇄할 문서의 크기가 나열된 배열 documents가 모두 인쇄되는데 걸리는 최소 시간을 반환하는 솔루션을 만들어 주세요.

-입력
인자1: bufferSize
Number 타입의 인쇄 작업 목록 크기
인자 2: capacities
Number 타입의 인쇄 작업 목록에 추가될 수 있는 최대 용량
인자 3: documents
Number 타입을 요소로 갖는 문서 크기가 나열된 배열
*/

function queuePrinter(bufferSize, capacities, documents) {
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    for (let i = 0; i < bufferSize; i++) {     // queue에 bufferSize만큼 0을 삽입한다.
        queue.push(0);
    }                                        // Line 48 ~ 52은 프린터가 처음 실행될 때의 로직
    let currentDocument = documents.shift(); // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 현재 문서에 할당한다.
    queue.unshift(currentDocument);          // 큐의 제일 앞에 현재 문서를 삽입하고, 제일 마지막 요소를 없앤다.
    queue.pop();
    totalBufferVolume = totalBufferVolume + currentDocument;// 총 용량에 현재 문서의 크기를 합친다.
    count++;                                 // 1초가 지나면 count++

    while (totalBufferVolume) {               // 총 용량이 0이 될 때까지 반복
        totalBufferVolume = totalBufferVolume - queue.pop(); //총 용량에 queue에 있는 마지막 요소를 제거한다.
        currentDocument = documents.shift();   // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 현재 문서에 할당한다.


        if (currentDocument + totalBufferVolume <= capacities) { // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량보다 작거나 같다면
            queue.unshift(currentDocument);                      // 큐에 현재 문서를 삽입하고 총 용량에 현재 문서의 용량을 추가한다.
            totalBufferVolume = totalBufferVolume + currentDocument;

        } else {                                                 // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량보다 크다면
            documents.unshift(currentDocument);                  // 다시 documents에 현재 문서를 집어넣고 큐에는 0을 삽입한다.
            queue.unshift(0);
        }
        count++;                                                 // 한 번 반복할 때마다 count++ 1초를 센다. 
    }
    return count;
}