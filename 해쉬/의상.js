function solution(clothes) {
  // 의상을 입는 경우의 수를 구하되, 같은 의상의 종류는 중복해서 착용 금지

  let map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    const clothe = clothes[i][0];
    const clotheKind = clothes[i][1];

    if (map.has(clotheKind)) {
      map.get(clotheKind).push(clothe);
    } else {
      map.set(clotheKind, [clothe]);
    }
  }

  const values = [...map.values()]; // 경우의 수

  let answer = 1;
  for (let i = 0; i < values.length; i++) {
    answer *= values[i].length + 1; // 해당 종류의 의상을 입지 않는 경우를 고려하여 +1
  }

  return answer - 1; // 모든 의상을 입지 않는 경우를 뺌
}
// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
// [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3
