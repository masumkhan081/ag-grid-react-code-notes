# React + TypeScript + Vite + ag-grid-react

This project demonstrates a React application using TypeScript, Vite, and ag-grid-react for efficient data grid display and manipulation.

## Purpose

A simple application showcasing data display and manipulation using ag-grid-react.

## Prerequisites

- Node.js (>=18)
- npm or yarn

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/masumkhan081/ag-grid-react-code-notes.git
    cd  ag-grid-react-code-notes
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

1.  **Start the JSON server:**

    Open a new terminal and run:

    ```bash
    npx json-server --watch db.json --port 3004
    ```

    (Ensure you have a `db.json` file in the root of your project with the data you want to display. Example `db.json` structure:

    ```json
    {
      "users": [
        {
          "id": 1,
          "name": "Mark Ross",
          "company": "Genco Pura Olive Oil Company",
          "country": { "name": "Portugal", "flag": "pt" },
          "mobile": "(231) 638-1199"
        }
      ]
    }
    ```
    )

2.  **Start the React application:**

    In the original terminal, run:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:5173` (or another port specified by Vite).

## Project Structure

<project_directory>/
├── public/
├── src/
│ ├── components/
│ │ └── ...
│ ├── App.tsx
│ ├── main.tsx
│ ├── vite-env.d.ts
│ └── ...
├── db.json
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Strongly typed programming language that builds on JavaScript.
- **Vite:** Next generation frontend tooling.
- **ag-grid-react:** High-performance data grid for React.
- **json-server:** Mock REST API for prototyping and testing.
