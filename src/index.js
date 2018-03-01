module.exports = function getZerosCount(number) {
var zeros = 0;
for (i = 5; (number/i) >= 1; i = i * 5) {
  zeros = zeros + Math.floor(number/i); //The number of zeros in a factorial = the number of 5's in the multiplication
};
return zeros;
}
