/*  
user stories Friday the 13th challenge

1. Need to know when our end date year is 2030
2. Need to go through all the dates until December 31 2030
3. filter out everyday that is not a friday
4. filter out fridays that do not include 13th
5. append fridays the 13th to the unorderd list

*/

function displayFridayThirteenth(){
    const ul = document.querySelector('.date-lists')
    const currentDate = new Date()
    const endDate = new Date('December 31, 2030')
    for(let date = currentDate; date <= endDate; date.setDate(date.getDate() + 1)){
        const dayOfMonth = date.getDate()
        const dayOfWeek = date.getDay()
        if(dayOfMonth === 13 && dayOfWeek === 5){
            const li = document.createElement('li')
            li.textContent = date.toDateString()
            ul.appendChild(li)
        }
    }
}

displayFridayThirteenth()
