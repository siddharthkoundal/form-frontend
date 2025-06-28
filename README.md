# Multi-Step Form (React + Vite)

This project is a multi-step/tabbed form built with **React** and **Vite**.
It demonstrates form validation, tab navigation, and state management using React hooks.

## Features

- Multi-step/tabbed form UI (Profile, Interests, Settings)
- Field validation for each step
- Error messages for invalid input
- Navigation between steps (Prev/Next)
- Final submission with notification
- Responsive and clean UI

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
  components/
    Profile.jsx
    Interests.jsx
    Settings.jsx
    TabForm.jsx
  App.jsx
  App.css
  main.jsx
  index.css
```

## Usage

- Fill out each step of the form.
- Use **Next** and **Prev** to navigate.
- Errors will be shown for invalid or missing fields.
- On the last step, click **Submit** to complete the form.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

\*This project was bootstrapped with [Vite](https://vitejs.dev/) and uses functional React components
