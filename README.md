# NAYEEM Portfolio

A responsive developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons. Includes a landing page, skills, education/experience, three project cards, statically generated project detail pages, social links, a downloadable resume template, and a mailto-based contact form.

## Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build for production
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js and deploy. No environment variables are required for this starter.

## Important personalization checklist
Search the project for `yourusername`, `your.email@example.com`, `+880 1XXX-XXXXXX`, and placeholder education details. Replace them with your real information before publishing.
- Replace the typographic profile avatar with a professional photo if desired.
- Update skills and percentages to accurately reflect your current level.
- Update the education and experience entries.
- Update project descriptions and stacks in `lib/projects.ts`.
- Replace each project's `liveUrl` and `repoUrl` with real links.
- Replace `public/resume-template.txt` with your real resume PDF and update the download link in `app/page.tsx`.
- Update the email address in `components/ContactForm.tsx`, the contact section in `app/page.tsx`, and social links in `app/layout.tsx` and `app/page.tsx`.

## Contact form
The contact form uses a `mailto:` link and does not store or transmit data to a server. For a server-submitted form, connect a form service or email API.

## Project details
Project content is stored in `lib/projects.ts`. Each project gets a detail route at `/projects/[slug]`.


### Design theme
The default design uses a dark navy background with electric-blue accents, responsive navigation, project cards, project detail pages, and a contact section. Update the placeholder profile, social links, education, experience, and project URLs before submitting.
