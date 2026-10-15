<<<<<<< HEAD
# Modul Perkuliahan Desain Web

Panduan kerja kelompok 3 orang untuk mata kuliah **Pengenalan Workshop Desain Web** — D3 Informatika, Semester 1.

**Durasi:** 3 jam kelas per pertemuan: 1 jam teori dan 2 jam praktik (14–16 pertemuan per semester).

> **Dibaca sekali, dipraktikkan setiap minggu.** Dokumen ini menjelaskan cara kerja kelompok Anda di repositories ini (modul Markdown) dan di repositories buku LaTeX (`buku-desain-web`) yang akan di-fork.

---

## Daftar Isi

1. [Struktur Repositories Ini](#1-struktur-repositories-ini)
2. [Tujuan Modul Markdown vs Buku LaTeX](#2-tujuan-modul-markdown-vs-buku-latex)
3. [Langkah 1 — Fork, Rename, dan Undang Anggota](#3-langkah-1--fork-rename-dan-undang-anggota)
4. [Langkah 2 — Clone, Branch, Commit, Push, dan Pull Request](#4-langkah-2--clone-branch-commit-push-dan-pull-request)
5. [Langkah 3 — Menyimpan Tangkapan Layar (Screenshot)](#5-langkah-3--menyimpan-tangkapan-layar-screenshot)
6. [Langkah 4 — Menyisipkan Tangkapan Layar ke LaTeX](#6-langkah-4--menyisipkan-tangkapan-layar-ke-latex)
7. [Langkah 5 — Menambahkan Kode Contoh (HTML/CSS/JS)](#7-langkah-5--menambahkan-kode-contoh-htmlcssjs)
8. [Langkah 6 — Log Kontribusi di README](#8-langkah-6--log-kontribusi-di-readme)
9. [Troubleshooting Umum](#9-troubleshooting-umum)
10. [Checklist Sebelum Kirim](#10-checklist-sebelum-kirim)

---

## 1. Struktur Repositories Ini

Repositories ini berisi **modul ajar** dalam dua format:

```
modul-perkuliahan-desain-web/
├── modules/                        ← Modul Markdown (bacaan mahasiswa)
│   ├── minggu-01.md
│   ├── minggu-02.md
│   └── ... s.d. minggu-16.md
├── book/                           ← Buku LaTeX (dikompilasi jadi PDF)
│   ├── main.tex                    ← Dokumen utama (titik masuk kompilasi)
│   ├── preamble.tex                ← Preamble: bahasa Indonesia, warna, lingkungan pedagogis
│   ├── elegantbook.cls             ← Template ElegantBook (vendor, jangan diedit)
│   ├── main.pdf                    ← Hasil kompilasi PDF
│   ├── chapters/                   ← Bab-bab LaTeX (satu per minggu)
│   │   ├── minggu-01.tex
│   │   ├── minggu-02.tex
│   │   └── ... s.d. minggu-16.tex
│   └── assets/                     ← Gambar dan kode contoh
│       ├── images/
│       │   ├── minggu-01/
│       │   ├── minggu-02/
│       │   └── ... s.d. minggu-16/
│       └── code/
│           ├── minggu-01/
│           └── ...
└── PRD_Modul_Pengenalan_Workshop_Desain_Web.md  ← Dokumen perencanaan modul
```

### Apa Isi Modul Markdown (`modules/`)?

Modul Markdown (`minggu-01.md` dst.) berisi **materi praktikum mingguan** yang dibaca mahasiswa: tujuan pembelajaran, langkah-langkah praktik, latihan mandiri, dan troubleshooting. Formatnya ringkas, mudah diakses di GitHub tanpa perlu kompilasi.

### Apa Isi Buku LaTeX (`book/`)?

Buku LaTeX adalah **dokumen terstruktur** yang dikompilasi menjadi PDF menggunakan XeLaTeX. Buku ini memuat materi yang sama dengan modul Markdown tetapi dengan format pedagogis tambahan (lingkungan `capaian`, `langkah`, `tangkapanlayar`, `latihan`, `tip`, `peringatan`, dll.). Bukulah yang menjadi **deliverable utama** kelompok: Anda akan menambahkan tangkapan layar dan kode contoh ke dalamnya.

> **Ringkasnya:** Modul Markdown = bacaan praktis. Buku LaTeX = dokumentasi formal yang di-push dan di-kompilasi. Keduanya harus sinkron secara konten.

---

## 2. Tujuan Modul Markdown vs Buku LaTeX

| Aspek | Modul Markdown (`modules/`) | Buku LaTeX (`book/`) |
|---|---|---|
| Format | `.md` (Markdown) | `.tex` (LaTeX) |
| Tujuan | Bacaan praktis, instruksi langkah-demi-langkah | Dokumentasi formal, dikompilasi ke PDF |
| Siapa yang isi | Pengajar / dosen | Kelompok mahasiswa (tangkapan layar + kode) |
| Cara melihat | Langsung di GitHub (render otomatis) | Dikompilasi: `xelatex main.tex` (dua kali) |
| Lokasi aset gambar | Tidak ada | `book/assets/images/minggu-XX/` |
| Lokasi aset kode | Tidak ada | `book/assets/code/minggu-XX/` |

---

## 3. Langkah 1 — Fork, Rename, dan Undang Anggota

Satu orang perwakilan kelompok melakukan langkah ini.

### 3.1. Fork Repositori

1. Buka **https://github.com/liesvarastranta/buku-desain-web** di peramban.
2. Klik tombol **Fork** (pojok kanan atas).
3. Pilih akun GitHub Anda sebagai lokasi fork.
4. Tunggu proses fork selesai.

### 3.2. Rename (Ubah Nama) Fork

Setelah fork selesai, **ubah nama repositories** agar sesuai konvensi:

1. Buka repositories fork Anda (mis. `https://github.com/NAMA-ANDA/buku-desain-web`).
2. Klik tab **Settings**.
3. Di bagian **General**, kolom **Repository name**, ketik nama baru:

   ```
   buku-kelompok-NAMA-KETUA
   ```

   Contoh: `buku-kelompok-budi`

4. Klik **Rename**.

> **Penting:** Nama repositories harus konsisten — semua anggota akan menggunakan nama ini untuk clone dan push.

### 3.3. Undang Anggota sebagai Collaborator

Ketua kelompok mengundang 2 anggota lainnya:

1. Masuk ke tab **Settings** repositories fork.
2. Di panel kiri, klik **Collaborators** (di bagian **Access**).
3. Klik tombol **Add people**.
4. Ketik **username GitHub** anggota yang ingin diundang.
5. Klik nama yang muncul, lalu klik **Add [nama] to this repository**.
6. Anggota akan menerima **undangan via email** — mereka harus mengklik **Accept invitation**.

Ulangi untuk anggota kedua.

> **Setelah semua anggota menerima undangan**, mereka sudah bisa clone, branch, commit, push, dan membuat pull request di repositories ini.

---

## 4. Langkah 2 — Clone, Branch, Commit, Push, dan Pull Request

Setiap anggota mengerjakan langkah ini **secara individual** di komputer masing-masing.

### 4.1. Clone Repositories

```bash
# Ganti NAMA-ANDA dan NAMA-KETUA dengan yang sesuai
git clone https://github.com/NAMA-ANDA/buku-kelompok-NAMA-KETUA.git

# Masuk ke folder repositories
cd buku-kelompok-NAMA-KETUA
```

### 4.2. Konfigurasi Identitas Git

**Lakukan ini sekali saja** setelah clone (atau jika Git belum dikonfigurasi):

```bash
# Ganti dengan nama dan email GitHub Anda
git config user.name "Nama Lengkap Anda"
git config user.email "email-anda@contoh.com"
```

> **Pastikan email sama dengan email yang terdaftar di GitHub.** Cek di https://github.com/settings/emails.

### 4.3. Membuat Branch Baru

```bash
# Pastikan Anda di branch master
git checkout master
git pull origin master

# Buat branch baru untuk tugas Anda
# Ganti NAMA-ANGGOTA dengan nama anggota (lowercase, tanpa spasi)
git checkout -b fitur/tangkapan-layar-minggu-01-NAMA-ANGGOTA
```

Contoh nama branch:

```
fitur/tangkapan-layar-minggu-01-budi
fitur/kode-contoh-minggu-05-siti
fitur/update-latex-minggu-09-ahmad
```

### 4.4. Bekerja, Commit, dan Push

Setelah mengerjakan perubahan (menambah tangkapan layar, mengedit LaTeX, dll.):

```bash
# Lihat file yang berubah
git status

# Tambahkan semua perubahan
git add .

# Buat commit dengan pesan yang jelas
git commit -m "Tambah tangkapan layar minggu-01: tampilan VS Code dan browser"

# Push branch ke remote
git push origin fitur/tangkapan-layar-minggu-01-NAMA-ANGGOTA
```

### 4.5. Membuat Pull Request (PR)

1. Buka repositories fork Anda di GitHub.
2. GitHub biasanya menampilkan banner kuning: **"Compare & pull request"** — klik tombol tersebut.
3. Jika tidak muncul, buka tab **Pull requests** → klik **New pull request**.
4. Isi form PR:
   - **Title:** Deskripsi singkat (mis. `Tambah screenshot minggu-01: VS Code & browser`).
   - **Description:** Jelaskan apa yang Anda kerjakan, mis.:
     ```
     Menambahkan tangkapan layar untuk bab 1:
     - vs-code-index.html.png
     - browser-halo-dunia.png
     ```
5. Klik **Create pull request**.

### 4.6. Merge Pull Request

Setelah PR di-review (pastikan tidak ada konflik):

1. Di halaman PR, klik tombol **Merge pull request**.
2. Klik **Confirm merge**.
3. (Opsional) Klik **Delete branch** setelah merge selesai.

**Setelah merge**, semua anggota harus sinkronkan branch `master` lokal mereka:

```bash
# Kembali ke branch master
git checkout master

# Ambil perubahan terbaru dari remote
git pull origin master

# (Opsional) Hapus branch fitur lokal yang sudah di-merge
git branch -d fitur/tangkapan-layar-minggu-01-NAMA-ANGGOTA
```

---

## 5. Langkah 3 — Menyimpan Tangkapan Layar (Screenshot)

### 5.1. Aturan Penamaan

Semua tangkapan layar disimpan di:

```
book/assets/images/minggu-XX/
```

Gunakan **huruf kecil**, pisahkan kata dengan **tanda hubung** (`-`), **tanpa spasi**.

| Yang benar | Yang salah |
|---|---|
| `vs-code-index.html.png` | `VS Code Index.html.png` |
| `browser-halo-dunia.png` | `Browser Halo Dunia.png` |
| `hasil-validasi-form.png` | `hasil_validasi_form.png` |

### 5.2. Format dan Kualitas

- **Format:** `.png` (disarankan untuk screenshot antarmuka) atau `.jpg` (untuk foto).
- **Resolusi:** Minimal **1280 × 720 px** agar jelas saat dicetak di PDF.
- **Kompresi:** Gunakan tool seperti [TinyPNG](https://tinypng.com/) atau [Squoosh](https://squoosh.app/) agar ukuran file tidak terlalu besar (target: < 500 KB per gambar).
- **Nama deskriptif:** Gunakan nama yang menggambarkan isi gambar (contoh: `form-login-validasi-error.png`).

### 5.3. Cara Mengambil Screenshot

- **Windows:** Tekan **Win + Shift + S** → pilih area → paste ke Paint/VS Code → simpan sebagai PNG.
- **macOS:** **Cmd + Shift + 4** → seret area → file otomatis tersimpan di Desktop.
- **VS Code:** Buka ekstensi **Screenshot** atau gunakan browser DevTools (F12 →SizeMode → ambil screenshot elemen).

### 5.4. Contoh Struktur Folder

```
book/assets/images/
├── minggu-01/
│   ├── vs-code-index.html.png
│   ├── browser-halo-dunia.png
│   ├── dashboard-github.png
│   └── perbandingan-url.png
├── minggu-02/
│   ├── figma-wireframe.png
│   └── figma-mockup.png
└── minggu-03/
    ├── struktur-html-dasar.png
    └── hasil-render-halaman.png
```

---

## 6. Langkah 4 — Menyisipkan Tangkapan Layar ke LaTeX

Setiap bab LaTeX (`book/chapters/minggu-XX.tex`) berisi **placeholder** tangkapan layar menggunakan lingkungan `tangkapanlayar`. Anda harus menggantinya dengan gambar yang sebenarnya.

### 6.1. Cari Placeholder

Buka file chapter yang relevan. Cari blok seperti ini:

```latex
\begin{tangkapanlayar}
  {assets/images/minggu-01/vs-code-index.html.png}
  {VS Code dengan file \texttt{index.html} terbuka.}
  {Pastikan panel Explorer (kiri) menunjukkan folder \texttt{latihan-web-1} dan file \texttt{index.html}.}
\end{tangkapanlayar}
```

### 6.2. Ganti dengan `includegraphics`

Hapus seluruh blok `tangkapanlayar` di atas dan ganti dengan:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\linewidth]{minggu-01/vs-code-index.html.png}
  \caption{VS Code dengan file \texttt{index.html} terbuka.}
  \label{fig:vs-code-index}
\end{figure}
```

**Penjelasan:**

| Bagian | Keterangan |
|---|---|
| `[htbp]` | Posisi gambar: *here, top, bottom, page* — biarkan LaTeX memilih posisi terbaik |
| `\centering` | Gambar di tengah halaman |
| `[width=0.85\linewidth]` | Lebar gambar 85% dari lebar kolom teks (sesuaikan jika perlu) |
| `{minggu-01/vs-code-index.html.png}` | Jalur gambar relatif dari `assets/images/` (sudah diatur di `preamble.tex` via `\graphicspath`) |
| `\caption{...}` | Keterangan gambar yang muncul di bawah gambar |
| `\label{fig:...}` | Label untuk referensi silang di dalam dokumen |

> **Catatan:** `\graphicspath{{assets/images/}}` sudah disetel di `preamble.tex`, sehingga cukup menyebut nama folder minggu + nama file. Tidak perlu menulis `assets/images/minggu-01/...`.

### 6.3. Referensi Gambar di Teks

Untuk merujuk gambar di dalam teks LaTeX:

```latex
Lihat Gambar~\ref{fig:vs-code-index} untuk hasil tampilan VS Code.
```

---

## 7. Langkah 5 — Menambahkan Kode Contoh (HTML/CSS/JS)

### 7.1. Simpan File Kode di Folder yang Benar

```
book/assets/code/minggu-XX/nama-file.html
book/assets/code/minggu-XX/nama-file.css
book/assets/code/minggu-XX/nama-file.js
```

Contoh:

```
book/assets/code/minggu-01/halo-dunia.html
book/assets/code/minggu-05/style-box-model.css
book/assets/code/minggu-10/script-dom.js
```

Gunakan nama deskriptif, huruf kecil, pisahkan kata dengan `-`.

### 7.2. Tampilkan Kode di LaTeX dengan `lstlisting`

Buka file chapter yang relevan (`book/chapters/minggu-XX.tex`), lalu tambahkan blok berikut di posisi yang sesuai:

```latex
\begin{lstlisting}[language=HTML, caption={Judul Deskriptif}, label={lst:m01-halo}]
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Halo Dunia</title>
</head>
<body>
  <h1>Halo, Dunia!</h1>
  <p>Ini halaman web pertamaku.</p>
</body>
</html>
\end{lstlisting}
```

**Bahasa yang didukung di `preamble.tex`:**

| Bahasa | Pilihan `language=` |
|---|---|
| HTML | `HTML` |
| CSS | `css` (didefinisikan manual di `preamble.tex`) |
| JavaScript | `JavaScript` (didefinisikan manual di `preamble.tex`) |
| Bash/Shell | `bash` |
| Plain text | *(kosongkan atau gunakan `text`)* |

### 7.3. Referensi Kode di Teks

```latex
Contoh kode terlihat pada Daftar~Lambang~\ref{lst:m01-halo}.
```

---

## 8. Langkah 6 — Log Kontribusi di README

Setiap repositories fork **wajib** memiliki bagian **Log Kontribusi** di file `README.md` root repositories fork. Tujuannya: dokumentasi pembagian tugas dan transparansi penggunaan AI.

### 8.1. Format Log Kontribusi

Tambahkan bagian berikut di **akhir** file `README.md` repositories fork:

```markdown
---

## Log Kontribusi

| Nama | NIM | Peran | Kontribusi |
|---|---|---|---|
| Budi Santoso | 2301001 | Ketua Kelompok | Fork repositori, merge PR, kompilasi LaTeX |
| Siti Rahayu | 2301002 | Anggota | Screenshot minggu 01–04, edit LaTeX minggu 01–04 |
| Ahmad Hidayat | 2301003 | Anggota | Kode contoh CSS minggu 05–07, edit LaTeX minggu 05–07 |

### Penggunaan AI

- **Budi:** Menggunakan GitHub Copilot untuk autocomplete saat menulis kode JavaScript (minggu 10–11).
- **Siti:** Menggunakan ChatGPT untuk membantu merangkum konten LaTeX bab 3.
- **Ahmad:** Tidak menggunakan AI.

> Seluruh kode yang dibantu AI sudah dijelaskan dan diverifikasi pemahamannya oleh masing-masing anggota.
```

### 8.2. Aturan Transparansi AI

- Cantumkan **tool AI** yang digunakan (mis. GitHub Copilot, ChatGPT, Claude, dll.).
- Cantumkan **bagian mana** dari pekerjaan yang dibantu AI.
- Setiap anggota harus bisa **menjelaskan kode** yang menjadi tanggung jawabnya (akan ditanya saat demo).
- Jika tidak menggunakan AI, tulis **"Tidak menggunakan AI"**.

---

## 9. Troubleshooting Umum

### Git & GitHub

| Masalah | Solusi |
|---|---|
| `git clone` gagal: "repository not found" | Pastikan URL benar. Cek apakah Anda sudah menerima invitation dan repositories sudah rename. |
| Git meminta password saat push | Gunakan **Personal Access Token** (PAT) sebagai password. Buka https://github.com/settings/tokens → Generate new token (classic) → centang `repo` → Generate. |
| Konflik merge (merge conflict) | Buka file yang bermasalah, cari baris `<<<<<<<`, pilih versi yang benar, hapus marker konflik, lalu commit. |
| `git push` ditolak karena branch outdated | Jalankan `git pull origin master` dulu, lalu push lagi. |
| Salah push ke branch orang lain | Jangan panik. Minta ketua kelompok merge atau tutup PR-nya. Di masa depan, selalu cek branch aktif: `git branch`. |

### LaTeX

| Masalah | Solusi |
|---|---|
| Kompilasi gagal: "file not found" untuk gambar | Pastikan file gambar ada di `book/assets/images/minggu-XX/` dan nama file cocok persis (case-sensitive). |
| `\includegraphics` error | Jalankan XeLaTeX **dua kali** untuk referensi silang. |
| PDF tidak update meski sudah kompilasi | Bersihkan file sementara: hapus file `.aux`, `.log`, `.out`, `.toc`, `.lof`, `.lot` dari folder `book/`, lalu kompilasi ulang. |
| Font aneh atau tidak muncul | Pastikan menggunakan **XeLaTeX** (bukan pdfLaTeX). Jalankan: `xelatex -synctex=1 -interaction=nonstopmode main.tex` |
| Error "undefined control sequence" | Periksa ejaan command LaTeX. Pastikan tidak ada typo. |

### Tangkapan Layar

| Masalah | Solusi |
|---|---|
| Gambar tidak muncul di PDF | Cek jalur file di `\includegraphics`. Ingat: `\graphicspath` sudah diatur, cukup tulis `minggu-XX/nama-file.png`. |
| Gambar terlalu besar/kecil | Ubah nilai `width`: `[width=0.85\linewidth]` (85%), `[width=\linewidth]` (100%), `[width=0.5\linewidth]` (50%). |
| Gambar pecah/blur | Gunakan resolusi minimal 1280×720 px saat screenshot. Hindari crop terlalu kecil lalu diperbesar. |

### Kolaborasi

| Masalah | Solusi |
|---|---|
| PR tidak bisa di-merge (conflict) | Jalankan `git pull origin master` di branch lokal, selesaikan konflik, push ulang. |
| Perubahan hilang setelah merge | Pastikan sudah `git pull origin master` sebelum mulai kerja baru. |
| Lupa buat branch, langsung kerja di `master` | Buat branch baru dari commit saat ini: `git checkout -b fitur/nama-baru`, lalu push branch tersebut dan buat PR dari situ. |

---

## 10. Checklist Sebelum Kirim

Gunakan checklist ini **sebelum presentasi** atau **sebelum deadline pengumpulan**:

### Repositories & Git

- [ ] Semua anggota sudah menjadi **collaborator** di repositories fork.
- [ ] Semua perubahan sudah di-merge ke branch `master`.
- [ ] Branch fitur sudah di-**delete** (di remote dan lokal).
- [ ] Repository fork bersih dari branch sampah.
- [ ] `README.md` repositories fork sudah dilengkapi **Log Kontribusi**.

### Tangkapan Layar

- [ ] Semua placeholder `tangkapanlayar` di LaTeX sudah diganti dengan `\includegraphics`.
- [ ] Semua gambar tersimpan di `book/assets/images/minggu-XX/` dengan nama yang benar.
- [ ] Nama file gambar **huruf kecil**, tanpa spasi, gunakan `-` sebagai pemisah.
- [ ] Resolusi gambar minimal 1280×720 px.
- [ ] Ukuran file setiap gambar < 500 KB (kompres jika perlu).

### Kode Contoh

- [ ] File kode disimpan di `book/assets/code/minggu-XX/`.
- [ ] Kode ditampilkan di LaTeX menggunakan `lstlisting` dengan caption dan label.

### Kompilasi LaTeX

- [ ] PDF berhasil dikompilasi tanpa error (jalankan XeLaTeX **dua kali**).
- [ ] Semua gambar muncul dengan benar di PDF.
- [ ] Semua referensi silang (`\ref`) terisi (tidak `??`).
- [ ] Tidak ada placeholder `tangkapanlayar` yang tertinggal.

### Transparansi & Kontribusi

- [ ] Log Kontribusi di `README.md` mencantumkan **nama, NIM, peran, dan kontribusi** setiap anggota.
- [ ] Penggunaan AI **didokumentasikan** (tool, bagian yang dibantu, atau "Tidak menggunakan AI").
- [ ] Setiap anggota bisa **menjelaskan kode** yang menjadi tanggung jawabnya.

---

## Referensi Cepat

| Sumber | URL |
|---|---|
| MDN Web Docs | https://developer.mozilla.org/en-US/docs/Learn |
| GitHub Docs | https://docs.github.com |
| VS Code Docs | https://code.visualstudio.com/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| React Docs | https://react.dev/learn |
| Figma | https://www.figma.com |
| TeX Live | https://www.tug.org/texlive/ |
| TinyPNG (kompres gambar) | https://tinypng.com |

---

*Dokumen ini dikhususkan untuk mahasiswa D3 Informatika — Modul Perkuliahan Desain Web. Tidak untuk penilaian rubrik — gunakan sebagai panduan kerja.*
=======
# Redesain-Website-E-Government
Repository ini dibuat untuk memenuhi tugas kuliah Redesain Web. Proyek ini berfokus pada perancangan ulang tampilan dan antarmuka website agar lebih menarik, modern, responsif, dan mudah digunakan. Proses redesain dilakukan dengan memperhatikan aspek UI/UX untuk meningkatkan kenyamanan pengguna serta memperbaiki tata letak dan navigasi website.
>>>>>>> 2ff9f922eaae6fa49cb5aafd02dfd868c3410e41
