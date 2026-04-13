# SupaStack — React + Node.js + Supabase Template

A production-ready full-stack starter with authentication, API routes, database integration, and a polished dark-mode UI.

## Tech Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Frontend   | React 19, React Router 7, Vite |
| Backend    | Node.js, Express               |
| Database   | Supabase (Postgres)            |
| Auth       | Supabase Auth                  |
| Styling    | Vanilla CSS (dark glassmorphism) |

## Project Structure

```
├── client/                    # React frontend (Vite)
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/           # React context providers
│   │   │   └── AuthContext.jsx
│   │   ├── lib/               # Utility libraries
│   │   │   └── supabaseClient.js
│   │   ├── pages/             # Route-level page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx            # Root component with routes
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles / design system
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                    # Node.js backend (Express)
│   ├── lib/
│   │   └── supabaseAdmin.js   # Supabase service-role client
│   ├── middleware/
│   │   └── auth.js            # JWT verification middleware
│   ├── routes/
│   │   ├── health.js          # GET /api/health
│   │   └── users.js           # GET /api/users/me (protected)
│   ├── index.js               # Express server entry
│   └── package.json
│
├── .env.example               # Environment variable template
├── .gitignore
├── package.json               # Root scripts (concurrently)
└── README.md
```

## Quick Start

### 1. Install Node.js

Make sure [Node.js](https://nodejs.org/) (v18+) is installed.

### 2. Install dependencies

```bash
npm run install:all
```

### 3. Configure environment

```bash
cp .env.example .env
```

Fill in your Supabase credentials from [supabase.com/dashboard](https://supabase.com/dashboard) → Settings → API.

### 4. Run in development

```bash
npm run dev
```

This starts both the Vite dev server (`:5173`) and the Express API (`:3001`) concurrently. The Vite dev server proxies `/api/*` requests to Express automatically.

## Features

- **Authentication** — Email/password sign-up and sign-in via Supabase Auth, with session persistence and an `AuthContext` provider.
- **Protected Routes** — `ProtectedRoute` component redirects unauthenticated users to `/login`.
- **API Server** — Express backend with structured routes, auth middleware that validates Supabase JWTs, and a service-role admin client for server-side operations.
- **Health Check** — Dashboard displays live server status via `GET /api/health`.
- **Premium UI** — Dark glassmorphism theme with gradient accents, smooth animations, responsive layouts, and the Inter typeface.
- **Developer Experience** — Vite HMR, Node `--watch` for server auto-reload, and a single `npm run dev` command.

## Adding New Features

### New API route

1. Create `server/routes/myRoute.js`
2. Register it in `server/index.js`: `app.use('/api/my-route', myRouter)`

### New page

1. Create `client/src/pages/MyPage.jsx`
2. Add a `<Route>` in `client/src/App.jsx`
3. Wrap with `<ProtectedRoute>` if auth is required

### Database queries

```js
// Client-side (respects RLS)
import { supabase } from './lib/supabaseClient';
const { data, error } = await supabase.from('my_table').select('*');

// Server-side (bypasses RLS)
import { supabaseAdmin } from './lib/supabaseAdmin.js';
const { data, error } = await supabaseAdmin.from('my_table').select('*');
```

## License

MIT
