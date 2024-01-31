// 키순대로 앞번호를 받는다
// 그러나 현수가 짝꿍과 번호를 바꿔서 정렬이 이상해짐
// 현수와 짝꿍 번호를 찾으시오
function solution(n, arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      answer.push(i + 1);
    }
  }

  // 다음 뒷
  return answer;
}

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution(5, [120, 130, 150, 150, 130, 150]));
