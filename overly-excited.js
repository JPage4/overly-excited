// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
addExcitement = (theWordArray, puncuation) => {
    for (var index = 0; index <= theWordArray.length; index++) {
        if (index % 3 == 0 && index != 0){
       theWordArray[index -1] += puncuation.repeat(index/3);
         
        }
        console.log(theWordArray.slice(0, index).join(" "));
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");
