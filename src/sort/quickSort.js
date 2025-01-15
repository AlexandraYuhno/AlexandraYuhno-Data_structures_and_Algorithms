const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pointer = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pointer) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pointer, ...quickSort(right)];
};

export default quickSort;
