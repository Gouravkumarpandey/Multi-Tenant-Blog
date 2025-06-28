# 🏢 Multi-Tenant Blog App with Subdomain Routing
![Screenshot 2025-06-29 010451](https://github.com/user-attachments/assets/380bd5ad-95ad-49bd-8d7c-62ed25f2b267)

A full-stack, production-ready multi-tenant blog application built with **Next.js**, **PostgreSQL**, **Drizzle ORM**, and **Clerk authentication**. This app supports **subdomain-based multi-tenancy**, where each user or organization gets a unique blog accessible via a custom subdomain (e.g., `user1.blogsite.com`).

Each tenant's data is completely isolated, with features like organization-based access control, dynamic subdomain routing, and secure authentication powered by Clerk. It’s designed with scalability in mind — ideal for SaaS platforms, portfolio builders, or content management systems where multiple users need personalized environments.

The app also leverages **Next.js App Router**, **Server Actions**, and **Drizzle ORM** for robust backend logic and type-safe database operations, making it a modern, developer-friendly solution that’s ready for deployment on platforms like **Vercel** with wildcard domain support.


---

## 🧾 What is a Tenant?

In software architecture, a **tenant** is an individual user or organization that shares the same application but has isolated data and configurations.  
In this app:

- Each tenant has their **own blog**
- Each blog is accessible via a **custom subdomain**
- All data is securely separated per tenant

This architecture is scalable and ideal for platforms like blogging sites, SaaS dashboards, and portfolio generators.

---

## 🧰 Tools & Technologies Used

| Purpose            | Tool / Technology               |
|--------------------|---------------------------------|
| **Frontend**       | Next.js (App Router)            |
| **Styling**        | Tailwind CSS                    |
| **State/Form**     | React                           |
| **ORM**            | Drizzle ORM                     |
| **Database**       | PostgreSQL                      |
| **Authentication** | Clerk.dev                       |
| **Hosting**        | Vercel (with wildcard domain)   |
| **Dev Environment**| Docker, VSCode                  |
| **Package Manager**| pnpm                            |
| **Version Control**| Git + GitHub                    |

---
## 📁 Project Structure

```
multi-tenant-blog/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx                # Root layout with ClerkProvider
│   ├── page.tsx                  # Public homepage or redirect
│   ├── actions.ts                # Server Actions for blog logic
│   └── [subdomain]/              # Dynamic routing per tenant
│       ├── page.tsx              # Tenant-specific blog homepage
│       └── post/                 # Nested routes for blog posts
│           └── create-post.tsx   # Create new post page
│
├── components/                   # Reusable UI components
│   ├── Header.tsx                # Header with auth controls
│   └── PostCard.tsx              # Blog post display component
│
├── db/                           # Drizzle ORM setup
│   ├── schema.ts                 # Database schema (Post, Tenant, etc.)
│   └── index.ts                  # Drizzle client instance
│
├── public/                       # Static assets
│   └── logo.png
│
├── styles/                       # TailwindCSS styles
│   └── globals.css
│
├── drizzle.config.ts             # Drizzle CLI config
├── middleware.ts                 # Clerk + subdomain middleware
├── .env.local                    # Environment variables
├── .gitignore                    # Git ignored files
├── next.config.js                # Next.js configuration
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json                 # TypeScript config
└── README.md
```





## 🐳 Docker & PostgreSQL Setup

You can run the PostgreSQL database using Docker to simplify local development.

### Start PostgreSQL using Docker

docker run --name blog-postgres 
  -e POSTGRES_USER=postgres 
  -e POSTGRES_PASSWORD=postgres 
  -e POSTGRES_DB=multi_tenant_blog 
  -p 5432:5432 
  -d postgres

### ⚙️ Environment Setup
Create a .env.local file in the project root:

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/multi_tenant_blog
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key


## 📦 Installation & Usage
### 1. Clone the Repository

git clone https://github.com/Gouravkumarpandey/Multi-Tenant-Blog.git
cd Multi-Tenant-Blog


### 2. Install Dependencies

pnpm install

### 3. Generate and Push Drizzle Schema

pnpm drizzle-kit generate
pnpm drizzle-kit push

### 4. Start the Development Server

pnpm dev
Visit: http://localhost:3000



## 🔐 Authentication via Clerk
Clerk handles sign-in, sign-up, and session management.

Organizations = Tenants.

Middleware enforces tenant-based access control.

Components like <OrganizationSwitcher /> and <UserButton /> are used in the UI.

### ✅ Features Implemented
 Subdomain routing per tenant

 Blog CRUD via Server Actions

 PostgreSQL containerization with Docker

 Clerk authentication and organizations

 Role-based access per organization

 Blog post editing & deletion

 Blog theming per tenant

### 🛠️ Deployment Notes
Use Vercel for hosting

Configure Wildcard Domains in your DNS and Vercel dashboard (*.yourdomain.com)

Use Neon, Supabase, or self-hosted PostgreSQL in production









