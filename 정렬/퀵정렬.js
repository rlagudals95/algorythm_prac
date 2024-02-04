function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];
  const pivot = arr[parseInt(arr.length / 2)];

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
const unsortedArray = [4, 2, 3, 5, 6, 7, 1];
const sortedArray = quickSort(unsortedArray);

console.log("정렬 전:", unsortedArray);
console.log("정렬 후:", sortedArray);
