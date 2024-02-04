// 금액이 주어졌을때 주어진 동전들을 최소로 사용하면서 금액을 맞출 수 있는 경우를 구하시오

//DFS 이용
function solution(sum, coins) {
  let answer = 1000;

  function DFS(L, total) {
    if (L > answer) {
      return;
    }

    if (total > sum) {
      return;
    }

    if (sum === total) {
      answer = Math.min(L, answer);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(L + 1, total + coins[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

//BFS 이용
function solution2(target, coins) {
  const queue = [{ sum: 0, count: 0 }];

  let answer = 1000;

  while (queue.length) {
    const { sum, count } = queue.shift();

    if (sum > target) {
      continue;
    }

    if (sum === target) {
      answer = Math.min(count, answer);
    }

    for (let i = 0; i < coins.length; i++) {
      queue.push({ sum: sum + coins[i], count: count + 1 });
    }
  }

  return answer;
}

const coins = [1, 2, 5];
const sum = 15;

//console.log(solution(sum, coins));
console.log(solution2(sum, coins));
