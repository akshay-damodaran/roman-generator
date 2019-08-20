const convertor = n => {
  if (n <= 0 || n >= 4000) {
    return null;
  }
  const literals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let window = 0;
  let romanLetter = '';
  while(n) {
    let digit = n%10;
    if (digit !== 0) {
      let currentLetter = '';
      let times = digit % 5;
      if (times === 0) {
        currentLetter = literals[window + 1];
      } else if (times <= 3) {
        for (let i = 0; i < times; i++)
          currentLetter += literals[window];
        if (digit > 5) {
          currentLetter = literals[window + 1] + currentLetter;
        }
      } else {
        currentLetter = literals[window] + (digit > 5 ? literals[window + 2] : literals[window + 1]);
      }
      romanLetter = currentLetter + romanLetter;
    }
    window += 2;
    n = Math.floor(n/10);
  }
  return romanLetter;
}

export default convertor;
