function solution(record) {
  var answer = [];
  let word = record.map((item, index) => {
    // 모든 과정들을 액션, 아이디, 닉네임을 합쳐서 객체리스트로 만든다
    let list = [
      // { idx : index },
      // { action : item.split(' ')[0]},
      { uid: item.split(" ")[1] },
      { nickname: item.split(" ")[2] },
    ];
    return list;
  });

  let reverse = word.reverse();
  let uids = [];
  //uid 실제 유저의 수를 구하자
  for (let i = 0; i < reverse.length; i++) {
    // console.log(reverse[i][0].uid)
    uids.push(reverse[i][0].uid);
  }

  const set = new Set(uids);

  const setUid = [...set];

  // console.log(setUid)

  let cnt = 0;
  let i = 0;
  let j = 0;

  // console.log('여기서 찾아',setUid)
  // console.log(reverse[i][0].uid)

  let origin = [];

  while (cnt < setUid.length) {
    //고유 id와 객체들을 비교해준다
    //교유 id와 같은 id를 가진 객체가 있다?
    //일단 j++ 그리고 cnt도 ++ 그리고 i는 초기화
    //그리고 그부분만 따로 모으자
    //setUid 만큼 찾으면 loop종료
    if (setUid[j] === reverse[i][0].uid) {
      origin.push(reverse[i]);
      j++;
      i = 0;
      cnt++;
    }
    i++;
  }

  // console.log(origin)
  // 여기 까진 실제 유저들을 구하는 과정

  // console.log(word)

  let result = new Array(...record); // 새로운 배열 만듦

  for (let c = 0, d = 0; c < record.length; c++) {
    console.log(result[c].split(" ")[1]); // uid만 뽑은것 // uid가 같으면? 닉네임도 바꿔줘라

    if (result[c].split(" ")[1] === origin[d][0].uid) {
      console.log("?");
      result[c].replace(result[c].split(" ")[2], origin[d][1].nickname);
    }
  }

  // console.log(result)
  //     console.log('오지린',origin[0][0].uid)

  return answer;
}
