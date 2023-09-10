function myIsInString(needle, haystack) {
   
    if (needle.length > haystack.length) {
        return false;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
       
        let found = true;
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                found = false;
                break;
            }
        }
        
        if (found) {
            return true;
        }
    }

    return false;
}

var needle = "llo";
var haystack = "Hello World";
var isInString = myIsInString(needle, haystack);
console.log(isInString);
