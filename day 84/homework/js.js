function findMax(a, b, c) {
    return Math.max(a, b, c);
}
function isEven(number) {
    return number % 2 === 0;
}
function multiplyNumbers(start, end) {
    let result = 1;
    for (let i = start; i <= end; i++) {
        result *= i;
    }
    return result;
}