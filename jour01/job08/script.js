function myArraySort(arr, order = 'ASC') {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            const compare = (order === 'ASC') ? (arr[j] > arr[j + 1]) : (arr[j] < arr[j + 1]);
            if (compare) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const array = [3, 1, 2, 4, 5];

const sortedArrayASC = myArraySort([...array], 'ASC'); 
console.log(sortedArrayASC);

const sortedArrayDESC = myArraySort([...array], 'DESC'); 
console.log(sortedArrayDESC);
