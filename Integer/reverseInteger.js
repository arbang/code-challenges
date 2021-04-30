var reverse = function(x) {
    const number = Math.abs(x).toString().split('').reverse().join('');

    if (number > Math.pow(2, 31) - 1) {
        return 0
    }

    return x < 0 ? -number : number;
};

/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit 
 * integer range [-231, 231 - 1], then return 0.
 */
const clamp = [2 ** 31 * -1, 2 ** 31 - 1]

var reversed = function(x) {
    const invert = Math.abs(x).toString().split('').reverse().join('')
    const polar = x < 0 ? -1 : 1;
    const t = Number(invert) * polar
    
    if (t < clamp[0] || t > clamp[1]) return 0
    
    return t
};