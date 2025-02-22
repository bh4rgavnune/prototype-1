# AI Resume Builder

🚀 **AI Resume Builder** is a modern web application built with **Next.js 15** that helps users generate professional resumes using AI. It integrates authentication, database storage, and payment processing to provide a seamless user experience.

## 📌 Features
- 📝 AI-powered resume generation
- 🔒 Authentication using **Clerk**
- 💾 Database management with **PostgreSQL & Prisma**
- 💰 Subscription-based access using **Stripe**
- 🌐 Blob storage for resume templates
- ⚡ Built with **Next.js 15, TypeScript, and Tailwind CSS**

## 🏗️ Tech Stack
- **Frontend**: Next.js 15, React, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **Payments**: Stripe
- **AI Integration**: OpenAI API
- **Storage**: Blob Storage

## 📦 Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/yourusername/ai-resume-builder.git
cd ai-resume-builder
```

### 2️⃣ Install dependencies
```sh
npm install
# or
yarn install
```

### 3️⃣ Set up environment variables
Create a `.env.local` file in the root directory and add the required values:
```env
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NO_SSL=your_postgres_no_ssl
POSTGRES_URL_NON_POOLING=your_postgres_non_pooling
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_database

CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_clerk_sign_in_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_clerk_sign_up_url

OPENAI_API_KEY=your_openai_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY=your_price_id_monthly
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY=your_price_id_plus_monthly

NEXT_PUBLIC_BASE_URL=http://localhost:3000
BLOB_READ_WRITE_TOKEN=your_blob_token
```

### 4️⃣ Run the development server
```sh
npm run dev
# or
yarn dev
```
Your project will be available at **http://localhost:3000** 🚀

## 🛠️ Usage
1. Sign up or log in using Clerk authentication.
2. Enter your details and generate a resume using AI.
3. Save or download your resume as a PDF.
4. Upgrade to a **Pro** plan via Stripe for advanced features.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 📞 Contact
For any issues, feel free to open an issue or reach out via [your email or social link].

