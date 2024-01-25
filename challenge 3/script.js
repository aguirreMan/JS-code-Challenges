//Write a function that takes an array of words and smashes them together into a sentence 
//and returns the sentence. 
//You can ignore any need to sanitize words or add punctuation, 
//but you should add spaces between each word. Be careful, 
//there shouldn't be a space at the beginning or the end of the sentence!


const sentenceArray = ['hello', 'world', 'this', 'is', 'great']
const divElement = document.querySelector('.inserted-text')

function breakSentenceArray(){
    const stringSentence = sentenceArray.join(' ')
    //console.log(typeof stringSentence)
    divElement.append(stringSentence.toUpperCase())
}

breakSentenceArray()


// return every friday the 13th for the next 5 years until 2030 so last date to look at is 
//December 31 2029

const currentDate = new Date()
const endDate = new Date('01/01/2030')
console.log(endDate)
console.log(currentDate)

//while(currentDate <= endDate){
    let newDate = currentDate.setDate(currentDate.getDate() + 1)
//}