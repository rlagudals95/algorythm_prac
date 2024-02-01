// 회의 시작과 끝나는 시각이 주어진다.
// 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수를 구하시오
// 단, 회의가 끄타는 동시에 다음 회의가 시작될 수 있다.
function solution(arr) {
  let answer = 0;

  // 회의 빨리 끝나는 순으로 정렬하자

  let sorted = arr.sort((a, b) => {
    // 회의 끝 시작이 같다면 시작 시간 오름차순
    if (a[1] === b[1]) return a[0] - b[0];
    // 그게 아니라면 끝시작으로 오름차순
    else return a[1] - b[1];
  });

  let endTime = 0;
  for (let x of sorted) {
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
