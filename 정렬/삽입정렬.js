// 버블정렬과 다르게
// i는 1번 index부터 돈다.
// j는 i - 1부터 0까지 돈다. => i바로 앞에 있는 값들을 모두 탐색한다.

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (tmp > arr[j]) {
        break;
      } else {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }

    arr[j + 1] = tmp;
  }

  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
