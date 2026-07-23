 # Accredian Clone

A responsive landing page clone built with Next.js, replicating Accredian's website design and structure.

## Live Demo

🔗 [View Live Site](https://accredian-clone-mnwd-bt3yq6y7x-harshitag.vercel.app/)

## Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React, React Icons
- Deployment: Vercel

## Setup Instructions

 1. Clone the repository
 2. Install dependencies
 3. Run the development server
 4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Approach

The project was built using Next.js App Router with functional components and React hooks throughout. The UI was structured into reusable components (navigation, landing sections, footer) to keep the codebase clean and maintainable. Tailwind CSS was used for styling to ensure a fully responsive layout across mobile and desktop. Framer Motion was added for smooth section transitions and navigation animations.

## AI Usage

AI tools (Claude) were used throughout development, primarily for:
- Debugging deployment issues on Vercel, including resolving npm dependency conflicts (peer dependency mismatch with lucide-react)
- Identifying and fixing a missing @tailwindcss/postcss dependency that was causing build failures
- General guidance on Next.js and Tailwind configuration

All AI-suggested fixes were reviewed and applied manually by editing package.json and .npmrc directly, then verified through Vercel's build logs before confirming the deployment was successful.

## Improvements With More Time

- Add unit and integration tests for components
- Replace mock content/data with a real API integration
- Improve accessibility (ARIA labels, keyboard navigation)
- Add dark mode support
- Optimize image loading and Lighthouse performance score
- Clean up duplicate Vercel projects created during initial deployment troubleshooting
