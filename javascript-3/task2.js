const getMonth = (callback) => {
    setTimeout(()=> {
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
        if(error) {
            callback(null, month)
        }else{
            callback(new Error('Sorry data not found', []))
        }
    }, 4000)
}

const allMonth = (empty, data) => {
  if (empty === null) {
    const result = data.map(item => item).join("\n")
    console.log(result)
      setTimeout(() => {
      console.log("Done! That's the list of months")
    }, 5000);
  } else {
    console.log(empty)
  }
}

getMonth(allMonth);