# Profile App

A sleek, responsive portfolio/profile template inspired by YouTube channels — built using **React.js**, **TypeScript**, **Tailwind CSS**, **ShadCN**, and **DaisyUI**. This application allows tabbed navigation for sections like `Home`, `About`, `Projects`, `Courses`, and `Contact`.

## 📦 Tech Stack

- **React.js** — Component-based UI
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Beautiful Tailwind components
- **ShadCN/UI** — Advanced accessible UI components

## 🚀 Features

- Responsive layout
- Tabbed navigation bar
- Channel banner and profile section
- Cards for project/course sections
- Contact section with social media icons

## 🗂 Folder Structure

src/
├── assets/               # Images & icons
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── TabNav.tsx
│   ├── ProfileHeader.tsx
│   ├── Card.tsx
│   └── Footer.tsx
├── pages/                # Tabbed sections
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Courses.tsx
│   └── Contact.tsx
├── App.tsx               # Root component
├── main.tsx              # React DOM entry point
├── index.css             # Tailwind base styles
└── tailwind.config.ts    # Tailwind/DaisyUI config
