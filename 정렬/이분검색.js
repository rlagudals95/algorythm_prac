// 이분검색으로 주어진 수가 몇번째로 큰지 검사하시오
function solution(target, arr) {
  let answer;

  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }

    console.log(lt, rt);
  }

  return answer;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
