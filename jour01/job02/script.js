function my_str_search(haystack, needle) {
    let nbOccurences = 0;

    // On récupère la longueur de "haystack"
    const length = haystack.length;

    // On incrémente le nombre d'occurrences à chaque fois que "needle" matche avec "i"
    for (let i = 0; i < length; i++) {
        if (needle === haystack[i]) {
            nbOccurences++;
        }
    }

    return nbOccurences;
}

console.log(my_str_search("espaaaace", "e"));
