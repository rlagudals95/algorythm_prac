function solution(arr) {
  var answer = arr[0];
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    answer = lcm(answer, arr[i + 1]);
  }
  return answer;
}
// 최대공약수
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}
