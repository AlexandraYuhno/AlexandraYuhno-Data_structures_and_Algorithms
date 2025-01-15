const mergeSort = (arr) => {
  if (arr.length <= 2) {
    if (arr[0] > arr[1]) return arr.reverse();
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let lIndex = 0;
  let rIndex = 0;

  while (lIndex < left.length && rIndex < right.length) {
    if (left[lIndex] < right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      rIndex++;
    }
  }

  return [...result, ...left.slice(lIndex), ...right.slice(rIndex)];
};

export default mergeSort;
