function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// 예제 사용
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(unsortedArray);

console.log("정렬 전:", unsortedArray);
console.log("정렬 후:", sortedArray);
