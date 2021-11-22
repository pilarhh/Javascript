function printSegitiga(x) {

    if (typeof x === 'number') {
        var output = '';
        for (var i = 0; i < x; i++) {
            for (var j = 1; j <= x - i; j++) {
                output += j + '  ';
            }
            console.log(output);
            output = '';
        }
    } else {
        console.log ("Data harus number");
    }
}

printSegitiga(5);