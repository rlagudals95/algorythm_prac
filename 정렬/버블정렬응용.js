// N개의 정수가 입력되면 입력된 값을 정렬하시오
// 음의 정수는 앞쪽에 양의 정수는 뒷쪽에 단, 음과 양의 정수들간의 순서변화는 없어야한다.
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 뒤가 양수고 앞의 수가 음수인 경우 바꾸시오
      if (arr[j + 1] < 0 && arr[j] > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
