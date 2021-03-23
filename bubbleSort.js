const arr = [1, 345, 5413, 2, 0, 1254, 561, 9, 19, 0, 18, 3, 61, 627, 73567, 3, 5];

const bubbleSort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; ++i) {
    let isSwap = false;

    for (let j = 0, endJ = endI - i; j < endJ; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
};

console.log(bubbleSort(arr));
