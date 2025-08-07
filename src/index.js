module.exports = function reverse(n) {
  const str = `${Math.abs(n)}`;
  let answer = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    answer += str[i];
  }
  return +answer;
};
