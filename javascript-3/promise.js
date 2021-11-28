// to check whether the person is in this class or not
const absenceCheck = (name) => {
    return new Promise((resolve, reject)=> {
        const list = ['Adinda', 'Bagus', 'Ferdi', 'Juan', 'Massel',
        'Pilar', 'Ridho', 'Rifai', 'Tyas', 'Vigar']
        let checking = list.includes(name)
        if (checking) {
            resolve('Present')
        }else{
            reject(new Error('Not in this class'))
        }
    })
}

absenceCheck('Pilar')
.then((res)=> {console.log(res)})
.catch((err)=>{console.log(err)})

absenceCheck('Olivia')
.then((res)=> {console.log(res)})
.catch((err)=>{console.log(err)})
