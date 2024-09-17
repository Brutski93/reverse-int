
module.exports = function reverse (n) {
  let str = n;
  if (n < 0) str = -str;
  str = `${str}`;
  let answer = '';
  for (let i = (str.length - 1); i >= 0; i--) {
    answer += str[i];
  }
  return +answer;
}

const reverse = (n) => {
  let str = n;
  if (n < 0) str = -str;
  str = `${str}`;
  let answer = '';
  for (let i = (str.length - 1); i >= 0; i--) {
    answer += str[i];
  }
  return +answer;
}

/* tests */
let j = -123;
console.log(j, ':', reverse(j));
/* for
for (let j = 10; j < 123; j++) {
  console.log(j, ':', reverse(j));
}
*/
