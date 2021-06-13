//내 코드
function solution(s) {
  var answer = -1;

  for (let i = 0; i < s.length; i++) {
    console.log(i);
    if (s[i] === s[i + 1]) {
      s = s.replace(s[i], "");
      s = s.replace(s[i], "");
      i = 0;
      i = i - 1;
    }
  }

  console.log(s);

  if (s.length === 0) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}
// 정답 코드

function solution(s) {
  var answer = true;
  var stack = [];
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  for (var i = 0; i < s.length; i++) {
    if (stack.length == 0) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] == s[i]) { //마지막값 과 첫번째 값이 같다면
        // stack에 들어간 2개의 요소가 같다면 맨 뒤의 값 제거
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length == 0 ? 1 : 0;
}
