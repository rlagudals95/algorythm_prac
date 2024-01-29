// 연속부분 수열의 합이 m이 되는 경우의 수를 구하시오
// 이중 for문을 돌면 n제곱의 시간 복잡도
// 투포인터를 이용해라
function solution(n, m, arr) {
  let answer = 0;

  let lt = 0;

  let sum = 0;

  // sum이 m보다 작으면 rt가 증가
  // sum이 m보다 크면 lt가 가르키는 곳을 sum에서 빼고 lt 증가
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum === m) {
      answer++;
    }

    // 총합보다 크다면 lt를 빼고 확인해본다.
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
