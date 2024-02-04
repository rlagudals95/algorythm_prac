// 카카오 캐시 문제 변형
function solution(size, arr) {
  let answer = [];

  arr.forEach((c, index) => {
    let pos = -1;

    for (let i = 0; i < size; i++) {
      if (answer[i] === c) {
        pos = c;
      }
    }

    if (pos === -1) {
      answer.unshift(c);
      if (answer.length > size) answer.pop();
    } else {
      answer.unshift(answer.splice(index, 1));
    }
  });

  return answer;
}
