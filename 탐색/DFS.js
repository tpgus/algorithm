/*
[문제]
임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 깊이 우선 탐색(DFS, Depth First Search)을 합니다.
이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

[입력]
인자 1 : node
'value', 'children' 속성을 갖는 객체 (Node)
'node.value'는 number 타입
'node.children'은 Node를 요소로 갖는 배열

[출력]
배열을 리턴해야 합니다.

[입출력 예시]
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
*/

let dfs = function (node) {
  let visited = [node.value]; //방문하는 노드의 값을 순서대로 출력하는 것이므로, 방문한 순서를 저장하는 visited 배열에 해당 노드의 값을 넣어준다.
  for (let i = 0; i < node.children.length; i++) {
    //해당 노드에 자식이 있다면, 이 자식을 인수로 사용하여 함수를 재귀적으로 호출한다.
    visited = visited.concat(dfs(node.children[i]));
  }
  return visited;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
