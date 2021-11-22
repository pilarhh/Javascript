// toString ()
const array1 = ["My name", " is", " Mehdi"];

const newString = array1.toString();
console.log(newString); 

// filter ()
const array2 = [1, 2, 3, 4, 5, 6, 7]

const filtered = array2.filter(item => item > 3);
console.log(filtered)

// includes ()
const array3 = [1, 2, 3, 4, 5, 6, 7]

const included = array3.includes(2);
console.log(included);

// slice ()
const array4 = ["apple", "banana", "mango", "melon", "kiwi"]

const sliced = array4.slice(1,3)
console.log(sliced)

// every ()
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const every = array5.every(item => item < 10);
console.log(every);

// sort ()
const array6 = [4, 10, 3, 8, 7, 4, 1, 2, 6, 9]

const ascending = array6.sort((a,b)=> a-b);;
console.log(ascending); // meningkat

const descending = array6.sort((a,b)=> b-a);;
console.log(descending); // menurun

// reduce ()
const array7 = [1, 2, 3, 4, 5];

const reduced = array7.reduce((total, value) => total + value);
console.log(reduced);

// find ()
const array8 = [1, 2, 3, 4, 5]

const found = array8.find(item => item < 3)
console.log(found)

// concat ()
const array9 = ['apple', 'banana', 'mango']
const array10 = ['melon', 'durian']

const newArray = array9.concat(array10);
console.log(newArray);

// map ()
const array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mapped = array11.map(item => item + 1);
console.log(mapped);