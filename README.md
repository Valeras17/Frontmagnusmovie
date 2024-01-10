# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/Valeras17).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# MagnusMovie

## Description
**"MagnusMovie"** is a React App developed for providing information about movies, allowing users to leave and read movie reviews. The application is built using TypeScript and styled with Tailwind CSS, incorporating various React libraries.

## Technologies
- **Framework:** React App
- **Programming Language:** TypeScript
- **CSS Framework:** Tailwind CSS
- **Additional Libraries and Dependencies:** React Router, Axios, Formik, React Query, etc.

## Main Features
Key features of MagnusMovie include:
- Processing and handling HTTP requests.
- User authentication and token management.
- Front-end display and interaction with server responses.

## Application Structure and Routing
The application uses React Router for navigation and defines routes for components like Home, About, Register, etc.

### Main Entry Point (`index.js`)
Bootstraps the application, setting up context providers and React Query client.

### Application Component (`App.js`)
Defines routes and manages conditional rendering based on user authentication status and roles.

## Core Functionalities and Patterns

### Context and Hooks
#### Authentication Context (`AuthContext`)
- Manages user authentication state.
- Provides functions for login and logout.
- Uses `useState` and `useEffect` hooks for state management and side effects.









