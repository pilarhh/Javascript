const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'
];

const callback = (output) => {
    outputResult = output.map(result => result[0].toUpperCase() + result.slice(1));
    return outputResult;
}

const searchName = (initial, numberOutput, cb) => {
    lowerCase = name.map(result => result.toLowerCase());
    nameInitial = lowerCase.filter(initialName => initialName.includes(initial));
    output = nameInitial.slice(0, numberOutput);
    console.log(cb(output));
}

searchName('an', 3, callback)




