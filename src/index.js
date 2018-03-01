module.exports = function getZerosCount(number) {
var zeros = 0;
for (i = 5; (number/i) >= 1; i = i * 5) {
  zeros = zeros + Math.floor(number/i);
};
return zeros;
}
