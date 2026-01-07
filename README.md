# 🏎️ Automotive Inventory Dashboard

A high-performance, dark-themed car inventory management interface built with **React 19**, **Material UI**, and **Apollo GraphQL**. This project features a sophisticated automotive UI, custom filtering logic, and a fully mocked backend for seamless development.

![Dashboard Preview]("https://github.com/user-attachments/assets/8389b245-b785-4ccf-89b1-95e40e002005")

<img width="1199" height="496" alt="image" src="https://github.com/user-attachments/assets/8389b245-b785-4ccf-89b1-95e40e002005" />

## 🚀 Features

* **Real-time Inventory Browsing**: View a dynamic list of vehicles with high-fidelity imagery.
* **Advanced Filtering**: Filter by model name and manufacturing year with instant UI updates.
* **Custom Automotive Theme**: A bespoke Material UI 5/6 theme featuring a "Redline" dark mode aesthetic.
* **Mocked GraphQL Backend**: Powered by **MSW (Mock Service Worker)** to intercept Apollo Client queries, allowing for full-stack development without a live server.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

* **Frontend**: React 19 (Classic JSX Runtime)
* **Styling**: Material UI (MUI), Emotion CSS-in-JS
* **Data Fetching**: Apollo Client (GraphQL)
* **API Mocking**: Mock Service Worker (MSW)
* **Build Tool**: Vite 6.0 + TypeScript
* **Testing**: Vitest + React Testing Library

## 📦 Installation & Setup

Because this project uses the cutting-edge React 19, standard installation may require flags to handle library peer dependencies.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/automotive-inventory-dashboard.git](https://github.com/your-username/automotive-inventory-dashboard.git)
    cd automotive-inventory-dashboard
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
###🧪 Running Tests
This project uses Vitest for unit and component testing.

```bash
npm run test
```
### 📜 License
Distributed under the MIT License. See LICENSE for more information.