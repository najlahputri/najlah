//fungsi untuk menampilkan sinopsis berdasarkan ID film 
function toggleSinopsis(filmId) {
  var sinopsis = document.querySelector(".sinopsis#"+filmId);
  if(sinopsis.style.display === "block"){
      sinopsis.style.display="none"; //sembunyikan sinopsis jika sedang terbuka
  } else{
      sinopsis.style.display="block"; //Tampilkan sinopsis jika sedang tersembunyi
  }
}
//fungsi untuk menyembunyikan semua sinopsis film
function hideAllSinopsis(){
  var sinopsisElements=document.querySelectorAll(".sinopsis");
  sinopsisElements.forEach(function(sinopsis){
      sinopsis.style.display="none";
  })
}

//menambahkan event listener untuk setiap elemen film
document.getElementById("PastLives").addEventListener("click", function(){
  hideAllSinopsis(); //sembunyikan semua sinopsis terlebih dahulu
  toggleSinopsis("PastLives"); //tampilkan sinopsis Past Lives
});
document.getElementById("PetualanganSherina2").addEventListener("click", function(){
  hideAllSinopsis(); //sembunyikan semua sinopsis terlebih dahulu
  toggleSinopsis("PetualanganSherina2"); //tampilkan sinopsis Petualangan Sherina 2
});
document.getElementById("DiAmbangKematian").addEventListener("click", function(){
  hideAllSinopsis(); //sembunyikan semua sinopsis terlebih dahulu
  toggleSinopsis("DiAmbangKematian"); //tampilkan sinopsis Di Ambang Kematian
});
document.getElementById("SawX").addEventListener("click", function(){
  hideAllSinopsis(); //sembunyikan semua sinopsis terlebih dahulu
  toggleSinopsis("SawX"); //tampilkan sinopsis Saw X
});
document.getElementById("DumbMoney").addEventListener("click", function(){
  hideAllSinopsis(); //sembunyikan semua sinopsis terlebih dahulu
  toggleSinopsis("DumbMoney"); //tampilkan sinopsis Dumb Money
});

//menambahkan event listener pada dokumen untuk menutup sinopsis saat mengklik di luar elemen film
document.addEventListener("click", function(event){
  if(
      !event.target.matches(
          ".sinopsis, #PastLives, #PetualanganSherina2, #DiAmbangKematian, #SawX, #DumbMoney"
      )
  ) {
      hideAllSinopsis();
  }
});