// 카카오 캐시 문제 변형
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) {
        // hit
        pos = i;
      }
    }

    if (pos === -1) {
      // miss인 경우엔 캐시의 마지막 값을 제거하고 뒤로 하나씩 땡긴다.
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    } else {
      //hit 지점부터 땡긴다.
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    }
  });

  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
