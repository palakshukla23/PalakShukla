# Palak Shukla — Portfolio

A responsive personal portfolio built with React and Vite. It showcases Palak's background, skills, projects, community experience, and contact details in a dark theme with cyan accents.

## Requirements

- **Node.js:** 18.0.0 or newer (required by Vite 5)
- **npm:** 9 or newer (supports the npm lockfile version used by this project)
- A modern browser

Check your installed versions:

```bash
node --version
npm --version
```

## Run locally

1. Clone the repository and enter the project directory:

   ```bash
   git clone <repository-url>
   cd palak-portfolio
   ```

2. Install the exact dependency versions recorded in `package-lock.json`:

   ```bash
   npm ci
   ```

   If you intentionally need to update dependencies or do not have a lockfile, use `npm install` instead.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite. The default is <http://localhost:5173/>.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create the optimized production site in `dist/`. |
| `npm run preview` | Serve the production build locally for a final check. Run `npm run build` first. |

## Technology versions

Versions below are the ranges declared in `package.json`; `package-lock.json` records the exact installed dependency versions.

| Package | Version |
| --- | --- |
| React | `^18.2.0` |
| React DOM | `^18.2.0` |
| Lucide React | `^0.300.0` |
| Vite | `^5.0.0` |
| Vite React plugin | `^4.2.1` |
| Tailwind CSS | `^3.4.0` |
| PostCSS | `^8.4.32` |
| Autoprefixer | `^10.4.16` |

The project uses JavaScript (ES modules), JSX, and CSS. No additional icon package is required beyond Lucide React.

## Project structure

```text
palak-portfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── data/
│   │   ├── projects.js      # Project descriptions, features, and link placeholders
│   │   └── skills.js        # Skill categories and icon mappings
│   ├── App.jsx              # Portfolio sections and interactive behavior
│   ├── index.css            # Theme, layout, responsive styles, and motion preferences
│   └── main.jsx             # React application entry point
├── index.html               # Page title, SEO/social metadata, and app mount point
├── package.json             # Scripts and dependency ranges
├── package-lock.json        # Reproducible dependency versions
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md
```

## Updating portfolio details

- Update project descriptions, technologies, and real repository/demo URLs in `src/data/projects.js`. URLs are intentionally left empty until verified links are available.
- Update skill names and categories in `src/data/skills.js`.
- The resume button stays disabled until a resume file is supplied and linked.
- The contact form validates its fields and opens a prefilled email draft addressed to `Palakshukla9876@gmail.com`. It does not submit to a server; sending the message requires the visitor's email application.
- The LinkedIn and email contact details, education, and experience are maintained in `src/App.jsx`.

## Production build and deployment

Build the site:

```bash
npm run build
```

The generated static site is placed in `dist/`. To test that build locally:

```bash
npm run preview
```

Deploy the contents of `dist/` to a static hosting provider such as Vercel, Netlify, or GitHub Pages. Configure the provider's build command as `npm run build` and its output directory as `dist`. For GitHub Pages under a repository subpath, configure Vite's `base` option in `vite.config.js` to match that path before deploying.

## Author

**Palak Shukla**
