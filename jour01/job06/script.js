function mySquareArray(inputArray) {
    const squaredArray = inputArray.map(number => number * number);
    return squaredArray;
}

const inputArray = [2, 4, 6, 8, 10];
const squaredResult = mySquareArray(inputArray);
console.log(squaredResult);
