function solution(number, k) {
    var b = []; // [1] >> [9] >> [9,2] >> [9,4]
    for (var i = 0; i < number.length; i++) {
      var c = number[i]; // c = 9 / c = 4

       // 2 > 0 , b.length(1) > 0, 1 < 9 //  9 < 2(건너뛰고 ) //  2 < 4
        // [9,4]가되고 k는 0이되어 while은 동작하지 않는다
        while (k > 0 && b.length > 0 && b[b.length - 1] < c) {
        // 조건 충족 // 
        b.pop(); //b는 지워지고  // 2는 지워지고
        k--; //k = 0
      }
      // 1이 들어간다 // 9가 들어간다 // 2가 들어간다 // 4가 들어간다
      b.push(c);
    }
    // b.splice(b.length - k, k);//??
    var answer = b.join('');
    return answer;
}