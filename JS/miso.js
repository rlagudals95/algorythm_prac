const data = [
  [
    "오백삼십조칠천팔백구십만천오백삼십구",
    "삼조사천이만삼천구",
    "오백삼십삼조일억천팔백구십이만사천오백사십팔",
  ],
  [
    "육십사억삼천십팔만칠천육백구",
    "사십삼",
    "육십사억삼천십팔만칠천육백오십이",
  ],
  [
    "구백육십조칠천억팔천백삼십이만칠천일",
    "사십삼조오천이백억육천구백십만일",
    "천사조이천이백일억오천사십이만칠천이",
  ],
  [
    "이천구백육십조천오백칠십만삼천구백구십",
    "삼천사백오십조일억이천만육백사십삼",
    "육천사백십조일억삼천오백칠십만사천육백삼십삼",
  ],
  [
    "사십오억삼천육십만오백구십",
    "칠십억천이백삼십오만칠천구십이",
    "백십오억사천이백구십오만칠천육백팔십이",
  ],
  ["천백십일", "구천오백구십구", "만칠백십"],
  ["오억사천", "백십일", "오억사천백십일"],
  ["만오천사백삼십", "십구만삼천오백", "이십만팔천구백삼십"],
  ["일조", "삼", "일조삼"],
  ["일억", "만", "일억만"],
];

const numberMap = {
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

const unitMap = {
  십: 10,
  백: 100,
  천: 1000,
};

const multiplyUnitMap = {
  만: 10000,
  억: 100000000,
  조: 1000000000000,
  경: 10000000000000000,
};

const numberMapArr = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const unitMapArr = ["", "십", "백", "천"];
const multiplyUnitMapArr = ["", "만", "억", "조", "경"];

function HangulToNum(str) {
  var num = 1;
  var sum = 0;
  var arr = [];

  for (let i = 0; i < str.length; i++) {
    const tmp = str[i];

    if (tmp in numberMap) {
      num = numberMap[tmp];
    } else if (tmp in unitMap) {
      let unit = unitMap[tmp];
      sum += num !== 0 ? num * unit : unit;
      num = 0;
    } else if (tmp in multiplyUnitMap) {
      let unit = multiplyUnitMap[tmp];
      sum = num !== 0 ? (sum + num) * unit : sum * unit;
      arr.push(sum);
      sum = 0;
      num = 0;
    }
  }

  if (sum > 0 || num > 0) {
    arr.push(sum + num);
  }

  return arr.reduce((acc, cur) => acc + cur, 0).toString();
}

function NumToHangulOld(str) {
  let pos = 0;
  let result = "";

  return str
    .split("")
    .reverse()
    .reduce((acc, cur, idx) => {
      const hangul = numberMapArr[cur];

      if (idx > 0 && idx % 4 === 0) {
        result += multiplyUnitMapArr[idx / 4]
          ? multiplyUnitMapArr[idx / 4].concat(hangul)
          : hangul;
        pos = 0;
      } else if (hangul !== "") {
        result += unitMapArr[pos]
          ? hangul !== "일"
            ? unitMapArr[pos].concat(hangul)
            : unitMapArr[pos]
          : hangul;
      }

      pos++;

      return result;
    }, "");
}

/**
 * str을 한글로 변환한다. (ex. "11710" --> 만천칠백십)
 * "일"의 경우 1자리 이후에는 표시하지 않는다.
 * "십","백","천"은
 * "만","억","조"는 4자리마다
 * @param {*} str 문자형 숫자 (ex. "110710")
 */
function NumToHangul(str) {
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
    temp.unit = unitMapArr[temp.digits % 4];

    // [prevUnit]: 이전 { 십,백,천 }를 갱신한다.
    if (temp.number !== "") {
      prevUnit = temp.unit;
    }

    // [munit]: { 만,억,조 } 단위를 구한다.
    if (temp.digits >= 4 && temp.digits % 4 == 0) {
      temp.munit = multiplyUnitMapArr[temp.digits / 4];
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

function test() {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const [a, b, answer] = data[i];
    const sum = add(HangulToNum(a), HangulToNum(b));
    const hangul = NumToHangul(sum);

    result.push({
      hangul,
      num: sum,
      correct: hangul === answer,
    });
  }

  console.log(result);
  // console.log(result.filter((r) => r.correct === false));
}

test();
