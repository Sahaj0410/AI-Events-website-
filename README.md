# Gatherly 🎉

Gatherly is a modern **event creation & management platform** built with **Next.js**, **Convex**, and **Clerk**, allowing users to create and manage events seamlessly with authentication, real-time data, and rich media support.

🔗 **Live Demo:** https://gatherly-ashy.vercel.app/

---

## ✨ Features

- 🗓️ Create **Free & Paid Events**
- 🔐 Secure authentication using **Clerk**
- ⚡ Real-time backend powered by **Convex**
- 🖼️ Event image support via **Unsplash API**
- 🤖 AI integrations using **Google Gemini**
- 🚀 Deployed on **Vercel**
- 🎨 Modern UI with **Next.js App Router**

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js (App Router) |
| Backend | Convex |
| Auth | Clerk |
| Database | Convex Cloud |
| AI | Google Gemini API |
| Images | Unsplash API |
| Deployment | Vercel |
| Language | TypeScript / JavaScript |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sahaj0410/AI-Events-website-.git
cd AI-Events-website-
2️⃣ Install Dependencies
npm install
# or
pnpm install
# or
yarn install
3️⃣ Environment Variables
Create a .env.local file in the root directory.

# Convex
CONVEX_DEPLOYMENT=dev:your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-convex-deployment.convex.cloud

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxx

NEXT_PUBLIC_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-domain.clerk.accounts.dev

# Unsplash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key
⚠️ Do not commit real secrets to GitHub.
Make sure .env.local is listed in .gitignore.

4️⃣ Run Convex (Backend)
npx convex dev
5️⃣ Run the App Locally
npm run dev
Open http://localhost:3000 in your browser 🚀

📂 Project Structure
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── convex/              # Convex backend functions & schema
├── hooks/               # Custom React hooks
├── lib/                 # Utilities & helpers
├── public/              # Static assets
├── styles/              # Global styles
├── .env.local           # Environment variables
├── package.json
└── README.md
☁️ Deployment
This project is deployed on Vercel.

Steps:
Push the code to GitHub

Import the repository into Vercel

Add environment variables in the Vercel dashboard

Deploy 🚀

Vercel automatically rebuilds on every push to the main branch.

🧠 Convex Notes
Always run npx convex dev during development

Run npx convex deploy before production

Ensure all Convex functions are exported correctly

🤝 Contributing
Contributions are welcome!

Fork the repository

Create a new branch

Commit your changes

Open a Pull Request

📄 License
This project is licensed under the MIT License.

👤 Author
Sahaj Paun
Built with ❤️ using Next.js, Convex & Clerk


---

### ✅ What I fixed
- Proper Markdown headings & spacing  
- Correct code blocks (bash / env)  
- Clear step-by-step flow  
- Professional GitHub-ready formatting  
- No secrets exposed  

If you want, next I can:
- Add **screenshots section**
- Add **system architecture diagram**
- Make it **resume / hackathon optimized**
- Add **badges (Vercel, Next.js, License)**

Just tell me 👍
