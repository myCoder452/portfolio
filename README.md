# Adamu's Personal Portfolio

Welcome to the repository for my personal portfolio website. This project is a modern, responsive web application built to showcase my professional journey, skills, projects, and certifications.

## 🚀 Tech Stack

-   **Frontend Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Routing**: [React Router](https://reactrouter.com/)

## 🛠️ Local Development Setup

Follow these steps to get the project running on your local machine.

### Prerequisites
-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [Python 3](https://www.python.org/) (for maintenance scripts)

### Installation

1.  Clone the repository and navigate to the `webPage` directory:
    ```bash
    cd webPage
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173`.

## 📂 Project Structure

-   **`src/`**: Contains the React source code (components, pages, assets).
-   **`public/`**: Contains static assets like project images and global icons.
    -   *Note*: Project specific images are organized in folders ending with `_Pics` (e.g., `hackTheTrack_Pics`).
-   **`resume_Things/`**: Contains the source resume PDF (`abadamu_resume.pdf`).
-   **`siteLogos/`**: Global site logos (referenced by scripts or manual imports).

## 🤖 Maintenance Scripts

This project includes Python scripts to automate data updates. These scripts are located in the root of the `webPage` directory.

### 1. Resume Extraction (`extract_resume.py`)
Extracts text from the PDF resume to a text file for potential use in the app.
-   **Input**: `resume_Things/abadamu_resume.pdf`
-   **Output**: `src/assets/resume.txt`
-   **Usage**:
    ```bash
    python3 extract_resume.py
    ```

### 2. Project Processing (`process_projects.py`)
Scans the `public` directory for project folders and generates a JSON manifest.
-   **Input**: Folders in `public/` ending in `_Pics`.
-   **Output**: `src/assets/projects.json`
-   **Usage**:
    ```bash
    python3 process_projects.py
    ```

> **Note**: The live application currently relies on `src/assets/resume.js` and `src/assets/projects.js` for structured data and styling. generating `resume.txt` and `projects.json` is useful for auditing or if you refactor the app to consume these raw files directly.

## 📄 License
[MIT](LICENSE)
