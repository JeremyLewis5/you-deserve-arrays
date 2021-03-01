/******************
 * YOUR CODE HERE *
 ******************/
// function getFirstItemFrom(arr) {
// const arr1 = [1, 2, 3, 4, 5];
// const firstChar = arr[0];
// console.log(firstChar);
// }

function getFirstItemFrom(arr) {
  return(arr[0])
}

function getLastItemFrom(arr) {
  return arr[arr.length - 1];
}

function getIndex3(arr) {
  return arr[3] || arr[arr.length - 1];
}

//Come back and get false test going
function isLongList(arr) {
  const boo1 = arr >= 10 === true;
  const boo2 = arr < 10 === false;
  return boo1 || boo2;
}

function firstItemIsNumber(arr) {
  const arr1 = arr[0] === number;
  const arr2 = arr[0] === string;
  const true1 = arr1 === true
  const false2 = arr2 === false
  return true1 || true2;
}

function secondCharOfThirdString(arr) {
  return arr[3]
}








 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
