# wanderlust

A travel blog built with React and Supabase — the site visitors read stories on, and a private admin panel where the site owner writes and publishes them.

🔗 **Live demo:** https://wanderlust-pi-one.vercel.app/

---

## Overview

Wanderlust is a travel-writing blog with a clean, editorial front end and a Supabase-backed content system behind it. Posts are organized by region (Asia, Europe, Americas, Middle East), stored in a Postgres database via Supabase, and managed through a password-protected admin panel — so publishing a new story doesn't require touching code or redeploying.

## Features

- 🏠 **Home** — hero section, latest 3 posts pulled live from the database, newsletter signup
- 📚 **Blog** — full post archive with category filtering (All / Asia / Europe / Americas / Middle East)
- 📖 **Post detail pages** — individual story view, fetched by ID from Supabase
- ✍️ **Admin panel** (`/admin`, auth-protected) — write, publish, and delete posts from a form, backed by Supabase
- 🔐 **Authentication** — Supabase Auth gates the admin panel; only the signed-in owner can publish or delete
- 📧 **Newsletter capture** — visitor emails saved to a `subscribers` table on the backend
- 🌙 **Dark mode** — toggle in the navbar, persisted across the session
- 📄 **About / Contact** pages

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router, Vite |
| Backend / Database | Supabase (Postgres, Auth) |
| Deployment | Vercel / Netlify |
| Linting | ESLint |

## Project Structure

```
src/
├─ components/      # Navbar, Footer
├─ pages/           # Home, Blog, Post, About, Contact, Login, Admin, SignUp
├─ supabase.js      # Supabase client setup
└─ data/            # Local post data (dev/reference)
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- A Supabase project (for your own posts/subscribers tables and auth)

### Installation

```bash
git clone https://github.com/yajursapra/wanderlust.git
cd wanderlust
npm install
```

### Environment variables

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run locally

```bash
npm run dev
```

App runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

## Database

Wanderlust expects two Supabase tables:
- **`posts`** — `title`, `region`, `category`, `date`, `time`, `description`, `body`, `image`
- **`subscribers`** — `email`

Admin access is controlled through Supabase Auth (email/password); only an authenticated session can reach `/admin` or write to `posts`.

## Roadmap

- [ ] Public reader accounts (sign-up currently UI-only)
- [ ] Comments on posts
- [ ] Search across posts

## Author

**Yajur Sapra**
[LinkedIn](https://www.linkedin.com/in/yajur-sapra/) · [GitHub](https://github.com/yajursapra)
