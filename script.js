let angkaRahasia = Math.floor(Math.random() * 10) + 1;

function cekAngka() {
  let tebakan = document.getElementById("tebakan").value;
  let hasil = document.getElementById("hasil");

  if (tebakan == "") {
    hasil.textContent = "Masukkan angka dulu!";
    return;
  }

  if (tebakan < angkaRahasia) {
    hasil.textContent = "❌ Terlalu kecil!";
  } else if (tebakan > angkaRahasia) {
    hasil.textContent = "❌ Terlalu besar!";
  } else {
    hasil.textContent = "✅ Benar! Kamu menang 🎉";
  }
}

function ulangGame() {
  angkaRahasia = Math.floor(Math.random() * 10) + 1;
  document.getElementById("hasil").textContent = "";
  document.getElementById("tebakan").value = "";
}
