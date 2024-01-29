// 두배열을 합쳐 오름차순으로
// sort를 쓴다? => n log n 의 시간복잡도를 가진다. 즉, 느리다.
// 투포인터를 사용해야한다.
function solution(arr1, arr2) {
  let answer = [];

  const n = arr1.length;
  const m = arr2.length;

  let p1 = (p2 = 0);

  //arr[p1]과 arr[p2] 중 작은 것을 넣자
  //더 작은 곳의 p(포인터)를 증가시키자

  // 둘중의 하나가 다 비어질때까지
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
