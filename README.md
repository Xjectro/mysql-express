# 🚀 Mysql Express

This project is a modern API template built using Express.js, MySQL, TypeScript, and other robust technologies. It is designed to help you quickly set up a scalable and secure API with various essential features.

## 📋 Table of Contents

- [⚙️ Installation](#%EF%B8%8F-installation)
- [🛠 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🛠 Scripts](#-scripts)
- [📦 Dependencies](#-dependencies)

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Xjectro/mysql-express.git
   ```
2. Install the dependencies:
   ```bash
   bun install
   ```
3. Create a `.env` file and add the necessary environment variables:

   ```env
PORT=5000
   ```

## 🛠 Usage

To start the server in development mode:
```bash
bun run dev
```
To build and run the project in production:
```bash
bun run build
bun run ./dist
```

## 📂 Project Structure

```bash
📦 mysql-express
 ┣ 📂 node_modules
 ┣ 📂 src
 ┃ ┣ 📂 config         # Configuration files
 ┃ ┣ 📂 controllers     # Controllers handling request logic
 ┃ ┣ 📂 database        # Database connection and models
 ┃ ┣ 📂 routes          # Route definitions
 ┃ ┣ 📜 index.ts       # Main application entry point
 ┣ 📜 .babelrc         # Babel configuration
 ┣ 📜 .env.example      # Example environment variables
 ┣ 📜 .gitignore       # Git ignore file
 ┣ 📜 .prettierrc      # Prettier configuration
 ┣ 📜 bun.lockb        # Bun lock file for dependencies
 ┣ 📜 package.json      # Project metadata
 ┣ 📜 README.md         # Project documentation
 ┗ 📜 tsconfig.json     # TypeScript configuration
```
