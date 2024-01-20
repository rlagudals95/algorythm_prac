function solution(N, K) {
  // 정수 N과 한자리 자연수 K
  // K를 이용해 N의 특정한 자리에 끼워넣어 만들 수 있는 숫자중 가장큰 숫자를 구하시오
  const strN = Math.abs(N).toString(); // N을 문자열로 변환
  // "278"
  const strK = K.toString();
  // "3"

  let maxNum = -Infinity;

  for (let i = 0; i <= strN.length; i++) {
    // N의 각 자리수를 비교하면서 K를 끼워넣기
    const newNumStr = strN.slice(0, i) + strK + strN.slice(i);

    // slice 함수는 인자가 1개일 경우 인자로 넣은 index부터 뒤의 요소들을 가져온다.
    console.log(strN.slice(0, i), "/", strK, "/", strN.slice(i));
    const newNum = parseInt(newNumStr);

    // 새로운 숫자가 현재까지의 최댓값보다 크다면 업데이트
    maxNum = Math.max(maxNum, newNum);
  }

  return maxNum;
}

console.log(solution(278, 3));

// K = 3
// N = 278
