const DATA = [
  ["오백삼십조칠천팔백구십만천오백삼십구", "삼조사천이만삼천구"],
  ["육십사억삼천십팔만칠천육백구", "사십삼"],
  ["구백육십조칠천억팔천백삼십이만칠천일", "사십삼조오천이백억육천구백십만일"],
  [
    "이천구백육십조천오백칠십만삼천구백구십",
    "삼천사백오십조일억이천만육백사십삼",
  ],
  ["사십오억삼천육십만오백구십", "칠십억천이백삼십오만칠천구십이"],
  ["천백십일", "구천오백구십구"],
  ["오억사천", "백십일"],
  ["만오천사백삼십", "십구만삼천오백"],
  ["일조", "삼"],
  ["일억", "만"],
];

//자릿수 별로 객체에 저장
 
const oneObj = {

  일: 1,
  이: 2,
  삼: 3,
  사: 4,
  오: 5,
  육: 6,
  칠: 7,
  팔: 8,
  구: 9,
};
const twoObj = {
 
  십: 10,
  백: 100,
  천: 1000,
};
const threeObj = {
  만: 10000,
  억: 100000000,
  조: 1000000000000,
  경: 10000000000000000,
};


const oneObjArr = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const twoObjArr = ["", "십", "백", "천"]; 
const threeObjArr = ["", "만", "억", "조", "경"]; 

//["오억사천", "백십일"]이 str이라 가정해볼때
function convertNum(str) { // string을 숫자로 변환해주는 함수
 
  var num = 1; // 5
  var sum = 0;
  var arr = [];

  for (let i = 0; i < str.length; i++) { // 오가 들어온다 // 억이 들어온다 // 사가 들어온다 // 천이 들어온다
    const tmp = str[i]; //오 tmp = 오 // tmp = 억  // tmp = 사 // tmp = 천

      if (tmp in oneObj) { // 오가 있나 검사 있다!
      num = oneObj[tmp]; // num = 5 // num = 4 // 
      }
      if (tmp in twoObj) { //십, 백, 천 자리 숫자인지 검사
      let unit = twoObj[tmp]; // 천이 들어온다
      sum += num === 0 ? unit : num * unit; //sum  = 0 + 4000
      num = 0;
      }
      if (tmp in threeObj) {
        //억
        // 만, 억, 조, 경 숫자인지 검사
        let unit = threeObj[tmp]; // 유닛은 100000000
        sum = num !== 0 ? (sum + num) * unit : num * unit; ////들어온 str 값을 정수로 바꿔준다
        //num은 현재 5 => 5 * 10000000;
        arr.push(sum);
        sum = 0; //큰 자릿숫자를 구하고 초기화
        num = 0;
      }
  }

  if (sum > 0 || num > 0) {
    arr.push(sum + num);
  }

  return arr.reduce((acc, cur) => acc + cur, 0).toString(); // 배열안의 모든 수를 더하고 str값으로 변환
}

// function convertStr(str) {
//   let pos = 0;
//   let result = "";

//   return str
//     .split("")
//     .reverse()
//     .reduce((acc, cur, idx) => {
//       const hangul = numberMapArr[cur];

//       if (idx > 0 && idx % 4 === 0) {
//         result += threeObjArr[idx / 4]
//           ? threeObjArr[idx / 4].concat(hangul)
//           : hangul;
//         pos = 0;
//       } else if (hangul !== "") {
//         result += twoObjArr[pos]
//           ? hangul !== "일"
//             ? twoObjArr[pos].concat(hangul)
//             : twoObjArr[pos]
//           : hangul;
//       }

//       pos++;

//       return result;
//     }, "");
// }

/**
 * str을 한글로 변환한다. (ex. "11710" --> 만천칠백십)
 * "일"의 경우 1자리 이후에는 표시하지 않는다.
 * "십","백","천"은
 * "만","억","조"는 4자리마다
 * @param {*} str 문자형 숫자 (ex. "110710")
 */
function convertStr(str) {
  let result = "";
  let prevUnit = "";

  for (let i = 0; i <= str.length - 1; i++) {
    const temp = {
      s: str[i], // 숫자를 한글로
      digits: str.length - 1 - i, // 숫자의 자리수 (ex. 1001의 경우 자리수는 {3}{2}{1}{0}가 된다.)
    };

    // 이전 { 십,백,천 }를 저장한다.
    temp.prev_unit = prevUnit;

    // [number]: 숫자를 구한다. (ex. 일,이,삼..구)
    temp.number = numberMapArr[parseInt(temp.s)];

    // [unit]: { 십,백,천 } 단위를 구한다.
    temp.unit = twoObjArr[temp.digits % 4];

    // [prevUnit]: 이전 { 십,백,천 }를 갱신한다.
    if (temp.number !== "") {
      prevUnit = temp.unit;
    }

    // [munit]: { 만,억,조 } 단위를 구한다.
    if (temp.digits >= 4 && temp.digits % 4 == 0) {
      temp.munit = threeObjArr[temp.digits / 4];
    }

    // { number } 가 "일"인 경우
    if (temp.number === "일") {
      if (temp.munit) {
        // { munit } 이 있을 경우
        if (temp.munit !== "만") {
          temp.result = `${temp.number}${temp.munit}`;
        } else {
          temp.result = `${temp.munit}`;
        }
      } else if (temp.unit) {
        // { unit } 이 있을 경우
        if (temp.unit === "십" || temp.unit === "백") {
          temp.result = `${temp.unit}`;
        } else {
          temp.result = `${temp.prev_unit !== "" ? temp.number : ""}${
            temp.unit
          }`;
        }
      }
    }

    // { number } 가 "일"이 아닌 경우
    if (temp.number !== "일") {
      if (temp.number && temp.unit) {
        temp.result = `${temp.number}${temp.unit}`;
      } else if ((temp.number || temp.prev_unit) && temp.munit) {
        // **십만, **백십만 등에 대한 처리
        temp.result = `${temp.number}${temp.munit}`;
      }
    }

    // 1자리의 경우 숫자만 표시
    if (temp.number !== "" && temp.digits === 0) {
      temp.result = `${temp.number}`;
    }

    if (temp.result) result += temp.result;

    // console.log(temp);
  }
  return result;
}

function add(str1, str2) {
  var temp = "";

  // 둘중의 더 긴 문자열을 str1으로 이동
  if (str1.length < str2.length) {
    temp = str1;
    str1 = str2;
    str2 = temp;
  }

  var left = 0;
  var right = 0;
  var digit = ""; // left+right 결과의 끝 1자리
  var carry = 0; // left+right 결과의 올림 수 (ex. 4+8=12, 2:digit, 1:carry)
  var sum = ""; // 이전 for문의 digits

  for (var i = 0; i < str1.length; i++) {
    // 문자열의 끝자리부터 비교를 시작
    left = parseInt(str1[str1.length - 1 - i]) || 0;
    right = parseInt(str2[str2.length - 1 - i]) || 0;

    temp = String(carry + left + right);
    digit = temp.charAt(temp.length - 1); // left+right 결과의 끝 1자리
    carry = parseInt(temp.substr(0, temp.length - 1)) || 0; // 올림

    // i가 맨 앞자리일 경우 temp(carry+left+right) + sum
    sum = i === str1.length - 1 ? temp.concat(sum) : digit.concat(sum);
  }

  return sum;
}

// console.log(HangulToNum('오백삼십만일'));
// console.log(HangulToNum('삼조사천이만삼천구'));

// function test() {
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     const [a, b, answer] = data[i];
//     const sum = add(HangulToNum(a), HangulToNum(b));
//     const hangul = NumToHangul(sum);

//     result.push({
//       hangul,
//       num: sum,
//       correct: hangul === answer,
//     });
//   }

//   console.log(result);
//   // console.log(result.filter((r) => r.correct === false));
// }

// test();





// function solution(){
//
 
// let DATA = [
//   ['오백삼십조칠천팔백구십만천오백삼십구', '삼조사천이만삼천구'],
//   ['육십사억삼천십팔만칠천육백구', '사십삼'],
//   ['구백육십조칠천억팔천백삼십이만칠천일', '사십삼조오천이백억육천구백십만일'],
//   ['이천구백육십조천오백칠십만삼천구백구십', '삼천사백오십조일억이천만육백사십삼'],
//   ['사십오억삼천육십만오백구십', '칠십억천이백삼십오만칠천구십이'],
//   ['천백십일', '구천오백구십구'],
//   ['오억사천', '백십일'],
//   ['만오천사백삼십', '십구만삼천오백'],
//   ['일조', '삼'],
//   ['일억', '만'],
// ]
    
// //     // console.log(DATA[9][0][DATA[9][0].length-1]) //단위 수 추출
// //     if(DATA[9][0][DATA[9][0].length-1] === '억'){
// //           Math.pow(10, 8);// 일억 10의 8승
// //     } else if { //앞의수도 구해서 곱해줘야한다   
// //     }
// //     console.log(Math.pow(10, 8))
// ////////////////////////////


//     // let word = DATA[7].join('').split('') //한글자씩 쪼개기
       
// //     for (let i = 0; i < word.length; i++){
        
// //             // word = word.replace()
// //         if(word[i] === '만'){
// //             console.log('만')
// //         }  
// //     }
    
    
    
//     // 반복문마다 단위 수를 배열에 나눠담기?

//     let test = ['a','b','c','d',]

//     let word = DATA[7]

//     let list1 = []
//     let list2 = []
    
//     for (let i = 0; i < word[0].length; i++){
//         // 단위별로 나눠서 배열에 넣어준다
//         if(word[0][i] === '조'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)
           
//         } 
//         if(word[0][i] === '억'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)
           
//         } 
//         if(word[0][i] === '천만'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)   
//         } 
//         if(word[0][i] === '백만'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)   
//         } 
//         if(word[0][i] === '십만'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)   
//         } 
//         if(word[0][i] === '만'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)
           
//         } 
//         if(word[0][i] === '천'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)
           
//         } 
//         if(word[0][i] === '백'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)
//         }
//         if(word[0][i] === '십'){  
//             list1.push(word[0].slice(0,i+1))
//             word[0] = word[0].slice(i+1, word[0].length)
//         } 
//         if(word[0].length === 1){
//              list1.push(word[0])
//         }
//     }

//     //두 번째 숫자 리스트
    
//     for (let j = 0; j < word[1].length; j++){
//          if(word[1][j] === '조'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)           
//         } 
//         if(word[1][j] === '억'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)           
//         } 
//         if(word[1][j] === '천만'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)   
//         } 
//         if(word[1][j] === '백만'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)   
//         } 
//         if(word[1][j] === '십만'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)   
//         } 
//         if(word[1][j] === '만'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)
//         } 
//         if(word[1][j] === '천'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)
           
//         } 
//         if(word[1][j] === '백'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)
//         }
//         if(word[1][j] === '십'){  
//             list2.push(word[1].slice(0,j+1))
//             word[1] = word[1].slice(j+1, word[1].length)
//         } 
//         if(word[1].length === 1){
//              list2.push(word[1])
//         }
//     }
//     console.log(list1)    
//     let Num1 = []    
//     for (let n = 0; n < list1.length; n++){
//         Num1.push(list1[n])
//     }   
//     let Num = []  
//       
//     // 숫자로 변환하는 작업
//    
// }