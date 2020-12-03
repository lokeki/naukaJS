const randomNumber = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateIncTable = lng => {
  let array = [];
  for (let i = 0; i < lng; i++) {
    array.push(i);
  }
  console.log(array);
  return array;
};
const generateRandomTable = (lng, min, max) => {
  let array = [];
  for (let i = 0; i < lng; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  console.log(array);
  return array;
};
const generateTableFromText = str => {
  console.log(typeof str == "string" ? str.split("") : []);
  return typeof str == "string" ? str.split("") : [];
};
const getMaxFromTable = arr => {
  console.log(arr);
  return arr.sort()[arr.length - 1];
};
const getMinFromTable = arr => {
  return arr.sort()[0];
};
const deleteFn = (arr, index) => {
  const arr1 = arr.slice(0, index);
  const arr2 = arr.slice(index + 1, arr.length);
  return arr1.concat(arr2);
};

const tableGenerator = {
  randomNumber,
  generateIncTable,
  generateRandomTable,
  generateTableFromText,
  getMaxFromTable,
  getMinFromTable,
  delete: deleteFn
};
tableGenerator.randomNumber(3, 10);
tableGenerator.generateIncTable(5);
tableGenerator.generateRandomTable(1, 2, 10);
generateTableFromText(4);
console.log(getMaxFromTable([1, 2, 5, 8, 3, 5, 3]));
console.log(getMinFromTable([1, 2, 5, 8, 3, 5, 3]));
console.log(deleteFn([1, 2, 5, 8, 3, 5, 3], 2));
