function getCommonElements(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));

const users = [
  'Artem',
  'Anna',
  'Larisa',
  'Maksim',
  'Svitlana',
  'David',
  'Roman',
  'Olga',
];
const men = ['Artem', 'Maksim', 'Roman', 'David'];

function getWomen(users, men) {
  const women = [];
  for (const user of users) {
    if (!men.includes(user)) {
      women.push(user);
    }
  }

  return women;
}

console.log(getWomen(users, men));

const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

console.log(numbers);

for (let i = 1; i < numbers.length; i++) {
  const currentEl = numbers[i];
  const prevEl = numbers[i - 1];

  if (currentEl <= prevEl) {
    numbers[i] = prevEl + 1;
  }
}

console.log(numbers);

function createStr(arr) {
  const arrayArr = Array.from(arr);
  // console.log('one');
  // console.log('two');

  switch (arrayArr.length) {
    case 0:
      return `No one likes this`;
    case 1:
      return `${arrayArr[0]} likes this`;
    case 2:
      return `${arrayArr[0]} and ${arrayArr[1]} like this`;
    case 3:
      return `${arrayArr[0]}, ${arrayArr[1]} and ${arrayArr[2]} like this`;
    default:
      return `${arrayArr[0]}, ${arrayArr[1]} and 2 others like this`;
  }

  // for (let i = 0; i < arrayArr.length; i++) {
  //   if (arrayArr.length === 0) {
  //   } else if (arrayArr.length === 1) {
  //     return `${arrayArr[0]} like this`;
  //   } else if (arrayArr.length === 2) {
  //     return `${arrayArr[0]} and ${arrayArr[1]} like this`;
  //   } else if (arrayArr.length === 3) {
  //     return `${arrayArr[0]}, ${arrayArr[1]} and ${arrayArr[2]} like this`;
  //   } else {
  //     return `${arrayArr[0]}, ${arrayArr[1]} and 2 others like this`;
  //   }
  // }
  // return arrayArr.length;
}

console.log(createStr([]));
console.log(createStr(['Peter']));
console.log(createStr(['Jacob', 'Alex']));
console.log(createStr(['Max', 'John', 'Mark']));
console.log(createStr(['Mark', 'Alex', 'Jacob', 'Max']));

const nuMbers = [25, 12, 67, 40, 18];

function checkValue(nuMbers, userVal) {
  let message = 'Success';
  for (let number of nuMbers) {
    if (userVal > number) {
      message = 'Fail';
      break;
    }
  }

  return message;
}

console.log(checkValue(nuMbers, 10));
console.log(checkValue(nuMbers, 13));

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCombination(arr, count) {
  const result = [];

  for (let i = 0; i < arr.length; i += count) {
    const combination = arr.slice(i, i + count);
    if (combination.length === count) {
      result.push(combination);
    }
  }

  return result;
}

console.log(getCombination(data, 2));
console.log(getCombination(data, 3));
