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
 
  var n = 1; // 5
  var s = 0;
  var list = [];

  for (let i = 0; i < str.length; i++) { // 오가 들어온다 // 억이 들어온다 // 사가 들어온다 // 천이 들어온다
    const t = str[i]; //오 tmp = 오 // tmp = 억  // tmp = 사 // tmp = 천

      if (t in oneObj) { // 오가 있나 검사 있다!
      n = oneObj[t]; // n = 5 // n = 4 // 
      }
      if (t in twoObj) { //십, 백, 천 자리 숫자인지 검사
      let unit = twoObj[t]; // 천이 들어온다
      s += n === 0 ? unit : n * unit; //s  = 0 + 4000
      n = 0;
      }
      if (t in threeObj) {
        //억
        // 만, 억, 조, 경 숫자인지 검사
        let unit = threeObj[t]; // 유닛은 100000000
        s = n !== 0 ? (s + n) * unit : n * unit; ////들어온 str 값을 정수로 바꿔준다
        //n은 현재 5 => 5 * 10000000;
        list.push(s);
        s = 0; //큰 자릿숫자를 구하고 초기화
        n = 0;
      }
  }

  if (s > 0 || n > 0) {
    list.push(s + n);
  }

  return list.reduce((acc, cur) => acc + cur, 0).toString(); // 배열안의 모든 수를 더하고 str값으로 변환
}

//문자형숫자를 숫자로 변형하고 둘을 더한다 그리고 다시 한글로 변환해야 한다


// 다시 한글로 변환하는 함수 완성하지 못했습니다.
function convertStr(num) {
  let result = "";
  let preNum = "";

  for (let i = 0; i <= num.length - 1; i++) {
    const tmp = {
      s: num[i], // 숫자를 한글로 // 5
      idxs: num.length - 1 - i, // 숫자의 자릿수를 구해준다
    };

    // 이전 값을 먼저 객체 저장한다.
    tmp.prev_num = preNum;

    // 객체에 십,백,천 num  단위를 추가한다.
    tmp.point = twoObjArr[tmp.idxs % 4];

    // 객체에 숫자 num값을 추가한다
    tmp.number = oneObjArr[parseInt(tmp.s)]; // 5

    // 십, 백,천 단위를 구해준다
    if (tmp.number !== "") {
      preNum = tmp.point;
    }

    //  조, 억 , 만 단위수를 구해준다.
    if (tmp.idxs >= 4 && tmp.idxs % 4 == 0) {
      tmp.multi = threeObjArr[tmp.idxs / 4];
    }

    // { number } 가 "일"인 경우
    if (tmp.number === "일") {
      if (tmp.multi) {
        // multi  가 있는 경우
        if (tmp.multi !== "만") {
          tmp.result = `${tmp.number}${tmp.multi}`;
        } else {
          tmp.result = `${tmp.multi}`;
        }
      } else if (tmp.point) {
        if (tmp.point === "백") {
          tmp.result = `${tmp.point}`;
        } else {
          tmp.result = `${tmp.prev_num !== "" ? tmp.number : ""}${tmp.point}`;
        }
      }
    } 

    // number 가 "일"이 아닐때
    if (tmp.number !== "일") {
      if (tmp.number && emp.point) {
        tmp.result = `${tmp.number}${tmp.point}`;
      } else if ((tmp.number || tmp.prev_num) && tmp.multi) {
        // 십만 백만 일때 처리
        tmp.result = `${tmp.number}${tmp.multi}`;
      }
    }

    if (tmp.result) result += tmp.result;
  }
  return result;
}

function solution(a, b) {
    
    let answer = convertNum(a) + convertNum(b);
    let final = convertStr(answer);

    return final
}


//아래는 작성하다가 멈춘코드입니다 다 풀지 못했습니다

//////////////////////////////////////////////////
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