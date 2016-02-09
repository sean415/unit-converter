// Performs bankers rounding when computing payment fees
// source: http://stackoverflow.com/questions/3108986/gaussian-bankers-rounding-in-javascript
export default function evenRound(num, decimalPlaces) {
  var d = decimalPlaces || 0,
      m = Math.pow(10, d),
      n = +(d ? num * m : num).toFixed(8), // Avoid rounding errors
      i = Math.floor(n), f = n - i,
      e = 1e-8,
      r = (f > 0.5 - e && f < 0.5 + e) ?
          ((i % 2 === 0) ? i : i + 1) : Math.round(n);
  return d ? r / m : r;
}
