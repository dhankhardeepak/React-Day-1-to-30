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

# React Day 5 – Fetch and Display User Data

This project demonstrates how to:

- Fetch user data from an API (`https://dummyjson.com/users`)
- Show a loading state during API calls
- Display the fetched user list
- Allow users to refetch data on demand

## 🔧 Tech Stack
- React
- useState & useEffect Hooks
- Fetch API

## 🚀 Getting Started
1. Clone this repo
2. Run `npm install`
3. Start the project: `npm start`

## 📂 Folder Structure
src/
└── FetchUserData.jsx

# 🚀 React Live Search Filter with Debounce

This project is part of my 30 Days of React challenge — Day 6.

## 📌 What It Does

- Live search on a hardcoded user list
- Case-insensitive filtering
- Custom debounce hook for input optimization

## 🛠️ Tech Stack

- React.js
- Hooks: useState, useEffect
- JavaScript

## 📂 Project Structure

- `LiveSearchFilter.jsx` – main component
- `useDebounce.js` – custom debounce hook
- `Data/user.js` – hardcoded user data

## 🧠 Lessons Learned

- How to build reusable hooks
- When and why to use debouncing
- Keeping UI performant with minimal renders

# Day 7 - FAQ Accordion with Smooth Animations 🔄✨

Welcome to Day 7 of my **30 Days of React** challenge!

Today, I built a **clean and interactive FAQ Accordion component** using React. Each question can be expanded or collapsed to reveal the answer, and I've added a **subtle slide-down animation** to elevate the user experience.

---

## 🚀 Features

- Toggle (expand/collapse) FAQ answers
- Single active answer at a time (accordion behavior)
- Smooth slide-down animation on reveal
- Clean and modular component structure
- Simple and reusable logic

---

## 🧠 What I Learned

- Handling toggle state per item using `useState`
- Managing active item logic using `id`
- Applying conditional rendering for expanded items
- Implementing keyframe-based CSS animations for smooth transitions
- Writing clean and scoped component styles

---

## 📁 File Structure
/src
├── components
│ └── Faq.js
├── Data
│ └── faqData.js
├── css
│ └── faq.css


Day - 8 :- Continuing my 30-day React.js journey, today’s challenge was all about **accessibility and user-friendly interactions**.

I built a **tab component** that’s:
- **Keyboard navigable** via the `ArrowRight` and `ArrowLeft` keys
- Styled with visual feedback for active states
- Dynamically rendered using an array of tab data

---

### 👨‍💻 Why Build This?

Tabbed interfaces are everywhere — dashboards, profile settings, admin panels — but most forget **keyboard users**.  
This component aims to bridge that UX gap.

---

### 🚧 The Challenge

**Objectives**:
- Render a list of tabs and their content
- Let users switch tabs with mouse _or_ keyboard
- Add minimal yet functional accessibility practices

---

### 🧠 Key Learnings

#### 1. State Management
Using `useState`, I tracked the active tab and updated it with:
```js
setActiveTab(tab.id);


# Day 9 - 🧠 Debounced Multi-Select Dropdown in React

A polished, animated dropdown with:
- ✅ Debounced input filtering
- ✅ Outside click to close
- ✅ Multi-select with "Select All"
- ✅ Clean CSS animation
- ✅ Reusable hooks: `useDebounce`, `useOutsideClick`

## 🔧 Tech Stack

- React
- CSS (custom animations)
- Functional components & hooks

## 💡 Features

- 🎯 Select multiple users from a list
- 🔍 Debounced search input
- ✅ Select all / deselect all
- 🧼 Close dropdown on outside click
- 🧠 Optimized for reusability and readability

## 🚀 Getting Started

1. Clone the repo
2. Run `npm install`
3. Start dev server with `npm start`

---

## 📂 File Structure
/hooks
├── useDebounce.js
└── useOutsideClick.js
/css
└── dropdown.css
/Data
└── dropdownData.js
DropDown.jsx
