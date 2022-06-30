/*
[문제]
두 문자열이 주어졌을 때, anagram인지 판별하기
anagram은 한 문자열을 재배열하여 형성된 단어, 문장이다.
ex) iceman은 cinema의 아나그램이다
*/

// Solution 1
// Time : O(N)
// Space : O(N)
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  //각 문자의 빈도수를 체크하기 위한 객체:lookup
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// Solution 2
// Time : O(N)
// Space : O(2N) = O(N)
function validAnagram2(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let letter of word1) {
    obj1[letter] = (obj1[letter] || 0) + 1;
  }

  for (let letter of word2) {
    obj2[letter] = (obj2[letter] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagarma"));
console.log(validAnagram("abc", "bca"));
console.log(validAnagram("banana", "baaaan"));
