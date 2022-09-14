function fibsRec(num) {
  if (num <= 0) return 'Must be greater than 0';
  if (num <= 1) return [0];
  if (num <= 2) return [0, 1];

  return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
}

console.log(fibsRec(8))
