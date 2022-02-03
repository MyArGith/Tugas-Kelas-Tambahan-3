function array(nilai) {
    const hasil = nilai.map (el => {
        const arrayBaru = ""
        return el += arrayBaru
    })
    const horizontal = hasil[3].split(',')
    hasil.pop()
    console.log(hasil ,horizontal.join(' '));
}
array(['hallo','nama','saya',['Arpi','Ginanjar', ['kelas',['11', [`XI RPL 1`]]]]])