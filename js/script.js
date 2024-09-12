function showSegitiga() {
    document.getElementById("segitiga").classList.remove("hidden");
    document.getElementById("jajar-genjang").classList.add("hidden");
}

function showJajarGenjang() {
    document.getElementById("segitiga").classList.add("hidden");
    document.getElementById("jajar-genjang").classList.remove("hidden");
}


function hitungLuas() {
     // Ambil nilai alas dan tinggi dari input
     var alas = parseFloat(document.getElementById("alas-segitiga").value);
     var tinggi = parseFloat(document.getElementById("tinggi-segitiga").value);
 
     // Validasi bahwa alas dan tinggi harus diisi dan lebih besar dari 0
     if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
         alert("Silakan masukkan nilai alas dan tinggi yang valid!");
         return;
     }
 
     // Hitung luas segitiga
     var luas = 0.5 * alas * tinggi;
 
     // Tampilkan hasil perhitungan di elemen dengan id 'hasil-luas'
     document.getElementById("hasil-luas").innerText = luas;
 
     // Buat penjelasan cara menghitungnya dalam format tiga baris
     var penjelasan = "Luas = 1/2 x alas x tinggi\n"; // Baris 1: Rumus dasar
     penjelasan += "Luas = 1/2 x " + alas + " x " + tinggi + "\n"; // Baris 2: Substitusi angka
     penjelasan += "Luas = " + luas; // Baris 3: Hasil perhitungan
 
     // Tampilkan penjelasan di elemen dengan id 'penjelasan-hitung'
     document.getElementById("penjelasan-hitung").innerText = penjelasan;
}

function hitungKeliling() {
    // Ambil nilai dari input panjang sisi-sisi
    var ab = parseFloat(document.getElementById("sisi1-keliling").value);
    var bc = parseFloat(document.getElementById("sisi2-keliling").value);
    var ca = parseFloat(document.getElementById("sisi3-keliling").value);

    // Validasi input agar tidak kosong dan harus lebih besar dari 0
    if (isNaN(ab) || isNaN(bc) || isNaN(ca) || ab <= 0 || bc <= 0 || ca <= 0) {
        alert("Silakan masukkan nilai panjang sisi yang valid!");
        return;
    }

    // Hitung keliling segitiga
    var keliling = ab + bc + ca;

    // Tampilkan hasil perhitungan di elemen dengan id 'hasil-keliling-segitiga'
    document.getElementById("hasil-keliling-segitiga").innerText = keliling;

    // Buat penjelasan cara menghitungnya dalam format tiga baris
    var penjelasan = "Keliling = AB + BC + CA\n"; // Baris 1: Rumus dasar
    penjelasan += "Keliling = " + ab + " + " + bc + " + " + ca + "\n"; // Baris 2: Substitusi angka
    penjelasan += "Keliling = " + keliling; // Baris 3: Hasil perhitungan

    // Tampilkan penjelasan di elemen dengan id 'penjelasan-keliling'
    document.getElementById("penjelasan-keliling").textContent = penjelasan;
}

function hitungLuasJajargenjang() {
    // Ambil nilai dari input
    var alas = parseFloat(document.getElementById('alas-jajargenjang').value);
    var tinggi = parseFloat(document.getElementById('tinggi-jajargenjang').value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Masukkan nilai alas dan tinggi yang valid!");
        return;
    }

    // Hitung luas
    var luas = alas * tinggi;

    // Tampilkan hasil
    document.getElementById('luas-jajargenjang').innerText = luas;

    // Tampilkan cara perhitungan
    var penjelasan = "Luas = Alas × Tinggi\nLuas = " + alas + " × " + tinggi + "\nLuas = " + luas;
    document.getElementById('penjelasan-luas-jajargenjang').innerText = penjelasan;
}

function hitungKelilingJajargenjang() {
    // Ambil nilai dari input
    var alas = parseFloat(document.getElementById('alas-jajargenjang').value);
    var sisiMiring = parseFloat(document.getElementById('sisi-miring').value);

    // Validasi input
    if (isNaN(alas) || isNaN(sisiMiring) || alas <= 0 || sisiMiring <= 0) {
        alert("Masukkan nilai alas dan sisi miring yang valid!");
        return;
    }

    // Hitung keliling
    var keliling = 2 * (alas + sisiMiring);

    // Tampilkan hasil
    document.getElementById('keliling-jajargenjang').innerText = keliling;

    // Tampilkan cara perhitungan
    var penjelasan = "Keliling = 2 × (Alas + Sisi Miring)\nKeliling = 2 × (" + alas + " + " + sisiMiring + ")\nKeliling = " + keliling;
    document.getElementById('penjelasan-keliling-jajargenjang').innerText = penjelasan;
}

