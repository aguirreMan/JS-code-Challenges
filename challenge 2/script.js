// Practice using Javascript sort and filter method
const numbersArray = [-1, -2.4, 3, 4.9, -5.7, 3.5, -2.8, 9, 5.3, -4.2, 10.56]

function removeNegativeNumbers(){
    const filteringNegativeNumbers = numbersArray.filter(number => number >= 0)
    console.log(filteringNegativeNumbers)
}
removeNegativeNumbers()

const sortNumberArray = numbersArray.slice().sort((a, b) => b-a)
console.log(sortNumberArray)