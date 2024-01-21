// N개의 수로 이어진 수열이 주어진다
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇번 있는지 구하는 프로그램을 작성하시오

function solution(N, nums) {
  let answer = 0;
  let queue = [[nums[0]]]; // start setting

  const map = Array.from({ length: nums.length }, () => 0);
  map[0] = 1;

  while (queue.length) {
    const n = queue.shift();
    const sum = n.reduce((prev, cur) => prev + cur, 0);

    if (sum <= N) {
      answer++;
    }

    for (let i = 0; i < nums.length; i++) {
      console.log("i:", i);
      if (map[i] === 0) {
        console.log("i:", i);
        map[i] = 1;
        console.log([...nums, nums[i]]);
        queue.push([...nums, nums[i]]);
        map[i] = 0;
      }
    }
  }

  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
