# Portfolio Website

A modern, responsive React.js portfolio website with multiple pages showcasing your work, skills, and contact information.

## Features

- 🏠 **Home Page** - Hero section with introduction and feature highlights
- 👤 **About Page** - Personal information and statistics
- 💼 **Skills Page** - Technical skills with progress bars
- 🛍️ **Products Page** - Portfolio projects showcase
- 📧 **Contact Page** - Contact form and information

## Technologies Used

- React 18
- React Router DOM
- Vite
- Modern CSS with CSS Variables
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   └── *.css (respective CSS files)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Contact Information

Edit `src/pages/Contact.jsx` to update:
- Email address
- Phone number
- Location
- Social media links

### Update Skills

Edit `src/pages/Skills.jsx` to modify the skills list and proficiency levels.

### Update Products

Edit `src/pages/Products.jsx` to add or modify your portfolio projects.

### Update About Section

Edit `src/pages/About.jsx` to customize your personal information and statistics.

### Change Colors

Modify CSS variables in `src/index.css`:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary accent color
- `--text-color`: Main text color
- `--bg-color`: Background color

## License

This project is open source and available for personal and commercial use.

