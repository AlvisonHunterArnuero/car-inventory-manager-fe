# 🏎️ Automotive Inventory Dashboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF.svg)](https://vitejs.dev/)

A high-performance, dark-themed car inventory management interface built with **React 19**, **Material UI**, and **Apollo GraphQL**. This project features a sophisticated automotive UI, custom filtering logic, and a fully mocked backend for seamless development. This serves as a frontend application for the car inventory management system.

<img width="1199" height="496" alt="Automotive Inventory Dashboard Screenshot" src="https://github.com/user-attachments/assets/8389b245-b785-4ccf-89b1-95e40e002005" />


## Video Demo

<video src="https://github.com/user-attachments/assets/09c1ba12-e3c0-4e6f-a76a-557e9f53d39a" controls width="100%"></video>

---

## � Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#️-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Browser Compatibility](#-browser-compatibility)
- [Troubleshooting](#-troubleshooting)
- [Running Tests](#-running-tests)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact & Support](#-contact--support)

---

## �🚀 Features

* **Real-time Inventory Browsing**: View a dynamic list of vehicles with high-fidelity imagery.
* **Advanced Filtering**: Filter by model name and manufacturing year with instant UI updates.
* **Custom Automotive Theme**: A bespoke Material UI 5/6 theme featuring a "Redline" dark mode aesthetic.
* **Mocked GraphQL Backend**: Powered by **MSW (Mock Service Worker)** to intercept Apollo Client queries, allowing for full-stack development without a live server.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
* **Add New Vehicles**: Form interface to add new cars to the inventory.
* **TypeScript Support**: Full type safety across the application.
* **Modern Testing Setup**: Vitest + React Testing Library for comprehensive test coverage.

---

## 🌐 Demo

> **Live Demo**: Coming soon!
>
> **Backend Repository**: [Link to backend repo - if applicable]

---

## 🛠️ Tech Stack

* **Frontend**: React 19 (Classic JSX Runtime)
* **Styling**: Material UI (MUI), Emotion CSS-in-JS
* **Data Fetching**: Apollo Client (GraphQL)
* **API Mocking**: Mock Service Worker (MSW)
* **Build Tool**: Vite 6.0 + TypeScript
* **Testing**: Vitest + React Testing Library
* **E2E Testing**: Cypress 14.4.1
* **Language**: TypeScript 5.7.2

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher (tested with v20.17.0)
- **npm**: v9.0.0 or higher (or yarn/pnpm equivalent)
- **Git**: For cloning the repository

You can verify your installations by running:
```bash
node --version
npm --version
git --version
```

---

## 📦 Installation & Setup

Because this project uses the cutting-edge React 19, standard installation may require flags to handle library peer dependencies.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AlvisonHunterArnuero/car-inventory-manager-fe.git
    ```
    Once cloned, navigate to the project directory, as follows:
     ```bash
    cd car-inventory-manager-fe
    ```

2.  **Install dependencies:**
    Due to the React 19 ecosystem transitions, use the `--legacy-peer-deps` flag to ensure compatibility:
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Initialize MSW:**
    ```bash
    npx msw init public --save
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

---

## 🎯 Available Scripts

In the project directory, you can run:

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with hot-reload |
| `npm run build` | Builds the app for production to the `dist` folder |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run test` | Runs tests in watch mode |
| `npm run test:ui` | Opens Vitest UI for interactive testing |
| `npm run test:run` | Runs all tests once (CI mode) |

---

## 📁 Project Structure

```
car-inventory-manager-fe/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images, icons, and other media
│   ├── components/      # React components
│   │   ├── AddCarForm.tsx
│   │   ├── CarCard.tsx
│   │   ├── CarDashboard.tsx
│   │   └── __tests__/   # Component tests
│   ├── graphql/         # GraphQL queries and mutations
│   │   └── queries.ts
│   ├── hooks/           # Custom React hooks
│   │   ├── useCarFilters.ts
│   │   ├── useCars.ts
│   │   └── __tests__/   # Hook tests
│   ├── mocks/           # MSW mock handlers
│   │   ├── browser.ts
│   │   └── handlers.ts
│   ├── test/            # Test utilities and setup
│   │   ├── setup.ts
│   │   └── test-utils.ts
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   ├── theme.ts         # MUI theme configuration
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

---

## 🔐 Environment Variables

Currently, this project does not require environment variables as it uses MSW for API mocking.

If you need to connect to a real backend in the future, create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-backend-api.com/graphql
VITE_ENABLE_MSW=false
```

> **Note**: Vite exposes environment variables prefixed with `VITE_` to your client-side code.

---

## 📡 API Documentation

This application uses GraphQL for data fetching. The schema is currently mocked using MSW.

### Available Queries

**Get All Cars**
```graphql
query GetCars {
  cars {
    id
    make
    model
    year
    price
    imageUrl
  }
}
```

**Add Car (Mutation)**
```graphql
mutation AddCar($input: CarInput!) {
  addCar(input: $input) {
    id
    make
    model
    year
    price
    imageUrl
  }
}
```

### Mock Data Location
Mock handlers are defined in `src/mocks/handlers.ts`. You can modify the mock data there for development purposes.

---

## 🌍 Browser Compatibility

This application is compatible with:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer: Not supported

**Minimum Browser Versions:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🔧 Troubleshooting

### "React is not defined"
This project utilizes the `classic` JSX runtime in `vite.config.ts` to maximize compatibility with certain MUI/Emotion utilities. Ensure every `.tsx` file begins with:
```tsx
import React from 'react';
```

### Dependency Conflicts
If you encounter ERESOLVE unable to resolve dependency tree, clean your cache and reinstall with the legacy flag:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### MSW Not Working
If the mock service worker isn't intercepting requests:
1. Ensure you've run `npx msw init public --save`
2. Check that `public/mockServiceWorker.js` exists
3. Clear your browser cache and restart the dev server

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a custom port:
```bash
npm run dev -- --port 3000
```

---

## 🧪 Running Tests

This project uses Vitest for unit and component testing.

**Run tests in watch mode:**
```bash
npm run test
```

**Run tests once (CI mode):**
```bash
npm run test:run
```

**Open Vitest UI:**
```bash
npm run test:ui
```

### Test Coverage
To generate a test coverage report:
```bash
npm run test:run -- --coverage
```

---

## � Deployment

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AlvisonHunterArnuero/car-inventory-manager-fe)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and configure the build settings
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/car-inventory-manager-fe/',
  // ... rest of config
})
```

Then use [gh-pages](https://www.npmjs.com/package/gh-pages):
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] **Backend Integration**: Connect to a real GraphQL backend API
- [ ] **Authentication**: User login and role-based access control
- [ ] **Advanced Search**: Full-text search with multiple filters
- [ ] **Vehicle Details Page**: Detailed view for each vehicle
- [ ] **Image Upload**: Allow users to upload vehicle images
- [ ] **Export Functionality**: Export inventory to CSV/PDF
- [ ] **Dark/Light Mode Toggle**: User preference for theme
- [ ] **Pagination**: Handle large datasets efficiently
- [ ] **Sorting Options**: Sort by price, year, make, etc.
- [ ] **Favorites/Wishlist**: Save favorite vehicles
- [ ] **Analytics Dashboard**: Inventory statistics and insights
- [ ] **Multi-language Support**: i18n implementation

### Known Issues

- React 19 peer dependency warnings (expected, using legacy flag)
- Some MUI components require classic JSX runtime

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Use conventional commits format

### Code of Conduct

Please be respectful and constructive in all interactions. We're here to build something great together!

---

## �📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 🙏 Acknowledgments

- **[Material UI](https://mui.com/)** - For the excellent component library
- **[Apollo Client](https://www.apollographql.com/docs/react/)** - For GraphQL data management
- **[MSW](https://mswjs.io/)** - For seamless API mocking
- **[Vite](https://vitejs.dev/)** - For blazing-fast build tooling
- **[React Team](https://react.dev/)** - For React 19 and continuous innovation
- **[Vitest](https://vitest.dev/)** - For the modern testing framework

Special thanks to the open-source community for making projects like this possible!

---

## 📞 Contact & Support

**Maintainer**: Alvison Hunter Arnuero

- **GitHub**: [@AlvisonHunterArnuero](https://github.com/AlvisonHunterArnuero)
- **Repository**: [car-inventory-manager-fe](https://github.com/AlvisonHunterArnuero/car-inventory-manager-fe)

### Getting Help

- 🐛 **Bug Reports**: [Open an issue](https://github.com/AlvisonHunterArnuero/car-inventory-manager-fe/issues/new)
- 💡 **Feature Requests**: [Open an issue](https://github.com/AlvisonHunterArnuero/car-inventory-manager-fe/issues/new)
- 💬 **Questions**: [Start a discussion](https://github.com/AlvisonHunterArnuero/car-inventory-manager-fe/discussions)

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star! ⭐**

Made with ❤️ and ☕ by Alvison Hunter Arnuero

</div>