# Next.js Project

This is a [Next.js](https://nextjs.org) project initialized with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setting Up Your Dating App Project

To get started with your dating app project, run the following commands:

```bash
npx create-next-app@latest dating-app --typescript --tailwind
cd dating-app
npm install zustand axios react-hook-form @heroicons/react framer-motion

```

### Install Lib

````
npm install next react react-dom
npm install -D typescript @types/react @types/node
npm install framer-motion axios

````

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

````
/src
  /app
    layout.tsx
    page.tsx
    /(auth)
      login/page.tsx
      register/page.tsx
    /(main)
      discover/page.tsx
      matches/page.tsx
      messages/page.tsx
      profile/page.tsx
      notifications/page.tsx
  /components
    /ui
      Button.tsx
      Card.tsx
      Input.tsx
      Avatar.tsx
      Badge.tsx
      SwipeControls.tsx
      Toast.tsx
    /icons
      AppleIcons.tsx
      MaterialIcons.tsx
    /navigation
      BottomNav.tsx
      TabBar.tsx
    /profile
      ProfileHeader.tsx
      EditProfileForm.tsx
    /discover
      SwipeCard.tsx
    /matches
      MatchCard.tsx
    /messages
      MessageBubble.tsx
      ConversationList.tsx
  /constants
    theme.ts
    colors.ts
    endpoints.ts
  /stores
    authStore.ts
    userStore.ts
    matchStore.ts
    notificationStore.ts
  /features
    /auth
      LoginForm.tsx
      RegisterForm.tsx
    /discover
      ProfileCard.tsx
      DiscoveryScreen.tsx
    /matches
      MatchesList.tsx
      ChatScreen.tsx
    /profile
      ProfileScreen.tsx
      EditProfileScreen.tsx
  /hooks
    useAuth.ts
    useMatches.ts
    useSwipe.ts
  /utils
    api.ts
    date.ts
    validation.ts
    
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

### link backend

````
https://github.com/ugunNet21/express-dating

````