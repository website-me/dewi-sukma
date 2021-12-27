// Hitung Mundur
// Mendapatkan target waktu
const tanggalTujuan = new Date('Jan 15, 2022 09:00:00').getTime()

const hitungMundur = setInterval(function () {

    // Tanggal sekarang 
    const sekarang = new Date().getTime()
    const selisih = tanggalTujuan - sekarang
    
    // mencari Hari 
    const hari = Math.floor (selisih / (1000 * 60 * 60 * 24))
    // mencari Jam 
    const jam = Math.floor (selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    // mencari Menit 
    const menit = Math.floor (selisih % (1000 * 60 * 60) / (1000 * 60)) 
    // mencari Detik 
    const detik = Math.floor(selisih % (1000 * 60) / (1000)) 
    
    const day = document.getElementById('hari')
    day.innerHTML = hari
    const hours = document.getElementById('jam')
    hours.innerHTML = jam
    const min = document.getElementById('menit')
    min.innerHTML = menit
    const sec = document.getElementById('detik')
    sec.innerHTML = detik

    if (selisih < 0) {
        clearInterval(hitungMundur)
        const day = document.getElementById('hari')
        day.innerHTML = 0
        const hours = document.getElementById('jam')
        hours.innerHTML = 0
        const min = document.getElementById('menit')
        min.innerHTML = 0
        const sec = document.getElementById('detik')
        sec.innerHTML = 0
        const mulai = document.getElementById('acara-telahMulai')
        mulai.innerHTML = 'Acara sudah dimulai...'
        mulai.style.color = 'rgb(85, 85, 85)'
        mulai.style.marginTop = '-30px'
    }

}, 1000)


// radio-button gallery
// var counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 3000);

// Ucapan 
let id_nama = document.getElementById("nama");
let ucapan = document.getElementById("pesan");

let id_tamp = document.getElementById("nama_p");
let id_tamp_u = document.getElementById("ucapan_p");

function kirim(){
    id_tamp.innerHTML =  id_nama.value;
    id_tamp.style.fontSize = '20px'
    id_tamp_u.innerHTML = ucapan.value;
    id_tamp_u.style.fontSize = '20px'
}
