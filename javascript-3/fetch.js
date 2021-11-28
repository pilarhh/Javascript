import fetch from 'node-fetch'

const fetcher = () => {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch (url)
        .then((response)=> {
            return response.json();
        })
        .then((json)=> {
            let result = json.map(item => item.name).join("\n");
            console.log(`Name list:\n${result}`);
        })
        .catch((err)=> console.log("error, there's no data"));
        }

fetcher();