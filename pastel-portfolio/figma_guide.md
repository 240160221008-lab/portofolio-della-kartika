# Panduan Integrasi Figma (Figma Integration Guide)

Projek portofolio ini dirancang agar mudah diimpor, diedit, dan diakses di **Figma**. Berikut adalah dua cara utama untuk mengimpor dan memodifikasi desain website ini di Figma.

---

## Opsi 1: Mengimpor File Vector SVG (Sangat Mudah & Direkomendasikan)

Kami telah membuat dua berkas desain vector SVG terpisah yang merepresentasikan seluruh halaman website dari awal sampai akhir secara terperinci:
1. **[`design_mockup.svg`](file:///C:/Users/Della%20Kartika/scratch/pastel-portfolio/design_mockup.svg)**: Tata letak halaman utama secara utuh dari atas ke bawah (Navbar, Hero, About, Skills, Portfolio Grid, Experience Timeline, Contact Form, dan Footer).
2. **[`design_modal_mockup.svg`](file:///C:/Users/Della%20Kartika/scratch/pastel-portfolio/design_modal_mockup.svg)**: Tata letak overlay Modal detail proyek (Popup info).

Kedua berkas SVG ini telah distrukturkan secara terperinci menggunakan tag grup (`<g>`) sehingga ketika diimpor ke Figma, mereka akan otomatis terurai menjadi layer-layer frame yang rapi.

### Langkah-langkah:
1. Buka aplikasi **Figma** (Desktop atau Browser) dan masuk ke berkas kerja Anda.
2. Cari berkas-berkas SVG tersebut di folder proyek Anda:
   * `C:\Users\Della Kartika\.gemini\antigravity\scratch\pastel-portfolio\design_mockup.svg`
   * `C:\Users\Della Kartika\.gemini\antigravity\scratch\pastel-portfolio\design_modal_mockup.svg`
3. **Seret dan lepas (Drag & Drop)** berkas SVG tersebut ke kanvas Figma Anda secara terpisah atau bersamaan.
4. Figma akan mendeteksi dan mengurai seluruh teks, warna, ikon, tombol, dan gambar ke dalam bentuk elemen vektor yang **dapat diedit sepenuhnya (fully editable)**.

> [!TIP]
> **Tip Font Tipografi**: Desain ini menggunakan font gratis **Outfit** (dan **Playfair Display**). Jika font tersebut belum terinstal di komputer Anda, Figma mungkin akan menampilkan peringatan "Missing Fonts". Anda dapat mengunduhnya secara gratis di [Google Fonts: Outfit](https://fonts.google.com/specimen/Outfit) agar tampilan teks presisi dan rapi.

---

## Opsi 2: Menggunakan Plugin Figma "html.to.design" (Situs Live ke Figma)

Karena website portofolio Anda sudah dideploy secara online, Anda dapat langsung mengonversi halaman web tersebut menjadi komponen Figma yang siap pakai dan dapat diedit sepenuhnya tanpa perlu menjalankan server lokal atau tunneling.

### Langkah-langkah:
1. Di Figma, buka menu **Plugins** > cari dan jalankan plugin **"html.to.design"**.
2. Masukkan satu-satunya tautan (URL) langsung dari website Anda yang telah dideploy:
   `https://portofolio-della-kartika.vercel.app/`
3. Pilih ukuran viewport yang diinginkan (misalnya: Desktop dan Mobile).
4. Klik **Import**.
5. Plugin akan memuat seluruh struktur HTML & CSS Anda langsung dari link live tersebut dan mengubahnya menjadi frame Figma lengkap dengan properti Auto Layout yang responsif dan siap diedit!

---

## Elemen yang Dapat Anda Modifikasi di Figma:

* **Teks**: Tinggal klik dua kali pada teks apa pun di Figma untuk mengubah portofolio atas nama Anda sendiri.
* **Warna**: Setiap bagian menggunakan warna palet pastel (#FCF9EA, #BADFDB, #FFA4A4, #FFBDBD) yang terdaftar di panel pengisian warna (Fill) Figma Anda. Anda dapat merancang skema warna baru dengan mengubah warna sampel ini.
* **Ikon**: Ikon sosial media dan detail merupakan bentuk vektor path SVG murni, sehingga Anda dapat mengubah ukuran, ketebalan garis (stroke), dan warnanya tanpa pecah.
