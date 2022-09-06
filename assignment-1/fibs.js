function fibs(num) {
  const fibsArr = [];
  if (num == 0) fibsArr.push(0);

  for (let i = 0; i < num; i++) {
    if (i == 0) {
      fibsArr.push(0)
    } else if (i == 1) {
      fibsArr.push(1)
    } else {
      fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2])
    }
  }
  return fibsArr
}

console.log(fibs(8))
