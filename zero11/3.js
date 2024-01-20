function solution(A, K) {
  const n = A.length;

  // A 배열에서 2개의 숫자를 선택하여 만들 수 있는 모든 수를 저장
  const combinations = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      combinations.push(Number(`${A[j]}${A[i]}`));
    }
  }

  // 내림차순으로 정렬
  combinations.sort((a, b) => b - a);

  // K번째로 큰 수 반환
  return combinations[K - 1];
}

// A = [1,2,3,4,5]
// K = 1
