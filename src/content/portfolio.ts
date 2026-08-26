export const profile = {
  name: "Daffa Ayyasy",
  shortName: "DA",
  role: "Digital builder & software enthusiast",
  location: "Jakarta, Indonesia",
  availability: "Available",
  email: "hello@daffaayyasy.com",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saya merancang pengalaman digital yang tenang, jelas, dan terasa berguna.",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at lectus sed lorem posuere tincidunt. Saya menikmati proses mengubah ide yang masih kabur menjadi produk yang bisa dipahami dan digunakan.",
};

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
    period: "2024 — Sekarang",
    role: "Software Developer",
    company: "Placeholder Studio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mengembangkan antarmuka dan alur produk dengan perhatian pada detail kecil.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mengevaluasi kebutuhan dan merapikan masalah menjadi langkah kerja yang jelas.",
      "Integer at lectus sed lorem posuere tincidunt. Berkolaborasi dengan tim untuk membangun pengalaman digital yang lebih terarah.",
      "Pellentesque habitant morbi tristique senectus et netus. Menjaga kualitas implementasi melalui review dan iterasi.",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Example Works",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Berkolaborasi dengan tim untuk membuat pengalaman web yang cepat dan mudah dipelihara.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mengubah kebutuhan produk menjadi antarmuka yang responsif.",
      "Donec vitae orci sed dolor tincidunt commodo. Menyusun komponen agar lebih mudah dirawat dan digunakan ulang.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Independent Learner",
    company: "Personal Practice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Membangun proyek kecil untuk memahami dasar produk, kode, dan komunikasi.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Membangun proyek kecil untuk melatih konsistensi dan problem solving.",
      "Integer at lectus sed lorem posuere tincidunt. Mendokumentasikan proses belajar melalui eksperimen dan catatan teknis.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    description: "Building robust server-side applications and APIs",
    items: ["Node.js", "REST API", "API design", "Server logic", "TypeScript"],
  },
  {
    title: "Data & Caching",
    description: "Storing, managing and caching application data",
    items: ["SQL basics", "Data modeling", "JSON", "Caching concepts"],
  },
  {
    title: "DevOps & Tools",
    description: "Tools and environments for development and deployment",
    items: ["Git & GitHub", "Figma", "Vercel", "Responsive UI"],
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "Project Placeholder One",
    type: "Web experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sebuah studi kasus untuk menunjukkan cara saya merapikan masalah, struktur konten, dan interaksi.",
    stack: ["Next.js", "TypeScript", "CSS"],
  },
  {
    number: "02",
    title: "Project Placeholder Two",
    type: "Product interface",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eksplorasi tentang bagaimana informasi yang kompleks dapat dibuat lebih mudah dipindai.",
    stack: ["React", "Figma", "API"],
  },
  {
    number: "03",
    title: "Project Placeholder Three",
    type: "Learning project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proyek latihan untuk menguji pendekatan teknis dan membangun kebiasaan kerja yang lebih baik.",
    stack: ["JavaScript", "Git", "Responsive UI"],
  },
];

export const education = [
  {
    period: "2021 — 2025",
    title: "Bachelor of Placeholder Studies",
    place: "Placeholder University",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mendalami dasar teknologi informasi dan pengembangan perangkat lunak.",
      "Pellentesque habitant morbi tristique senectus et netus. Menyelesaikan berbagai proyek akademik dan eksplorasi mandiri.",
    ],
  },
  {
    period: "Ongoing",
    title: "Learning in public",
    place: "Books, courses, and shipped projects",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mengembangkan kemampuan melalui kursus, dokumentasi, dan proyek yang dipublikasikan.",
      "Integer at lectus sed lorem posuere tincidunt. Menguji pemahaman lewat implementasi nyata.",
    ],
  },
];
