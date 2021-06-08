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