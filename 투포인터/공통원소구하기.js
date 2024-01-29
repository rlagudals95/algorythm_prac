// 두배열의 공통원소를 구해 오름차순으로
// 투포인터를 사용해야한다.
function solution(arr1, arr2) {
  let answer = [];

  const n = arr1.length;
  const m = arr2.length;

  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  let p1 = (p2 = 0);

  // 각 배열의 포인터 부분을 비교하고 작은 쪽의 포인터를 증가시킨다.

  while (p1 < n && p2 < m) {
    if (sortedArr1[p1] === sortedArr2[p2]) {
      answer.push(sortedArr1[p1]);
      p1++;
      p2++;
      continue;
    }

    if (sortedArr1[p1] > sortedArr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
