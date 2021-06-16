// 정답 코드
function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

//내 코드

function solution(numbers) {
  var answer = "";

  let i = 0;
  let numList = [];

  for (let i = 0; i < numbers.length; i++) {
    numList.push(String(numbers[i]).split(""));
  }

  let j = 0;
  let result = [];

  while (numList.length > 0) {
    let max = numList.reduce(function (previous, current) {
      return parseInt(previous[0]) > parseInt(current[0]) ? previous : current;
    });
    result.push(max);
    // 앞자리가 가장큰 배열을 result에 넣어준다
    let idx = numList.findIndex((n) => n.join("") === max.join(""));
    numList.splice(idx, 1);
    j++;
  }

  let t = result.join("").replace(/,/gi, "");

  // console.log(...t)

  let zCnt = 0;
  let tt = [];

  for (let x = 0; x < t.length; x++) {
    if (t[x] === "0") {
      zCnt++;
    } else {
      tt.push(t[x]);
    }
  }
  // console.log(zCnt)

  let last;
  while (zCnt !== 0) {
    console.log("??");
    last = tt.join("") + "0";
    zCnt -= 1;
  }

  // console.log(last)

  return last;
}
