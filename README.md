# 🌐 Personal Portfolio

This is a full-stack personal portfolio built with **Next.js**, **Tailwind CSS**, and **DaisyUI**. It showcases my projects, skills, and contact information in a modern and responsive design. The project also includes backend functionality using **Next.js Route Handlers** and stores data in **MongoDB**. The site is deployed on **Vercel**.

## 🚀 Features

* Fully responsive design
* Built with Next.js and Tailwind CSS
* Styled using DaisyUI components
* Backend API routes via Next.js route handlers
* MongoDB integration for dynamic data
* Hosted and deployed on Vercel

## 📌 Requirements

* Node.js (v18 or higher recommended)
* MongoDB instance (local or cloud)

## 🛠 Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-portfolio-repo
   cd your-portfolio-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root of the project and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio in action.

## 📡 API Routes

These are handled using **Next.js route handlers** in the `/app/api` directory. Example usage includes fetching portfolio data or handling contact form submissions.

## 📤 Deployment

This portfolio is deployed using [Vercel](https://vercel.com/), offering automatic deployments on every push to the main branch.

## 📜 License

This project is licensed under the MIT License.
