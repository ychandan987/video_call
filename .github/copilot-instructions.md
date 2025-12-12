# Copilot / AI Agent Instructions for VideoCall

This project is a small React + Vite single-page app (SPA) that provides a starting point for a video-room feature. Keep guidance specific and actionable for this codebase.

- **Entry points:** `src/main.jsx` mounts the app; `src/App.jsx` defines routes via `createBrowserRouter` and `RouterProvider`.
- **Primary components:** `src/components/HomePage.jsx` (room listing / join UI), `src/components/VideoPage.jsx` (room UI / WebRTC + signaling). Both are currently empty — implement features here.
- **Routing pattern:** routes are defined inline in `src/App.jsx`. Key route: `/room/:id` — use `useParams()` from `react-router-dom` to access `id` in `VideoPage.jsx`.

- **Build / dev / lint commands (from `package.json`):**
  - `npm run dev` — start Vite dev server (HMR)
  - `npm run build` — production build
  - `npm run preview` — preview the production build
  - `npm run lint` — run ESLint across the project

- **Vite & plugins:** configured in `vite.config.js` with `@vitejs/plugin-react`. Note `vite` is pinned to `rolldown-vite@7.2.5` via `package.json` overrides.

- **Conventions & patterns to follow**
  - Keep UI components in `src/components/` and export them as default exports.
  - Import component-scoped CSS at the top of the component file (project uses `index.css` and `App.css`).
  - Use `createBrowserRouter` and `RouterProvider` in `App.jsx` (current pattern) rather than switching to a different router setup.
  - Route components should be pure React components that read route params with `useParams()` and location/state with `useLocation()` when needed.

- **Video / signaling guidance (where to implement):**
  - Implement UI and WebRTC logic in `src/components/VideoPage.jsx`. Use the path param `:id` as the room name/ID.
  - Keep signaling (socket or server API calls) decoupled from raw WebRTC device handling: create a small `signaling/` helper module under `src/` if needed (e.g., `src/signaling/signal.js`).
  - Prefer explicit lifecycle hooks: initialize media / connections in `useEffect` and clean up on unmount.

- **Examples**
  - Read route param inside `VideoPage.jsx`:

```jsx
import { useParams } from 'react-router-dom'

export default function VideoPage(){
  const { id } = useParams()
  // id is the room id from /room/:id
}
```

- **Files to inspect when working on features**
  - App bootstrap: `src/main.jsx`
  - Routes and high-level layout: `src/App.jsx`
  - Component directory: `src/components/` (HomePage.jsx, VideoPage.jsx)
  - Config: `vite.config.js`, `eslint.config.js` (lint rules)

- **Testing & CI notes**
  - There are no tests defined in `package.json`. If adding tests, prefer lightweight unit tests for utils and integration tests for signaling flows.

- **Common pitfalls / project-specific gotchas**
  - `react-router-dom` v7 is used — follow the `createBrowserRouter` and `RouterProvider` APIs in `App.jsx`.
  - `vite` is aliased to `rolldown-vite` in `package.json` — unusual; be cautious when upgrading `vite` or plugins.

If anything here is unclear or you'd like more detail (examples for signaling, WebRTC setup, or suggested small refactors), tell me which area to expand. 
