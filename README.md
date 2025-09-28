# Facebook Clone — Frontend (React + Vite + Tailwind)

A lightweight Facebook-style social feed built with React, Vite, React Router, and Tailwind CSS. This project focuses on UI/UX and client-side behaviors using mock data.

## Features

- Minimal Facebook-like layout and navigation
- Home feed with posts, images, likes, and comments UI
- Create post input (mocked submit)
- Stories UI (static)
- Profile page route scaffold
- Responsive Tailwind styling

## Tech Stack

- React 18 (Vite)
- React Router DOM 6
- Tailwind CSS 3
- Heroicons 2 (React)
- Apollo Client + GraphQL (present in deps; not yet wired to an API)

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
npm run dev
```

3) Build for production

```bash
npm run build
```

4) Preview production build

```bash
npm run preview
```

## NPM Scripts (from `package.json`)

- `dev` — start Vite dev server
- `build` — build for production
- `preview` — preview the build locally
- `lint` — run ESLint

## Project Structure

```
facebook_clone_frontend/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ feed/
│  │  │  └─ Post.jsx
│  │  ├─ layout/
│  │  │  └─ Layout.jsx (referenced by App)
│  │  └─ shared/
│  │     ├─ Avatar.jsx
│  │     └─ Button.jsx
│  ├─ data/
│  │  └─ mockData.js
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ Profile.jsx
│  ├─ App.jsx
│  └─ App.css
├─ index.html
├─ package.json
└─ tailwind.config.js
```

## Routing

Routing is defined in `src/App.jsx` using `react-router-dom`:

- `/` → `Home`
- `/profile/:userId` → `Profile`

All pages are wrapped by `components/layout/Layout`.

## Key Components

- `components/layout/Layout` — shell layout (header/nav/content). Wraps all routes.
- `pages/Home.jsx` — feed screen. Includes:
  - Create Post UI (mock submission via console log)
  - Stories strip
  - Post list mapped from `posts`
- `components/feed/Post.jsx` — a single post card with:
  - Header (author + timestamp via `formatDate`)
  - Content (text + optional image)
  - Like/Comment/Share actions (UI-only)
  - Comments section toggle with input (mock submit)
- `components/shared/Avatar.jsx` — user avatar
- `components/shared/Button.jsx` — shared button primitives

## Data Layer (Mocked)

Located in `src/data/mockData.js`:

- Collections: `users`, `posts`, `comments`
- Helpers:
  - `getUserById(userId)`
  - `getPostsByUserId(userId)`
  - `getCommentsByPostId(postId)`
  - `formatDate(dateString)`

Note: In `Post.jsx`, comments are displayed via a local `getCommentById` placeholder for demo purposes. In a real app, you would source comments from `mockData.js` or an API.

## Styling

- Tailwind utilities with a custom Facebook-like palette are used throughout.
- See `tailwind.config.js` for configuration.

## GraphQL (Future-ready)

`@apollo/client` and `graphql` are included but not yet connected. You can swap the mock data with a GraphQL backend by:

- Creating an `ApolloClient` and wrapping the app in `ApolloProvider`
- Replacing helper calls with `useQuery`/`useMutation`

## Contributing / Next Steps

- Wire up real data fetching (REST or GraphQL)
- Implement authentication and user sessions
- Persist likes/comments and new posts
- Add notifications, messaging, and friend system
- Improve accessibility and add tests

## License

This project is for educational/demo purposes. Use at your discretion.
