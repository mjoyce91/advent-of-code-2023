const input `<input here>`
const input2 = input.split('\n')
const input3 = input2.map(m => {
  const d = m.split('').map(n => +n).filter(o => o);
  const v1 = d[0];
  const v2 = d[d.length - 1];
  const vcombined = +`${v1}${v2}`;
  return vcombined;
});
const answer = input3.reduce((partialSum, a) => partialSum + a, 0);
