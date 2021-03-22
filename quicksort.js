const arr = [1, 423, 425, 6, 1234, 2, 0, 1, 20, 2542, 7, 90, 163, 91, 4, 6731, 6666666, 1234, 101, 0, 6, 2, 8];

const quicksort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(1 + Math.random() * (arr.length - 1))];

  const left = arr.filter(item => item < pivot);
  const right = arr.filter(item => item > pivot);

  return [...quicksort(left), pivot, ...quicksort(right)];
};

console.log(quicksort(arr));
