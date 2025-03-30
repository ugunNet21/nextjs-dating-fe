# Next.js Project

This is a [Next.js](https://nextjs.org) project initialized with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setting Up Your Dating App Project

To get started with your dating app project, run the following commands:

```bash
npx create-next-app@latest dating-app --typescript --tailwind
cd dating-app
npm install zustand axios react-hook-form @heroicons/react framer-motion

```

### Struktur

````
/src
  /app
    layout.tsx
    page.tsx
  /components
    /ui
      Button.tsx
      Card.tsx
    /icons
      AppleIcons.tsx
  /constants
    theme.ts
  /stores
    authStore.ts
  /features
    /auth
      LoginForm.tsx
    /discover
      ProfileCard.tsx
````

### Getting Started

````
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````
