function findLongestSubString(str) {
  let start = 0;
  let end = 0;
  let obj = {};

  if (str.length === 0) {
    return 0;
  }
  let len = 1;
  while (end < str.length) {
    if (!obj.hasOwnProperty([str[end]])) {
      obj[str[end]] = end;
    } else {
      start = obj[str[end]] + 1;
      end = start;
      obj = {};
      obj[str[start]] = start;
    }
    end++;
  }
  return len;
}

console.log(findLongestSubString("rithmschool")); //7
// console.log(findLongestSubString("thisisawesome")); //6

// console.log(findLongestSubString("thisishowwedoit")); //6

// console.log(findLongestSubString("bbbbb")); //1
// console.log(findLongestSubString("thecatinthehat")); //7
// console.log(findLongestSubString("longestsubstring")); //8
