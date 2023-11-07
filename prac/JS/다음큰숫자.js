function solution(n) {
  var answer = 0;

  const start = n;
  const startTwo = [];

  for (let x = 0; x < start.toString(2).length; x++) {
    startTwo.push(start.toString(2)[x]);
  }
  const startSum = startTwo.reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur);
  });

  // console.log('시작',startSum) // 시작 숫자의 1의 갯수

  let cnt = 0;
  let i = 0;
  let a = 0;

  // sum이 같은 것을 찾아라...

  while (cnt < 1) {
    let two_list = [];

    for (let i = 0; i < (n + 1).toString(2).length; i++) {
      //이진 법으로 바꿔서 two_list 안에 넣어라!
      two_list.push((n + 1).toString(2)[i]);
    }
    let sum = two_list.reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur);
    });
    if (startSum === sum) {
      //처음수와 1의 갯수가 같은 수가 있다?
      answer = n + 1;
      cnt++;
    }
    a++;
    n++;
  }

  return answer;
}
