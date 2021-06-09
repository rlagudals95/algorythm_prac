function solution(land) {
    var answer = 0;

    return Math.max(...land.reduce((a, c) => { //...land 를 reduce로 돌린다 //
        //spead문법으로 land가 하나씩 들어가는 것 같다
        return [

            // 경우의 수 들을 다 구해주고 그중 가장 큰 것을 리턴 해준다
            c[0] + Math.max(a[1], a[2], a[3]),  //배열안의 최댓값을 0에 더해준다
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}

// reduce 함수설명

const array = [3, -1, 10, 5, 0]

const sum = array.reduce((acc, cur) => {
    console.log(acc) // 3, 2, 12 ,17 초기 값을 포함한 계산 과정이 출력
    console.log(cur) // -1, 10, 5, 0 // 초기 갑을 제외한 뒤의 숫자들이 출력
    return acc + cur
})
// 배열 안의 모든 수를 더한 값을 출력한다

const sum2 = array.reduce((acc, cur,) => {
    return acc + cur
})

//////////// 내 풀이

function solution(land) {
  var answer = 0;

  let maxIdx = [];

  for (let i = 0; i < land.length; i++) {
    let maxNum = Math.max.apply(null, land[i]); // 가장 큰 수를 찾는다
    let idx = land[i].findIndex((item) => item === maxNum);
    maxIdx.push(idx);
  }

  // console.log(maxIdx)
  //.. 두번째 큰수의..흠..

  for (let j = 0; j < maxIdx.length; j++) {
    if (maxIdx[j] === maxIdx[j + 1]) {
      land[j + 1].splice(maxIdx[j + 1], 1, 0);
    }
  } // idx가 겹치면 그부분을 없애주고 0으로 만들어준다!

  let resultNums = [];

  for (let x = 0; x < land.length; x++) {
    let resultMax = Math.max.apply(null, land[x]);
    resultNums.push(resultMax);
  }

  let result = resultNums.reduce((acc, cur) => {
    // 최종적으로 idx가 겹쳐지 않은 큰 수들의 합을 구한다
    return acc + cur;
  });

  return result;
}