// 연속부분 수열의 합이 m이하가 되는 경우의 수를 구하시오
// 이중 for문을 돌면 n제곱의 시간 복잡도
// 투포인터를 이용해라
function solution(n, m, arr) {
  let answer = 0;

  let lt = 0;

  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (m >= sum) {
      answer++;
    }

    // sum이 더 큰경우엔 lt를 옮겨야 한다
    while (sum > m) {
      sum -= arr[lt++];

      if (m >= sum) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(5, 5, [1, 2, 3, 2, 3]));
