const initArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count;

const binarySearch = (array, searchedItem) => {
  let start = 0;
  let end = array.length - 1;
  let middle;
  let resultPosition = null;

  while (start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (searchedItem === array[middle]) {
      resultPosition = middle;
      return resultPosition;
    }
    searchedItem > array[middle] ? (start = middle + 1) : (end = middle - 1);
  }
  return resultPosition;
};

console.log(binarySearch(initArray, 10));
console.log(count);
