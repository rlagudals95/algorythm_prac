function solution(N, K) {
  let peoples = [3, 6, 2, 7, 5, 1, 4];

  // 3번 움직일때 마다 해당 index의 사람이 제거 되야합니다.
  // 제거 될때마다 배열의 길이가 줄어든다.
  // 배열의 크기보다 차례가 더 커진경우에 index 0부터 다시 시작해야합니다.
  // while (peoples.length > 1) {}

  const queue = [peoples[0]];
  let count = 1;
  while (queue.length > 1) {
    queue.shift();
    if (K % 3 === 0) {
      continue;
    } else {
      queue.push(peoples[count]);
    }
    count++;
  }

  return queue?.at(0) ?? -1;
}

console.log(solution(8, 3));
