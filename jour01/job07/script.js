function myClosestToZero(numbers) {
    let closest = numbers[0];
    let minDistance = numbers[0] < 0 ? -numbers[0] : numbers[0];

    numbers.forEach(function(number) {
        let distance = number < 0 ? -number : number;

        if (distance < minDistance) {
            minDistance = distance;
            closest = number;
        } else if (distance === minDistance) {
            if (number < 0) {
                closest = number;
            }
        }
    });

    return closest;
}

const numbers = [49, -32, 25, -48, 73];
const closestToZero = myClosestToZero(numbers);
console.log("Le nombre le plus proche de zéro: " + closestToZero);
