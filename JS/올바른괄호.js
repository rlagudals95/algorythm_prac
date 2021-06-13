// 테스트 케이스를 통과 하지 못한 것이 있다..!

function solution(s) {
  var answer = true;

  // console.log(s)

  for (let i = 0; i < s.length * 2; i++) {
    s = s.replace("()", "");
  }

  console.log(s);

  if (s.length) {
    answer = false;
  }

  return answer;
}
