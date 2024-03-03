function solution(n, arr) {
  // 현재원소보다 오른쪽에 있으면서 큰 수를 출력
  let answer = [];

  // 순회 할때 마다 뒤의 수들을 모두 검사한다?
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    const hasUp = arr.slice(i + 1, arr.length).some((a) => a > arr[i]);

    if (!hasUp) {
      answer.push(-1);
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        current = arr[j];
        break;
      }
    }

    answer.push(current);
  }

  return answer;
}

console.log(solution(4, [9, 5, 4, 8]));
