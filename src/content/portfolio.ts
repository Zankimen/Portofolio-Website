export const profile = {
  name: "Daffa Ayyasy",
  shortName: "DA",
  role: "Digital builder & software enthusiast",
  location: "Jakarta, Indonesia",
  availability: "Available for selected conversations",
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
  { label: "Contact", href: "#contact", icon: "mail" },
] as const;

export const experience = [
  {
    period: "2024 — Sekarang",
    role: "Software Developer",
    company: "Placeholder Studio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mengembangkan antarmuka dan alur produk dengan perhatian pada detail kecil.",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Example Works",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Berkolaborasi dengan tim untuk membuat pengalaman web yang cepat dan mudah dipelihara.",
  },
  {
    period: "2022 — 2023",
    role: "Independent Learner",
    company: "Personal Practice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Membangun proyek kecil untuk memahami dasar produk, kode, dan komunikasi.",
  },
];

export const skillGroups = [
  { title: "Build", items: ["TypeScript", "React", "Next.js", "HTML & CSS"] },
  {
    title: "Think",
    items: ["Product thinking", "Design systems", "Content structure", "Problem solving"],
  },
  { title: "Work with", items: ["Git & GitHub", "Figma", "REST API", "Vercel"] },
];

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
  },
  {
    period: "Ongoing",
    title: "Learning in public",
    place: "Books, courses, and shipped projects",
  },
];
