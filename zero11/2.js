function solution(N, K) {
  let count = 0; // 움직인 횟수 저장

  let peoples = [];

  for (let i = 1; i <= N; i++) {
    peoples.push(i);
  }

  let queue = [peoples[0]];

  // 삭제 하면서 queue에 넣는다.
  // 현재 index가 queue의 길이보다크다?

  while (peoples.length !== 1) {
    count++;

    const current = queue.shift();

    if (count === K) {
      count = 0;
      continue;
    }

    queue.push(current);
    // count가 3일때 없앤다?
  }

  console.log(queue);
  return queue.at(0);
}

// N = 8
// K = 3
