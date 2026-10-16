# Business Card

A small React app that renders a digital business card. Built with React and Vite as a practice project for building and styling components.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) with `@vitejs/plugin-react`
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Getting Started

### Prerequisites

- Node.js (a current LTS release is recommended)
- npm

### Installation

```bash
git clone https://github.com/msn-del/business
cd business
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the local URL Vite prints in the terminal. The app is configured with a base path (see [Deployment](#deployment)), so the URL will include `/business/`.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Create a production build in `dist/`     |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Lint the project with Oxlint             |

## Project Structure

```
.
├── index.html          # HTML entry point, loads src/index.jsx
├── vite.config.js      # Vite config (React plugin + base path)
├── package.json
└── src/
    ├── index.jsx       # React entry point
    └── style.css       # Global styles
```

## Deployment

`vite.config.js` sets `base: '/business/'`, so the built app expects to be served from a subpath, as on GitHub Pages at `https://<username>.github.io/business/`.

1. Build the project:
   ```bash
   npm run build
   ```
2. Publish the contents of `dist/` to your host (for example the `gh-pages` branch or a GitHub Actions Pages workflow).

If you deploy somewhere else, such as the root of a domain, update or remove the `base` option in `vite.config.js`.

## License

Add a license of your choice here.
