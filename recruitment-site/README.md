# Generic Recruitment Agency Website

This is a Next.js website template prepared for Vercel deployment.

## Before going live

Replace the placeholder content with your actual:
- Company name
- Logo
- DMW registration/accreditation/license details
- Office address
- Email address and phone numbers
- Privacy policy / file upload consent text
- Real inquiry form handling (current form is frontend only)

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Upload this folder to a GitHub repository.
2. Log in to Vercel.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Click Deploy.

## Important note

The passport and resume upload fields are currently UI-only.
To make them functional, connect the form to:
- Vercel Functions / API routes
- Firebase Storage
- Supabase Storage
- AWS S3
- Google Drive automation
