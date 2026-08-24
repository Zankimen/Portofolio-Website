# Roadmap Website Portofolio Daffa Ayyasy

Dokumen ini memetakan perjalanan dari project kosong sampai website portofolio live di `daffaayyasy.com`. Tujuannya agar keputusan desain, isi, teknologi, GitHub, deployment, dan domain dipahami sebelum kode ditulis.

## 1. Tujuan dan ruang lingkup

Website ini ditargetkan untuk:

- menunjukkan siapa Daffa, keahlian, pengalaman, pendidikan, dan proyek nyata;
- terasa personal, bukan template generik atau hasil generator AI;
- cepat, responsif, mudah diakses, dan mudah dipelihara;
- dibuat dengan Next.js + TypeScript;
- disimpan di GitHub;
- dideploy melalui Vercel;
- memakai domain `daffaayyasy.com` dari Hostinger.

Versi pertama menggunakan pola one-page portfolio. Halaman detail proyek, resume, atau blog dapat ditambahkan setelah versi utama stabil.

## 2. Keputusan awal

| Area | Keputusan awal | Catatan |
| --- | --- | --- |
| Framework | Next.js App Router | Cocok untuk Vercel dan struktur modern |
| Bahasa | TypeScript | Data dan komponen lebih aman dari salah tipe |
| Styling | CSS Modules/CSS global terstruktur | Identitas visual dapat dikontrol sendiri |
| UI library | Tidak wajib shadcn/ui | Komponen dibuat sesuai kebutuhan |
| Konten | Indonesia, Inggris, atau bilingual | Dipilih sesuai target pengunjung |
| Repository | Satu repository GitHub | Contoh: `daffaayyasy-portfolio` |
| Hosting | Vercel | Preview dan production terhubung ke GitHub |
| Domain/DNS | Hostinger | Domain dikelola di Hostinger, aplikasi di Vercel |
| Analytics | Opsional | Hanya jika diperlukan dan privasinya jelas |

## 3. Inspirasi dari referensi

Referensi: [agusheryanto.com](https://agusheryanto.com/)

### Yang diambil sebagai inspirasi

- pengalaman one-page yang dinavigasi berdasarkan section;
- navigasi kapsul/floating yang tetap mudah dijangkau;
- latar gelap dengan kontras tinggi;
- aksen warna terang pada link dan highlight;
- hero yang langsung menjelaskan nama, peran, dan fokus;
- urutan identitas → bukti kerja → kemampuan → kontak;
- animasi kecil yang membantu orientasi.

### Batasan orisinalitas

Tidak menyalin teks, foto, logo, data pengalaman, struktur kode, SVG, aset, atau identitas visual secara pixel-for-pixel. Hasilnya boleh memiliki nuansa minimal dan gelap yang serupa, tetapi isi, token visual, layout detail, dan identitasnya harus milik Daffa.

## 4. Guardrail agar tidak terlihat seperti website AI

Ketentuan ini berlaku sepanjang desain dan implementasi.

### Hindari

- hero gradient ungu-biru sebagai identitas utama;
- semua section menjadi grid card seragam;
- emoji sebagai ikon navigasi atau skill;
- Tailwind/shadcn default tanpa kustomisasi;
- copy template: “empower”, “seamlessly”, “unlock your potential”, dan sejenisnya;
- testimonial tanpa nama, jabatan, konteks, dan izin;
- CTA “Get Started” saat tidak ada produk atau onboarding;
- link footer mati atau placeholder `#`;
- halaman contact/legal kosong;
- klaim, angka, atau detail yang tidak dapat dibuktikan.

### Terapkan

- headline menyebut peran, konteks, atau masalah yang Daffa bantu;
- gunakan ikon SVG dengan library/lisensi jelas atau ikon buatan sendiri;
- variasikan layout berdasarkan fungsi: timeline untuk pengalaman, daftar bermakna untuk skill, feature layout untuk proyek, dan form untuk kontak;
- buat token visual sendiri: warna, radius, border, shadow, typography, spacing, hover, focus, dan breakpoint;
- tulis copy dengan kata kerja konkret dan detail nyata;
- setiap proyek memuat masalah, kontribusi, teknologi, hasil, dan link yang valid;
- jika belum ada testimonial, hilangkan section tersebut atau ganti dengan “catatan proses”;
- CTA harus sesuai aksi nyata, misalnya “Lihat proyek” atau “Hubungi saya”;
- uji semua link dan isi setiap halaman yang ditautkan.

### Arah visual

- dasar navy/charcoal gelap, bukan hitam polos;
- satu warna signature yang konsisten, misalnya mint/teal;
- gradient hanya sebagai aksen tipis pada teks atau glow;
- kombinasi section terbuka, garis pemisah, panel editorial, dan beberapa kartu yang memang diperlukan;
- satu font sans-serif utama dengan hierarchy kuat;
- ikon SVG konsisten ukuran dan stroke;
- motion halus dan menghormati `prefers-reduced-motion`.

## 5. Arsitektur informasi

Urutan one-page yang disarankan:

1. **Hero** — nama, peran, positioning, status/ketersediaan, dan dua CTA nyata.
2. **About** — latar, cara bekerja, lokasi/timezone bila relevan, dan fakta personal yang benar.
3. **Experience** — timeline/daftar peran, periode, organisasi, kontribusi, dan bukti.
4. **Skills** — kemampuan dikelompokkan berdasarkan konteks, bukan badge acak.
5. **Projects** — proyek pilihan dengan konteks, peran, stack, hasil, screenshot, repository/demo.
6. **Education/Learning** — pendidikan, kursus, sertifikasi, atau proses belajar relevan.
7. **Contact** — email langsung dan/atau form yang benar-benar terkirim.
8. **Footer** — copyright, sosial aktif, resume jika ada, legal hanya jika relevan.

Halaman lanjutan:

- `/projects/[slug]` untuk studi kasus;
- `/resume` untuk resume HTML yang mudah dibaca;
- `/privacy` dan `/terms` jika analytics/form/cookie memerlukannya.

## 6. Struktur teknis target

```text
daffaayyasy-portfolio/
├── public/
│   ├── images/
│   ├── icons/
│   ├── resume.pdf
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   └── projects/[slug]/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── icons/
│   ├── content/
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── education.ts
│   └── lib/
│       ├── metadata.ts
│       └── utils.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── README.md
└── ROADMAP.md
```

Data personal disimpan di `src/content`; komponen hanya menampilkannya. Perubahan isi tidak perlu mengubah banyak JSX.

## 7. Alur pengerjaan

### Fase 0 — Kumpulkan informasi

Siapkan:

- nama dan peran utama;
- bio 2–4 kalimat dengan gaya bicara personal;
- 3–6 proyek paling kuat;
- pengalaman kerja/organisasi/freelance;
- skill yang benar-benar dikuasai;
- pendidikan, sertifikasi, atau proses belajar;
- foto/avatar jika ingin digunakan;
- email kerja dan sosial yang aktif;
- resume, screenshot, logo, serta izin penggunaan;
- target utama: recruiter, klien, komunitas, atau kombinasi.

**Output:** content brief dan daftar aset. Jangan membuat klaim sebelum datanya tersedia.

### Fase 1 — Inisialisasi Next.js

**Tool:** Node.js LTS, npm/pnpm, terminal, VS Code, dan Git.

```bash
npx create-next-app@latest daffaayyasy-portfolio
cd daffaayyasy-portfolio
npm run dev
```

Pilih TypeScript dan App Router saat wizard berjalan. Setelah project dibuat:

```bash
npm run lint
npm run build
git init
git add .
git commit -m "chore: initialize portfolio"
```

**Output:** project berjalan lokal, lint/build bersih, dan commit pertama tersedia.

### Fase 2 — Fondasi visual

**Tool:** CSS, browser DevTools, Figma/Penpot opsional.

Tentukan sebelum membuat section:

- palet warna berbentuk token;
- font dan hierarchy heading/body/label;
- container maksimum dan grid utama;
- spacing scale, radius, border, dan shadow;
- focus ring keyboard;
- hover/active/disabled state;
- breakpoint mobile/tablet/desktop;
- aturan motion dan reduced motion.

Tailwind boleh dipakai, tetapi utility dan token proyek harus dikustomisasi. Jangan meninggalkan tampilan starter template.

**Output:** mini design system dan contoh komponen dasar.

### Fase 3 — Content model dan copy

**Tool:** TypeScript, notes/Markdown, spreadsheet opsional.

Contoh model proyek:

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  stack: string[];
  outcome?: string;
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
};
```

Copy harus menjawab: siapa Daffa, apa yang dibuat, bagaimana cara bekerja, dan bagaimana menghubungi. Semua contoh wajib diganti fakta Daffa sebelum production.

**Output:** teks utama dan data proyek siap ditampilkan.

### Fase 4 — Implementasi UI

Urutan implementasi:

1. `layout.tsx`: metadata, font, dan global shell.
2. Header/navigation: anchor link, menu mobile, active/focus state.
3. Hero: positioning dan CTA nyata.
4. About dan experience: narasi serta timeline.
5. Skills: pengelompokan yang bermakna.
6. Projects: layout bervariasi dan bukti proyek.
7. Education/learning.
8. Contact dan footer.
9. `not-found.tsx` dan detail proyek jika termasuk scope.

Gunakan Server Components sebagai default. Gunakan Client Component hanya untuk state atau browser API, seperti menu mobile atau filter proyek.

**Output:** halaman dapat dibaca dari atas ke bawah dan semua CTA memiliki tujuan.

### Fase 5 — Aset, aksesibilitas, dan SEO

**Aset:** kompres gambar, gunakan format modern bila sesuai, beri `alt` bermakna, dan jangan mengunggah rahasia.

**Aksesibilitas:**

- heading tidak melompat;
- navigasi keyboard berfungsi;
- semua link/tombol punya label jelas;
- kontras cukup;
- form memiliki label, validasi, dan pesan error;
- animasi mengikuti `prefers-reduced-motion`;
- skip link dan focus state tersedia.

**SEO/share:**

- title dan description khusus Daffa;
- canonical `https://daffaayyasy.com`;
- Open Graph image dan favicon;
- sitemap/robots bila diperlukan;
- structured data hanya dengan data benar;
- preview link diuji.

### Fase 6 — QA lokal

Jalankan:

```bash
npm run lint
npm run build
```

Uji pada mobile 320–390 px, tablet, desktop lebar, keyboard-only, reduced motion, dan browser yang tersedia. Cek juga 404, gambar gagal dimuat, loading/error state, email/form, resume, link sosial, serta internal link.

Gunakan Lighthouse untuk Performance, Accessibility, Best Practices, dan SEO. Catat masalah, perbaiki, lalu ulangi pemeriksaan.

### Fase 7 — Hubungkan ke GitHub

1. Buat repository baru di GitHub, misalnya `daffaayyasy-portfolio`.
2. Pastikan `.gitignore` mengabaikan `node_modules`, `.next`, `.env*` (kecuali `.env.example`).
3. Hubungkan repository lokal:

```bash
git remote add origin https://github.com/USERNAME/daffaayyasy-portfolio.git
git branch -M main
git push -u origin main
```

4. Pola kerja berikutnya:

```bash
git status
git add .
git commit -m "feat: add portfolio sections"
git push
```

5. Gunakan branch untuk fitur besar, misalnya `feat/project-case-study`, lalu merge lewat Pull Request.

Jangan commit API key, password, token, `.env.local`, atau data pribadi yang tidak ingin dipublikasikan. Jika secret terlanjur masuk Git, hapus dari history dan rotate secret tersebut.

**Output:** GitHub menjadi sumber kode utama dan perubahan memiliki jejak commit.

### Fase 8 — Deploy ke Vercel

1. Masuk Vercel dan pilih **Add New → Project**.
2. Import repository GitHub.
3. Biarkan Vercel mendeteksi Next.js.
4. Tambahkan environment variable hanya bila diperlukan.
5. Deploy branch `main`.
6. Uji URL `*.vercel.app`.
7. Aktifkan preview deployment untuk Pull Request.
8. Jika build gagal, periksa deployment log, perbaiki lokal, lalu push.

Setiap push ke `main` akan membuat deployment production baru.

**Output:** website berjalan di URL Vercel.

### Fase 9 — Hubungkan domain Hostinger ke Vercel

Hostinger menjadi registrar/DNS; Vercel menjadi hosting aplikasi.

1. Di Vercel buka **Project → Settings → Domains**, lalu tambahkan `daffaayyasy.com` dan, bila perlu, `www.daffaayyasy.com`.
2. Salin record DNS yang ditampilkan Vercel.
3. Di Hostinger buka pengelolaan DNS domain.
4. Tambahkan/ubah record sesuai instruksi Vercel. Umumnya root memakai A record dan `www` memakai CNAME, tetapi nilai pastinya harus mengikuti dashboard Vercel.
5. Hapus record lama yang bentrok hanya setelah targetnya jelas.
6. Tunggu propagasi DNS.
7. Tunggu status domain verified dan HTTPS aktif di Vercel.
8. Pilih satu domain utama dan redirect versi lainnya.

Jangan menebak nilai IP/CNAME dari tutorial lama. Nilai di project Vercel adalah sumber kebenaran saat setup.

**Output:** `https://daffaayyasy.com` membuka portfolio dengan HTTPS.

### Fase 10 — Launch dan pemeliharaan

Sebelum diumumkan:

- cek seluruh data personal dan link;
- kirim test email/form dari lebih dari satu perangkat;
- cek metadata dan social preview;
- cek deployment/domain;
- uji canonical, sitemap, robots, dan 404;
- jalankan Lighthouse setelah live.

Pemeliharaan berkala: perbarui proyek/resume, cek link, update dependency dengan membaca changelog, periksa error deployment, dan pastikan aset pihak ketiga masih berizin.

## 8. Tool dan kegunaannya

| Tool | Kegunaan | Status |
| --- | --- | --- |
| Node.js LTS | Menjalankan toolchain Next.js | Wajib |
| npm atau pnpm | Install dependency dan script | Wajib, pilih satu |
| VS Code | Menulis dan menavigasi kode | Disarankan |
| Git | Version control lokal | Wajib |
| GitHub | Repository dan Pull Request | Wajib |
| Next.js | Framework dan routing | Wajib |
| TypeScript | Type checking dan maintainability | Wajib |
| CSS/CSS Modules | Styling orisinal | Disarankan |
| Vercel | Build, preview, dan hosting | Wajib |
| Hostinger DNS | Domain dan DNS | Wajib |
| Figma/Penpot | Wireframe dan eksplorasi style | Opsional |
| Lighthouse | Audit performa, aksesibilitas, SEO | Disarankan |
| Browser DevTools | Responsive/debugging/network | Wajib |
| Resend/Formspree | Pengiriman form kontak | Opsional |

## 9. Aturan Git

- `main` selalu dalam kondisi dapat dideploy.
- Fitur besar memakai branch `feat/...`; perbaikan memakai `fix/...`.
- Commit menjelaskan perubahan: `feat: add project case study`.
- Sebelum merge: lint, build, link check, dan Vercel preview harus lolos.
- README harus menjelaskan cara menjalankan project dan environment variable.
- Repository publik tidak boleh berisi secret.

## 10. Definition of Done

- [ ] Semua section utama memiliki isi nyata.
- [ ] Tidak ada placeholder, lorem ipsum, CTA palsu, atau link mati.
- [ ] Desain terinspirasi referensi tetapi tidak menyalin aset/identitas.
- [ ] Tidak memakai emoji sebagai sistem ikon.
- [ ] Layout tidak berupa kumpulan card seragam.
- [ ] Token visual dan komponen dasar dikustomisasi.
- [ ] Mobile, tablet, dan desktop nyaman digunakan.
- [ ] Keyboard, focus state, contrast, alt text, dan reduced motion diperiksa.
- [ ] `npm run lint` dan `npm run build` berhasil.
- [ ] GitHub terhubung dan bersih dari secret.
- [ ] Vercel preview/production berhasil.
- [ ] Domain utama dan HTTPS aktif.
- [ ] Metadata, favicon, OG image, dan 404 tersedia.
- [ ] Email/form kontak benar-benar diuji.
- [ ] Legal page hanya ditampilkan bila relevan dan berisi.

## 11. Data yang perlu disiapkan Daffa

1. Peran utama yang ingin ditonjolkan.
2. Bahasa website dan target pengunjung.
3. Proyek yang boleh dipublikasikan.
4. Kontribusi pribadi pada setiap proyek.
5. Link demo/repository yang aktif.
6. Email dan sosial yang ingin ditampilkan.
7. Resume, foto, screenshot, logo, atau testimonial berizin.
8. Pilihan email langsung atau form kontak.
9. Nama repository GitHub.

## 12. Urutan kerja praktis

1. Isi data pada bagian 11 dan kumpulkan aset.
2. Kunci wireframe dan mini design system.
3. Inisialisasi project Next.js.
4. Implementasikan one-page dengan data nyata.
5. Jalankan QA lokal.
6. Buat repository GitHub dan push.
7. Import repository ke Vercel.
8. Hubungkan domain Hostinger berdasarkan record Vercel.
9. Jalankan launch checklist.
10. Pelihara konten melalui commit berikutnya.

## 13. Decision log

| Tanggal | Keputusan | Alasan | Status |
| --- | --- | --- | --- |
| 2026-08-24 | Mulai dari one-page portfolio | Cepat divalidasi dan cocok untuk konten personal awal | Disepakati |
| 2026-08-24 | Next.js + TypeScript + Vercel | Sesuai kebutuhan dan alur deploy sederhana | Disepakati |
| 2026-08-24 | Inspirasi referensi tanpa menyalin | Menjaga karakter dan orisinalitas | Disepakati |
| 2026-08-24 | Menghindari pola AI-generic | Menjadi guardrail konten dan visual | Disepakati |

