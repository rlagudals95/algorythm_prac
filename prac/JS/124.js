
function change124(n) {
    var answer = "";
    var num = [4, 1, 2];
    var val, mod_val = 0;
    while (n > 0) { // 
        mod_val = n % 3;
        n = Math.floor(n / 3);
        if (mod_val == 0) n -= 1; // 3으로 나누고 소숫점을 버렸을때 1 이나 2
        answer = num[mod_val] + answer; //4가 들어오면 1+1(mod_val이 0이 되서 1더하고 끝남)
    }
    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124(5));



function solution(n) {
     n = 5 
    var answer = "";
    var num = [4, 1, 2];
    var val, mod_val = 0;
    while (n > 0) { // 4가 들어왔다 / 5in
        mod_val = n % 3; // 나머지 1 / 나머지 2
        // console.log(mod_val)
        n = Math.floor(n / 3); // 몫도 1 / 몫1
        if (mod_val == 0) n -= 1;  // 나머지가 0이 아님 /
        answer = num[mod_val] + answer; // 1 + 1 / 
    }
    
    // console.log(1%3)
    console.log(1/3)
    return answer;
}
// 5 넣었을 때
// 나머지 2 n
// 2+ "" >> 2
// mod_val 은 2 % 3 => 0
// n = 2   2/3 => 0
// 4 + 2???????


// mod_val => 2
// n => 1
// '2' + '0' => 2

////
//  mod_val = 1 % 3 => 1
// n => 0
// 1 + 2 => 12 맞구나..?