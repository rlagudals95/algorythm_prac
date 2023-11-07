function solution(numbers) {
  var answer = 0;

  var n = numbers.split(""); // n을 배열로 만든다 // 1,7
  var nums = new Set(); // 중복된 값을 허용하지 않는다

  combi(n, "");

  //a는 [1,7]
  //처음엔 s의 길이는 ''이니까 0

  function combi(a, s) {
    // 배열과 빈값을 넣는다?

    //처음엔 0이니까 조건충족 x
    //([7], ''+ 1)이 들어와 아래 반복문 조건 충족 그 아래도 충족
    if (s.length > 0) {
      //has 는 set객체에 쓸 수 있다 객체안에 값이 있나 없나 판단
      if (nums.has(Number(s)) === false) {
        //1이 없다면?
        nums.add(Number(s)); // 넣어준다
        // console.log(Number(s))
        if (chkPrime(Number(s))) {
          // 넣어준수가 소수냐 판단? 소수면 +1
          answer++;
        }
      }
    }
    if (a.length > 0) {
      //a는 [1,7]로 처음엔 여기서 시작

      for (var i = 0; i < a.length; i++) {
        var t = a.slice(0); //이건 배열 전체를 가르킨다 t! 두번째엔['7']이 들어온다
        t.splice(i, 1); // t에서 1개씩 지워준다 // 지워주니 []이된다
        // console.log('t',t)
        console.log(t, s, a[i]);

        combi(t, s + a[i]); //처음엔 1이 지워지고 ([7], ''+ 1), ([], '1'+'7')
      }
    }
  }

  function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
