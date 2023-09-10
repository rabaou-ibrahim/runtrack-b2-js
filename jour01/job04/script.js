function myArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let array = [1, 3, 2, 4];
console.log(myArraySum(array));
