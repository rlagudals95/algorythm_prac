function solution(progresses, speeds) {
let answer = [0];
    
    
  //100에서 진행수를 빼고 스피드로 나눠줘 잔여일을 계산해준다
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0]; 

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
