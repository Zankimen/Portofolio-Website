export const profile = {
  name: "Muhammad Daffa' Ayyasy",
  shortName: "DA",
  role: "Software Engineer",
  location: "Yogyakarta, Indonesia",
  availability: "Fresh Graduate",
  email: "mayyas.md4@gmail.com",
  phone: "+62 821-3450-1114",
  phoneHref: "tel:+6282134501114",
  resumeUrl: "/cv/daffa-ayyasy-cv.pdf",
  focus: "Back-end development, cloud, and AI/ML",
  about:
    "Lulusan Informatika dari Universitas Sebelas Maret dengan minat pada pengembangan perangkat lunak dan kecerdasan buatan.",
  aboutDetail:
    "Berpengalaman membangun fitur back-end pada sistem manajemen proyek berbasis Laravel serta aplikasi Node.js dan cloud. Terbiasa bekerja dalam tim menggunakan Git, menerapkan Repository dan Service Layer, serta mengintegrasikan machine learning ke dalam produk perangkat lunak.",
};

export const socialLinks = [
  { label: "GitHub", icon: "github", href: "https://github.com/Zankimen" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/muhammaddaffa-ayyasy-a72b86329" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/zankimen/" },
] as const;

export const navigation = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Skills", href: "#skills", icon: "code" },
  { label: "Projects", href: "#projects", icon: "layers" },
  { label: "Education", href: "#education", icon: "graduation" },
  { label: "Contact", href: "#contact", icon: "mail" },
] as const;

export const experience = [
  {
    period: "Sep — Des 2025",
    role: "Back End Developer",
    company: "Indarchi Architect Team — PKBM d'VASTU",
    description:
      "Mengembangkan modul manajemen pekerja pada sistem manajemen proyek berbasis Laravel dengan frontend React dan Inertia.js di Klaten, Jawa Tengah.",
    details: [
      "Membangun fitur CRUD, penugasan pekerja ke proyek, serta pengelolaan role dan posisi pekerja pada setiap proyek.",
      "Mengimplementasikan presensi yang terintegrasi dengan halaman detail proyek, termasuk unggah dan tampilan foto profil pekerja.",
      "Menerapkan Repository Pattern, Service Layer, dan Form Request untuk memisahkan logika bisnis serta memvalidasi input.",
      "Berkolaborasi menggunakan Git dengan alur branching per anggota serta proses code review dan merge.",
    ],
  },
  {
    period: "Sep 2024 — Jan 2025",
    role: "Back-End Cohort — HealLink Capstone",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    description:
      "Mengembangkan back-end aplikasi prediksi kesehatan bersama tim lintas fungsi menggunakan Node.js, Hapi.js, machine learning, dan layanan Google Cloud.",
    details: [
      "Membangun RESTful API autentikasi register dan login dengan bcrypt untuk keamanan password.",
      "Mengintegrasikan inference model TensorFlow.js ke API prediksi kesehatan dan menyimpan riwayat prediksi di Google Cloud Firestore.",
      "Melakukan deployment layanan back-end menggunakan Docker di Google Cloud Platform.",
      "Menyelesaikan pembelajaran terstruktur Web Basic, JavaScript Basic, Back-End Basic, dan Cloud Engineer.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    description: "Teknologi utama untuk membangun aplikasi web dan layanan back-end",
    items: ["PHP", "Laravel", "JavaScript", "Node.js", "Hapi.js", "React", "Inertia.js"],
  },
  {
    title: "Cloud & Database",
    description: "Deployment, containerization, dan penyimpanan data aplikasi",
    items: ["Google Cloud", "Cloud Run", "Cloud Firestore", "MySQL", "Docker"],
  },
  {
    title: "AI & Machine Learning",
    description: "Fine-tuning, inference, dan optimasi model NLP",
    items: ["TensorFlow", "TensorFlow.js", "T5", "BART", "Optuna"],
  },
  {
    title: "Architecture & Tools",
    description: "Pola arsitektur, desain API, dan kolaborasi pengembangan",
    items: ["Git", "RESTful API Design", "Repository Pattern", "Service Layer", "Form Request"],
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "Peringkasan Otomatis Ulasan Film",
    type: "Tugas Akhir · 2025—Sekarang · NLP",
    description:
      "Mengembangkan abstractive summarization untuk lebih dari 900.000 ulasan IMDb melalui fine-tuning T5-Base dan BART-Base, optimasi Optuna TPE, serta perbandingan strategi pelatihan berdasarkan sentimen.",
    stack: ["TensorFlow", "T5", "BART", "Optuna", "IMDb"],
  },
  {
    number: "02",
    title: "HealLink Health Prediction API",
    type: "Bangkit Academy Capstone",
    description:
      "RESTful API untuk autentikasi dan prediksi kesehatan, mengintegrasikan TensorFlow.js dengan Firestore serta dideploy menggunakan Docker di Google Cloud Platform.",
    stack: ["Node.js", "Hapi.js", "TensorFlow.js", "Firestore", "Docker"],
  },
  {
    number: "03",
    title: "Modul Manajemen Pekerja",
    type: "Project Management System",
    description:
      "Modul Laravel untuk CRUD pekerja, penugasan dan role per proyek, presensi, serta foto profil dengan pemisahan logika melalui Repository dan Service Layer.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Git"],
  },
];

export const education = [
  {
    period: "2022 — 2026",
    title: "S1 Informatika",
    place: "Universitas Sebelas Maret",
    description: "Pendidikan sarjana Informatika dengan fokus pada pengembangan perangkat lunak dan kecerdasan buatan.",
    details: [
      "Mengerjakan tugas akhir mengenai peringkasan otomatis ulasan film menggunakan fine-tuning model T5-Base dan BART-Base.",
      "Mengeksplorasi optimasi hyperparameter serta perbandingan strategi pelatihan berdasarkan sentimen ulasan.",
    ],
  },
  {
    period: "Certifications",
    title: "Google Cloud & Cloud Run",
    place: "Google Cloud · Dicoding · Bangkit Academy",
    description: "Sertifikasi dan pembelajaran terstruktur mengenai pengembangan aplikasi serta cloud engineering.",
    details: [
      "Application Development with Cloud Run — Google Cloud.",
      "Menjadi Google Cloud Engineer — Dicoding dan Bangkit Academy.",
    ],
  },
];
