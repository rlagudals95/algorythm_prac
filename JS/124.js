
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