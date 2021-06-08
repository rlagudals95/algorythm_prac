function solution(name) {
    var answer = 0;

    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const split = [];


    for (let i = 0; i < name.length; i++) { // 알파벳들을 alpha의 idx로 바꿔줌
        let idx = alpha.findIndex((n) => name[i] == n)
        if (idx > 13) { //idx가 13이 넘어가면 조이스틱을 반대로 움직였을때의 값으로 계산
            idx = idx - ((idx - 13) * 2)

        }
        split.push(idx)
    }

    let nonMove = 0;
    // console.log(split)
    const sum = split.reduce((acc, cur) => {
        if (acc === 0 || cur === 0) { // idx가 0인 친구들은 A라는 뜻이므로 마우스 직임에서 빼준다
            nonMove++
        }

        return acc + cur
    });

    // 전체 idx값 + 배열안의 갯수(마우스 움직임) - 실제 움직이지 않은 수 
    const result = sum + split.length - nonMove - 1
    return result

}