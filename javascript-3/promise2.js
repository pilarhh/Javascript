// to check whether everyone is here or not using promise.all
const person1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Abigail is here")
    }, 1000);
})

const person2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Alexandra is here")
    }, 3000);
})

const person3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Olivia is here")
    }, 500);
})

const allPerson = Promise.all([person1, person2, person3])

allPerson
.then((res)=> {console.log(`${res}, let's start the meeting`)})
.catch((err)=>{console.log("The meeting is cancelled")})