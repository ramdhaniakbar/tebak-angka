let angkaRahasia = Math.trunc(Math.random() * 20 + 1);
let skor = 20;
let skorTertinggi = 0;


const tampilkanPesan = function (pesan) {
   document.getElementById('pesan').textContent = pesan;
}

document.getElementById('cek').addEventListener('click', function () {
   const tebak = Number(document.getElementById("tebak").value);

   if (!tebak) {
      tampilkanPesan('⛔ Inputan bukan angka!')

   } else if (tebak === angkaRahasia) {
      tampilkanPesan('TEPAT!! 🥳');
      document.getElementById('angka').textContent = angkaRahasia;
      
      if (skor > skorTertinggi) {
         skorTertinggi = skor;
         document.getElementById('skor-tertinggi').textContent = skorTertinggi;
      }

   } else if (tebak !== angkaRahasia) {
      if (skor > 1) {
         tampilkanPesan(tebak > angkaRahasia ? 'Angka terlalu besar!' : 'Angka terlalu kecil!')
         skor--;
         document.getElementById('skor').textContent = skor;
      } else {
         document.getElementById('skor').textContent = 0;
         tampilkanPesan('KAMU KALAH! 👿')
      }
   }
});

document.getElementById('coba-lagi').addEventListener('click', function () {
   skor = 20;
   angkaRahasia = Math.trunc(Math.random() * 20 + 1);
   document.getElementById('skor').textContent = skor;
   document.getElementById('angka').textContent = '?';
   document.getElementById('tebak').value = '';
   tampilkanPesan('Mulai Tebak!');
});