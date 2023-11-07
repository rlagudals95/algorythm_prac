// 이건 천재인가..?
function solution(n, a, b) {
  let answer = 0; // a = 4, b = 7
    while (a !== b) {
    // 최종적으로 모든 수는 1이 된다
    a = Math.ceil(a / 2); // 2, 1, 1
    b = Math.ceil(b / 2); // 4, 2, 1
    answer++;
  }

  return answer;
}

// 나의 풀이

function solution(n, a, b) {
  var answer = 1;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  let player = [];

  if (b - a === 1) {
    answer = 1;
    return;
  }

  for (let i = 1; i < n + 1; i++) {
    player.push(i);
  }

  let division = function (n) {
    var arr = player;
    var len = arr.length;
    var cnt = Math.floor(len / n);
    var tmp = [];

    for (var i = 0; i <= cnt; i++) {
      tmp.push(arr.splice(0, n));
    }

    return tmp;
  };
  let r = division(2);
  // r.splice(r.length -1 ,1) // 선수들을 2명씩 나눈 배열
  // a와 b가 어디 들어있나?

  let round = [];

  for (let x = 0; x < r.length; x++) {
    // console.log(r[x])
    if (r[x].includes(a)) {
      // console.log('a 여깄다!', x)
      round.push(x);
    }
    if (r[x].includes(b)) {
      // console.log('b 여깄다!', x)
      round.push(x);
    }
  }

  answer = answer + (round[1] - round[0]);

  return answer;
}

// 배열 나누기 함수
division = function (n) {
  var arr = this;
  var len = arr.length;
  var cnt = Math.floor(len / n);
  var tmp = [];

  for (var i = 0; i <= cnt; i++) {
    tmp.push(arr.splice(0, n));
  }

  return tmp;
};
