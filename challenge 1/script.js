// this Challenge is get natual numbers below 10 multiples of 3 or 5
//numbers you need 3, 5, 6, 9 and adding them to output total of 23
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function returnMultiples(){
    const filterNumbers = numbers.filter((number) => [3, 5, 6, 9].includes(number))
    console.log(filterNumbers)
    let sum = 0
    filterNumbers.forEach(number => {
        sum += number
    })
    console.log(sum)
}
returnMultiples()

// This function should return sum of all multiples of 3 and 5 all way to max 100
function setUpMultiples(){
   maxNumber = 100
   const filteredNumbers = numbers.filter(number => number === 3 || number === 5)
   console.log(filteredNumbers)
   const multiples = Array.from(filteredNumbers, number =>
    Array.from({ length: Math.floor(maxNumber / number) }, (x, index) => 
    (index + 1) * number)).flat()
    console.log(multiples)
}
setUpMultiples()

//Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and 
//returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

//The return value should be a string where each date is seperated by a space. 
//The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

//If no end year is given, only return friday the thirteenths during the start year