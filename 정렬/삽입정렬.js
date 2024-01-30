// 버블정렬과 다르게
// i는 1번 index부터 돈다.
// j는 i - 1부터 0까지 돈다. => i바로 앞에 있는 값들을 모두 탐색한다.

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i], // 현재 값을 tmp에 저장
      j;

    // i의 전의 값들을 모두 탐색
    for (j = i - 1; j >= 0; j--) {
      // 현재 값보다 전의 값이 더 크다면
      // 뒤로 복사
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // i전의 값들을 모두 탐색하고 큰 수가 뒤로 갔으니
    // 뒷지점에 tmp를 삽입
    arr[j + 1] = tmp;
  }

  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
