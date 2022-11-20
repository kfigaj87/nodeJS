export function generateRandomArray(count, max) {
  let rands = [];

  while (rands.length < count) {
    let r = Math.floor(Math.random() * max);
    if (rands.indexOf(r) === -1) {
      rands.push(r);
    }
  }
  return rands;
}
