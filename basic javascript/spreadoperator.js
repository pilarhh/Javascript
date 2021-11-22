let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x564442",
    website: "hildegard.org",
}

// spread operator
let newData = {...data, name : "pilar", email : "pilarhengkiriang11@gmail.com", hobby : "listening to music"};

// destructuring
const {address} = data;
const {street, city} = address;

console.log(street);