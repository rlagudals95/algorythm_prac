
function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);
  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
//////////////
function solution(n, target) {
  return ccc(n, 0, target);
}

function ccc(n, r, t) {
  if (n.length > 0) {
    // console.log(n);
    var tmp = n.pop() + r;
    return ccc(n.slice(), tmp, t) + ccc(n.slice(), -tmp, t);
  } else {
    // console.log("s : " + s);
    if (r == t) return 1;
    else return 0;
  }
}
//////////


function solution(numbers, target)
{ var answer = 0; recur(0, 0); return answer;
    // 재귀함수 형태의 DFS 구현 
    function recur(cnt, sum) {
        // numbers의 모든 수를 연산하고, target과 같은 합이 나오면 answer증가 
        if (cnt === numbers.length) {
            if (sum === target)
                answer++;
            return
        }
        // + , - 연산 모두 수행 
        recur(cnt + 1, sum + numbers[cnt]);
        recur(cnt + 1, sum - numbers[cnt]);
    }
}

