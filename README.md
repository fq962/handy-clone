
# Handy Clone

A service marketplace clone inspired by Handy, connecting users with local service providers. This monorepo contains both the frontend and backend, making it easy to manage and deploy.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Locally](#running-locally)
4. [Folder Structure](#folder-structure)
---

## Features

- User authentication using **Clerk**
- Frontend built with **React** (TSX) and styled using **Chakra UI**
- Backend API built into the monorepo
- Fast development with **Vite**
- Modern Node.js support (v20 or higher)

---

## Technologies Used

- **Frontend:** React (TSX)
- **Styling:** Chakra UI
- **Authentication:** Clerk
- **Bundler:** Vite
- **Backend:** NestJS (20 or higher)
- **Package Manager:** npm
- **Monorepo Structure**

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fq962/handy-clone.git
   ```

2. Navigate into the project directory:
   ```bash
   cd handy-clone
   ```

3. Install dependencies for the entire monorepo:
   ```bash
   npm install
   ```

### Running Locally

1. Start the frontend:
   ```bash
   npm run dev:app
   ```

2. Start the backend:
   ```bash
   npm run dev:api
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

   The API will run on a separate port (check your setup or configuration files for details).

---

## Folder Structure

```
handy-clone/
├── handy-app/             # React frontend
├── handy-api/              # API backend
├── package.json          # Monorepo configuration
```

---
