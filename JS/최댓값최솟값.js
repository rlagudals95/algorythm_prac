// 최댓값 loop

var myArray = [-10, -1, 0, 1, 10];
for (var i = 0; i < myArray.length; i++) {
  // maxNum 값이 없는 경우 현재 배열값으로 지정
  if (!maxNum) {
    maxNum = myArray[i];
  }

  // maxNum의 값과 현재 값을 비교해서 maxNum값을 가장 큰 값으로 유지
  if (maxNum < myArray[i]) {
    maxNum = myArray[i];
  }
}

console.log(maxNum);

// 최솟값 loop

var myArray = [-10, -1, 0, 1, 10];
for (var i = 0; i < myArray.length; i++) {
  // minNum 값이 없는 경우 현재 배열값으로 지정
  if (!minNum) {
    minNum = myArray[i];
  }

  // minNum의 값과 현재 값을 비교해서 minNum값을 가장 작은 값으로 유지
  if (minNum > myArray[i]) {
    minNum = myArray[i];
  }
}

console.log(minNum);


//최댓값 한번에 구하기

var myArray = [-3, -2, 1, 3, 5];
var max = Math.max.apply(null, myArray);

//최솟값 한번에 구하기

var myArray = [-3, -2, 1, 3, 5];
var min = Math.min.apply(null, myArray);

// 프로그래머스 문제 풀이

function solution(s) {
  var answer = "";

  let list = s.split(" "); //배열로 변환
  let int_list = [];

  for (let i = 0; i < list.length; i++) {
    int_list.push(parseInt(list[i])); //비교해주기 위해 정수로 변환해서 리스트에 담아준다
  }

  let max_min = [];

  for (let i = 0; i < 1; i++) {
    //최댓값 최솟값 한번만 넣어주기
    max_min.push(Math.min.apply(null, int_list));
    max_min.push(Math.max.apply(null, int_list));
  }

  console.log(max_min.toString().replace(",", " ")); //정답 형태에 맞게 형식 변환해주자 arr => str

  return max_min.toString().replace(",", " ");
}