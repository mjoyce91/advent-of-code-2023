// part 1
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

// part 2
const input `<input here>`
const input2 = input.split('\n')
const input3 = input2.map((m, i) => {
    String.prototype.indexOfEnd = function(string) {
        var io = this.indexOf(string);
        return io == -1 ? -1 : io + string.length;
    }
    const vals = ['1','2','3','4','5','6','7','8','9','one','two','three','four','five','six','seven','eight','nine']
    const valMap = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 }
    const low = { val: undefined, index: undefined }
    const high = { val: undefined, val: undefined }
    let inds = vals.forEach(n => {
        const index = m.indexOf(n);
        const indexEnd = m.lastIndexOf(n)

        if (index > -1) {
            if (low.index === undefined || index < low.index) {
                low.val = n;
                low.index = index;
            }
            if (high.index === undefined || indexEnd > high.index) {
                high.val = n;
                high.index = indexEnd;
            }
        }
    });
    const low2 = +low.val || valMap[low.val]
    const high2 = +high.val || valMap[high.val]
    return +`${low2}${high2}`
});
const answer = input3.reduce((partialSum, a) => partialSum + a, 0);
