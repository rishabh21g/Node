const name = process.argv[2]
const hours = new Date().getHours()
function greet(hours){
    if(hours<12) return console.log(`Good Morning`)
    if(hours >= 12 && hours <= 16) return console.log(`Good Afternoon`)
    else return console.log(`Good Evening`)
    }
const greetings = greet(hours)
console.log(`${greetings} ${name}`)
