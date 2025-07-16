# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Day 01: Counter App 🧮

## 🔍 Project Description
This is a simple counter app built with React. It demonstrates basic concepts like functional components, useState hook, and event handling.

## 🚀 Features
- Increment count
- Decrement count
- Reset count
- Prevent negative numbers (optional)

## 🧠 Concepts Used
- useState
- Functional components
- Event handling

## 📸 Screenshot
(Add a screenshot here if you want)

## 📂 How to Run
npm install
npm start

# 🙋‍♂️ Day 2: Greeting App

## 📌 Project Description
A small React app where the user enters their name and clicks "Show Greeting" to see a personalized message. Prevents empty submissions and shows clear validation.

## 🚀 Features
- Controlled input field using `useState`
- Shows greeting only when input is valid
- Disables button if input is empty
- Clean, minimalist UI

## 🧠 Concepts Covered
- Controlled Components
- Conditional Rendering
- Input Validation
- useState Hook

## 💬 Interview Questions
1. What are controlled components in React?
2. How would you validate form input in React?
3. What's the difference between stateful and stateless components?
4. How does `useState` trigger re-renders?

## 📁 Folder Structure
day-02-greeting-app/
├── src/
│ ├── Greeting.jsx
│ └── styles.css (optional)
├── public/
├── README.md
└── screenshot.png

# ✅ Day 3: Todo List App (React)

## 📌 Project Description
A minimal yet fully functional Todo List built in React. Users can add and remove tasks dynamically, with input validation and auto-focus for improved UX.

## 🚀 Features
- Add tasks via controlled input
- Delete specific tasks
- Real-time input validation with error messaging
- Auto-focus on input field
- "No tasks" message when list is empty

## 🧠 Concepts Covered
- useState Hook for state management
- useRef + useEffect for input focus
- List rendering with `.map()`
- Conditional rendering
- Error handling in React forms

## 📂 Folder Structure
day-03-todo-app/
├── public/
├── src/
│ ├── Todo.jsx
│ └── styles.css (optional)
├── README.md
└── screenshot.png


# ✍️ Day 4: Real-Time Character & Word Counter

## 📌 Project Description
A live character and word counter app built using React. Displays live stats as the user types into a textarea, with warning color change if the 100-character limit is exceeded.

## 🚀 Features
- Controlled textarea using `useState`
- Real-time character and word counts
- Input limit warning after 100 characters
- Dynamic UI color updates

## 🧠 Concepts Covered
- Controlled components
- Event handling with `onChange`
- String manipulation with `.trim()`, `.split()`
- Conditional rendering and inline styles

## 📂 Folder Structure
day-04-character-counter/
├── src/
│ └── Character.jsx
├── public/
├── README.md
└── screenshot.png