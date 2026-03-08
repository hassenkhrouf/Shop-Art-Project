## Shop Art Project

Digital art storefront built with React and Firebase. It showcases AI‑generated artworks, lets visitors browse artworks by card, and provides an admin dashboard to manage the catalog and incoming orders/comments.

### Features

- **Public storefront**
  - Responsive home page with hero carousel and navigation.
  - Lazy‑loaded gallery of artworks pulled from Firebase Realtime Database (`MyWorks/`).
  - Artwork detail page with large preview and order form modal.
- **Contact & orders**
  - Contact form for general inquiries (stored under `/Comments`).
  - Order form that captures artwork information and saves to `/Orders` in Firebase.
- **Admin dashboard**
  - Email/password authentication using Firebase Auth.
  - Admin area to add new artworks (title, description, price, image URL).
  - Inbox, orders and files sections (layout prepared, can be extended).

### Tech stack

- **Frontend**: React 18, React Router, Bootstrap 5, AOS (scroll animations)
- **Backend / data**: Firebase v9 (modular) – Auth + Realtime Database
- **Tooling**: Create React App, ESLint (CRA defaults), npm / yarn

### Getting started

- **1. Install dependencies**
  - With npm: `npm install`
  - Or with yarn: `yarn install`

- **2. Configure Firebase**
  - Create a Firebase project and enable:
    - Email/password authentication.
    - Realtime Database (in test or locked‑down mode, as you prefer).
  - In `src/utils/fire.js`, set your Firebase config (API key, project ID, etc.).  
    Do not commit secrets that should stay private.

- **3. Run the app in development**
  - `npm start` or `yarn start`
  - Open `http://localhost:3000` in your browser.

- **4. Production build**
  - `npm run build` or `yarn build`
  - The optimized static build is output to the `build` folder and can be deployed to any static host.

### Project structure (high level)

- **`src/components/Home.js`** – Landing page, carousel, “What We Offer ?” section, gallery + contact.
- **`src/components/Lazy.js`** – Fetches artworks from Firebase and renders responsive cards.
- **`src/components/Card.js`** – Single artwork detail + order modal.
- **`src/components/admin/*`** – Admin views (`Dashboard`, `AddWork`, `Inbox`, `Orders`, `Files`).
- **`src/components/Login.js`** – Admin login form using Firebase Auth.
- **`src/ressources`** – Static images and icons used across the UI.

### Scripts

- **`npm start` / `yarn start`**: Start the dev server.
- **`npm test` / `yarn test`**: Run tests (CRA default setup).
- **`npm run build` / `yarn build`**: Create a production build.

### Deployment

Any static hosting that can serve the `build` folder will work (e.g. GitHub Pages, Netlify, Vercel, Firebase Hosting).  
Follow the host’s documentation to point it at the `build` directory produced by `npm run build`.
