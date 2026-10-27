export type Project = {
  slug: string; title: string; eyebrow: string; description: string; longDescription: string;
  stack: string[]; category: string; gradient: string; symbol: string; image: string; liveUrl: string;
  repoUrl: string; challenge: string; improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "bajar-dor", title: "BajarDor", eyebrow: "Marketplace pricing app", category: "Full-stack",
    description: "A polished product discovery interface for comparing prices, exploring categories, and browsing everyday essentials.",
    longDescription: "BajarDor is a marketplace-inspired product discovery app built to make price comparison and browsing more accessible. The interface focuses on clear product cards, easy navigation, and a clean shopping experience that works well across devices.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"], gradient: "mint", symbol: "↗",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://bajar-dor-26-59rx.vercel.app", repoUrl: "https://github.com/NayeemurRahman0017",
    challenge: "One of the main challenges was presenting a large amount of product and pricing information in a way that stayed clean, understandable, and mobile-friendly. I needed to balance useful details like price comparisons, categories, and browsing flow without making the interface look crowded or confusing. This required careful layout planning, clear hierarchy, and a focus on creating a smooth shopping experience for users on different screen sizes.",
    improvements: ["Add real-time price tracking", "Improve product search and filters", "Add user accounts and wishlist features"]
  },
  {
    slug: "fit-log", title: "FitLog", eyebrow: "Fitness tracking dashboard", category: "Frontend",
    description: "A clean, motivating dashboard for tracking workouts, routines, and progress in a simple and organized way.",
    longDescription: "FitLog is a fitness app concept designed to help users monitor workouts and stay consistent with their routine. It emphasizes clarity, motivation, and accessible design for daily activity tracking.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"], gradient: "violet", symbol: "✓",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://fit-log-five-orpin.vercel.app", repoUrl: "https://github.com/NayeemurRahman0017",
    challenge: "The biggest challenge was creating a fitness dashboard that felt motivating and modern while still staying simple and easy to read. I had to organize workout summaries, routines, and progress indicators in a way that gave users fast insight without overwhelming them with too much information. Designing for clarity, positive user feedback, and responsive behavior was essential for making the interface feel useful in everyday use.",
    improvements: ["Add authentication and personal profiles", "Integrate exercise analytics", "Create progress charts and streak tracking"]
  },
  {
    slug: "dev-stack", title: "DEV-STACK", eyebrow: "Creative portfolio landing page", category: "Web design",
    description: "A vibrant landing page concept crafted to present products, services, and visual identity in a polished, modern way.",
    longDescription: "DEV-STACK is a visually rich landing page designed to highlight brand value through bold messaging, modern layout, and engaging visual sections. It focuses on responsiveness and a memorable first impression for visitors.",
    stack: ["React", "CSS", "Responsive UI"], gradient: "orange", symbol: "✳",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://zippy-smakager-533ac5.netlify.app/", repoUrl: "https://github.com/NayeemurRahman0017",
    challenge: "This project required balancing visual appeal with usability. I wanted the landing page to feel polished and engaging, but it also needed to remain easy to navigate on smaller screens and maintain a strong flow of information. Creating a compelling visual hierarchy while keeping the layout responsive and professional was the main challenge, especially when designing for different device sizes and content blocks.",
    improvements: ["Add project gallery and case studies", "Introduce animations and motion effects", "Expand to include multi-page product sections"]
  }
];
