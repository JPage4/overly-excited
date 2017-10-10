// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/


function addExcitement (theWordArray) { //"theWordArray" is what we named the index
    let accumulatingSentence = "" //this variable starts it off with nothing
    let wordCounter = 1;
    
    
    for (let index = 0; index < theWordArray.length; index++) { // beginning for loop
        let phrase = theWordArray[index]; //runs each item in index
        accumulatingSentence = accumulatingSentence + " " + phrase ; //takes previous pass and adds next item. ex: 0...0,1...0,1,2 
       
        if(wordCounter % 3 === 0) {
            let excitement = wordCounter / 3;
            accumulatingSentence = accumulatingSentence + "!".repeat(excitement);

        }

        wordCounter++;
        console.log(accumulatingSentence)

    }
}
// Invoke the function and pass in the array
addExcitement(sentence);