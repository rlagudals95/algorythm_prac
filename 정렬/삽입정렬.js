// 버블정렬과 다르게
// i는 1번 index부터 돈다.
// j는 i - 1부터 0까지 돈다. => i바로 앞에 있는 값들을 모두 탐색한다.

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i]; // 현재 요소 저장
    let j;

    //현재요소 전의 값들을 탐색후 정렬

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        // 전 값이 현재값보다 크다?
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = tmp;
  }

  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
