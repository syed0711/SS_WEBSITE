# SS_WEBSITE

This project contains the Next.js website for **S & S Agencies**. It relies on Tailwind CSS for styling and provides an API route to handle contact form submissions.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file with the email variables shown below.
3. Run the development server:
   ```bash
   npm run dev
   ```

For a production build run `npm run build` followed by `npm start`.

## Email Setup

The API route `src/app/api/send-email/route.ts` sends messages via Gmail. Define these environment variables in `.env.local`:

- `GMAIL_USER` – Gmail address used to send emails
- `GMAIL_APP_PASS` – 16‑character app password for that account
- `RECEIVER` – email address that should receive the messages

Ensure the Gmail account has 2‑factor authentication enabled and create the app password through Google account settings. Restart the server after adding the variables.
