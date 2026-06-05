# AI-Powered Reviews Summarizer & Chatbot (WonderWorld)

An interactive web application designed to enhance the guest experience for the **WonderWorld** themed amusement park. The project features a modern monorepo architecture with a React-based frontend and an Express-based backend, utilizing OpenAI to summarize user reviews and power an interactive theme park AI assistant.

---

## 🚀 Key Features

*   **AI Chat Assistant**: An interactive chatbot helper trained to answer user queries about the WonderWorld amusement park.
*   **AI-Powered Reviews Summarization**: Automatically aggregates and condenses product or attraction reviews into concise, readable summaries using OpenAI's `gpt-4o-mini`.
*   **Modern Monorepo Architecture**: Clean separation between the React client and Express server, managed seamlessly using **Bun Workspaces**.
*   **Robust Database Access**: Leverages **Prisma ORM** for PostgreSQL data modeling, querying, and migrations.

---

## 🛠️ Technology Stack

### Frontend ([packages/client](file:///Users/marian/incode-courses/my-app/packages/client))
*   **Framework**: React (v19) + Vite
*   **Styling**: Tailwind CSS v4 + Radix UI (for UI components)
*   **State & Fetching**: TanStack React Query + Axios
*   **Icons**: Lucide React + React Icons

### Backend ([packages/server](file:///Users/marian/incode-courses/my-app/packages/server))
*   **Runtime**: Bun
*   **Framework**: Express.js
*   **Database ORM**: Prisma ORM (connecting to Neon PostgreSQL)
*   **AI Integration**: OpenAI SDK (`gpt-4o-mini`)
*   **Validation**: Zod (for request validation)

---

## 📂 Project Structure

```text
├── packages/
│   ├── client/          # React + Vite frontend application
│   │   ├── src/         # UI components, pages, and API clients
│   │   └── vercel.json  # Vercel deployment configurations (SPA routing & API proxy)
│   │
│   └── server/          # Express backend application
│       ├── controllers/ # Route handlers
│       ├── llm/         # OpenAI integration and system prompts
│       ├── prisma/      # Database schema and seed data
│       ├── repositories/# Database access layer
│       └── Dockerfile   # Docker configuration for production deployment (Render)
│
├── package.json         # Workspace configurations and dependencies
├── bun.lock             # Monorepo lockfile
└── index.ts             # Entry point for concurrently running both client and server
```

---

## 💻 Local Development

### Prerequisites
*   [Bun](https://bun.sh/) installed locally.
*   A running **PostgreSQL** database (e.g., [Neon DB](https://neon.tech/)).
*   An **OpenAI API Key**.

### Getting Started

1.  **Clone the repository** and navigate to the project folder:
    ```bash
    git clone <repository-url>
    cd ai-powered-cat-and-reviews-summarizer
    ```

2.  **Install dependencies** at the root of the monorepo:
    ```bash
    bun install
    ```

3.  **Configure environment variables**:
    Create a `.env` file in `packages/server/.env` and add your keys:
    ```env
    OPENAI_API_KEY=your_openai_api_key_here
    DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
    PORT=3000
    ```

4.  **Run Database Migrations and Seed**:
    Apply the database schema and populate it with initial seed data:
    ```bash
    cd packages/server
    bun prisma db push
    bun prisma db seed
    cd ../..
    ```

5.  **Start the development server**:
    From the root directory, run:
    ```bash
    bun dev
    ```
    This concurrently boots up both:
    *   The **Express server** at `http://localhost:3000`
    *   The **Vite client** at `http://localhost:5173` (with `/api` automatically proxied to the server)

---

## ☁️ Deployment

### Backend (Render / Koyeb)
The backend is configured to be deployed as a **Docker** service:
1.  Connect your GitHub repository to Render/Koyeb.
2.  Create a new **Web Service**.
3.  Set the **Root Directory** to `packages/server`.
4.  Set the **Runtime** to `Docker` (it will build from the self-contained `Dockerfile` in `packages/server`).
5.  Add the environment variables `DATABASE_URL`, `OPENAI_API_KEY`, and `PORT=3000` under the service settings.

### Frontend (Vercel)
The frontend is configured to deploy static assets with proxy rules:
1.  Create a new project on Vercel.
2.  Set the **Root Directory** to `packages/client`.
3.  Choose **Vite** as the framework preset.
4.  In [packages/client/vercel.json](file:///Users/marian/incode-courses/my-app/packages/client/vercel.json), replace the rewrite `destination` with your actual Render backend URL.
5.  Deploy the project.
