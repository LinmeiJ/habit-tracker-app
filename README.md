## Site to access:
https://habit-tracker-app-4uld.vercel.app/


# Habit Tracker App

A responsive React habit tracker with gamification features, including XP, levels,
streaks, achievements, daily challenges, and a mock leaderboard.

This project uses **Create React App** so it follows the guided practice commands:

```bash
npm install
npm start
```

The development site opens at:

```text
http://localhost:3000
```

## Requirements

- Node.js 18 or newer
- npm
- Git

Check your versions:

```bash
node --version
npm --version
git --version
```

## Run Locally

From the project folder:

```bash
npm install
npm start
```

Create React App will open the browser automatically. If it does not, visit:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

The optimized production files are created in the `build` folder.

## Project Structure

```text
habit-tracker-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── vercel.json
```

## Deploy Through GitHub and Vercel

1. Create an empty GitHub repository named `habit-tracker-app`.
2. From this project folder, run:

```bash
git init
git add .
git commit -m "Add habit tracker app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/habit-tracker-app.git
git push -u origin main
```

3. Import the GitHub repository into Vercel.
4. Vercel should detect Create React App automatically.
5. Use these settings only if Vercel asks:
   - Build command: `npm run build`
   - Output directory: `build`
6. Deploy.

Every future push to `main` will trigger another deployment.

## Available Commands

```bash
npm start
npm run build
npm test
```

## Data

All data is stored as local mock data. There is no backend or database.
