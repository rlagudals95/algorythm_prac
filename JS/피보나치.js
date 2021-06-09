function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3));
