module.exports = function reverse(n) {
    let result = "";
    let absStr = Math.abs(n).toString();

    let i = 0;
    while (i < absStr.length) {
        result = absStr[i] + result;
        i++;
    }
    return Number(result);
};
