const dataSelection = (nilaiAwal, nilaiAkhir, dataArray) => {
    
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray tidak ada");
    } else {
        result = dataArray.filter(num => num < nilaiAkhir && num > nilaiAwal);
        output = result.sort((a, b) => a-b);
        console.log(output);
    } 
}

dataSelection(5,20,[2,25,4,14,17,30,8]);