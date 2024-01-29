// 회장을 뽑는데 a,b,c,d,e 후보가 등록
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호가 쓰여져 있음
// 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지를 출력하는 프로그램을 작성하시오

function solution(votes) {
  let answer = ["", 0];

  const voteMap = new Map();
  for (const v of votes) {
    if (voteMap.has(v)) {
      voteMap.set(v, voteMap.get(v) + 1);
    } else {
      voteMap.set(v, 1);
    }
  }

  const result = [...voteMap.entries()].forEach(([name, count]) => {
    if (answer[1] < count) {
      answer = [name, count];
    }
  });

  return answer[0];
}

console.log(solution("BACBACCACCBDEDE"));
