# Superior Campus Connect (Ascend University)

A modern, high-performance university portal built with React, TypeScript, and Tailwind CSS. This project serves as a comprehensive digital hub for students, faculty, and alumni of **Ascend University**.

## 🌟 Key Features

- **Dynamic Homepage**: Features a premium high-quality hero slider, program highlights, and latest university news.
- **Comprehensive Academic Portal**: Detailed sections for Undergraduate, Postgraduate, and Associate Degree programs.
- **Research & Innovation Hub**: Showcases university publications, research centers, and funding opportunities.
- **Student & Alumni Networks**: Dedicated spaces for student clubs, portals, and alumni success stories.
- **Modern UI/UX**: Built with a "Mobile-First" approach, featuring glassmorphism, smooth animations, and a premium Purple/Gold design system.

## 🚀 Technologies Used

- **Framework**: [React 18](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI elements (Hero, Navbar, Footer, etc.)
│   └── ui/         # Base shadcn components
├── pages/          # Main route components (About, Academics, StudentHub)
├── assets/         # Images, fonts, and static resources
├── hooks/          # Custom React hooks
├── lib/            # Utility functions (cn, etc.)
└── App.tsx         # Main routing and provider setup
```

## 🛠️ Local Development

Follow these steps to get the project running locally:

### 1. Clone the repository
```sh
git clone <repository-url>
cd superior-campus-connect
```

### 2. Install dependencies
```sh
npm install
# or if you use bun
bun install
```

### 3. Start development server
```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🎨 Design System

The project uses a custom design system defined in `src/index.css`:
- **Primary Color (University Purple)**: `hsl(275 70% 30%)`
- **Secondary Color (University Gold)**: `hsl(40 95% 55%)`
- **Typography**:
  - Headings: *Playfair Display* (Serif)
  - Body: *Source Sans 3* (Sans Serif)

---

*Developed for Ascend University - Empowering future leaders.*
