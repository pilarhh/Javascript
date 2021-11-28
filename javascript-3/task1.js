const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=> {
                return item === day
            })
            if(cek){
                resolve(cek);
            }else{
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000);
    })
}

// then catch example to return resolve
cekHariKerja('senin')
.then((result) => {
    console.log(`Hari ${result} adalah hari kerja`);
})
.catch((err) => {
    console.log(err);
});

// try catch example to return reject
const cekHari = async(hari) => {
  try {
    const cek = await cekHariKerja(hari)
    console.log(`Hari ${hari} adalah hari kerja`);
  }
  catch (err){
    console.log(err);
  }
}

cekHari('sabtu')