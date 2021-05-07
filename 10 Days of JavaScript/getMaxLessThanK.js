function getMaxLessThanK(n, k) {
  let belowK = Number.MIN_SAFE_INTEGER;
  let bitwise = 0;
  
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      bitwise = i & j;
      if (bitwise >= belowK && bitwise < k) {
        belowK = bitwise;
      }
    }
  }

  return belowK;
}
