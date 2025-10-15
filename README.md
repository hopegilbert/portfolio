# Hope's Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **GitHub Pages** - Hosting and deployment

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd "Hope's Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Your site will be running at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deploying to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub (e.g., `portfolio`)

2. If your repository name is NOT `<username>.github.io`, update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repo name
})
```

3. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

4. Enable GitHub Pages in your repository settings:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

5. Push to the `main` branch to trigger deployment:
```bash
git push
```

Your site will be automatically deployed to:
- `https://<username>.github.io` (if repo name is `<username>.github.io`)
- `https://<username>.github.io/portfolio` (if repo name is `portfolio`)

### Subsequent Deployments

Simply push to the `main` branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Action will automatically build and deploy your changes.

## 📁 Project Structure

```
Hope's Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/                  # Static assets
├── src/
│   ├── App.tsx             # Main app component
│   ├── App.css             # Custom styles
│   ├── index.css           # Tailwind imports
│   └── main.tsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration

```

## 🎨 Customization

The current design is a clean, minimal placeholder. You can customize:

- **Colors**: Update Tailwind classes or extend the theme in `tailwind.config.js`
- **Content**: Edit `src/App.tsx` to add your own content
- **Sections**: Add new sections or components in the `src` directory
- **Styling**: Customize with Tailwind utilities or add custom CSS in `src/App.css`

## 📝 Next Steps

1. Add your personal information and bio
2. Showcase your projects with descriptions and links
3. Add contact information and social media links
4. Consider adding:
   - Project screenshots/images
   - Skills section
   - Resume/CV download
   - Blog posts
   - Dark mode toggle

## 📄 License

This project is open source and available for personal use.
# Portfolio - Photography Page Complete
