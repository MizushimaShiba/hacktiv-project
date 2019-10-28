var nama = 'Mizu';
var peran = 'Tabib';
if(peran ===  'Ksatria', 'Kesatria') {
    console.log(`Halo ${peran} ${nama}, kamu dapat menggunakan senjata untuk menyerang.`)
} else if(peran ===  'tabib', 'Tabib'){
    console.log(`Halo ${peran} ${nama}, kamu dapat membantu temanmu dan menyembuhkan luka temanmu.`)
} else if(peran ===  'penyihir', 'Penyihir'){
    console.log(`Halo ${peran} ${nama}, Sulaplah para musuh untuk menang.`)
} else {
    console.log(`Peran tidak ditemukan. Silahkan pilih peran ( Tabib, Kesatria, Penyihir ).`)
}