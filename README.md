# 🏢 Multi-Tenant Blog App with Subdomain Routing

A full-stack multi-tenant blog application built with **Next.js**, **PostgreSQL**, **Drizzle ORM**, and **Clerk authentication**. It supports subdomain-based multi-tenancy, allowing each user to manage their own blog instance with a unique subdomain like `user1.blogsite.com`.

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
| **State/Form**     | React, Zod                      |
| **ORM**            | Drizzle ORM                     |
| **Database**       | PostgreSQL                      |
| **Authentication** | Clerk.dev                       |
| **Hosting**        | Vercel (with wildcard domain)   |
| **Dev Environment**| Docker, VSCode                  |
| **Package Manager**| pnpm / npm                      |
| **Version Control**| Git + GitHub                    |

---

## 🐳 Docker & PostgreSQL Setup

You can run the PostgreSQL database using Docker to simplify local development.

### Start PostgreSQL using Docker

```bash
docker run --name blog-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=multi_tenant_blog \
  -p 5432:5432 \
  -d postgres

```Connect with Drizzle ORM
Set the .env like:


DATABASE_URL=postgresql://postgres:postgres@localhost:5432/multi_tenant_blog
