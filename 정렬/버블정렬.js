// 이웃한 두수끼리 비교해서 뒤의 수가 적으면 바꿔준다.
// 이중 for문 사용
// 오름차순 정렬

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] > arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
