export type Project = {
  slug: string; title: string; eyebrow: string; description: string; longDescription: string;
  stack: string[]; category: string; gradient: string; symbol: string; image: string; liveUrl: string;
  repoUrl: string; challenge: string; improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "bajar-dor", title: "BajarDor", eyebrow: "Marketplace pricing app", category: "Frontend",
    description: "A polished product discovery interface for comparing prices, exploring categories, and browsing everyday essentials.",
    longDescription: "BajarDor is a marketplace-inspired product discovery app built to make price comparison and browsing more accessible. The interface focuses on clear product cards, easy navigation, and a clean shopping experience that works well across devices.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"], gradient: "mint", symbol: "↗",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://bajar-dor-26-59rx.vercel.app", repoUrl: "https://github.com/NayeemurRahman0017/bajar-dor.git",
    challenge: "One of the main challenges was presenting a large amount of product and pricing information in a way that stayed clean, understandable, and mobile-friendly. I needed to balance useful details like price comparisons, categories, and browsing flow without making the interface look crowded or confusing. This required careful layout planning, clear hierarchy, and a focus on creating a smooth shopping experience for users on different screen sizes.",
    improvements: ["Add real-time price tracking", "Improve product search and filters", "Add user accounts and wishlist features"]
  },
  {
    slug: "pizza-hub", title: "PizzaHub", eyebrow: "Pizza ordering platform", category: "Full-stack",
    description: "An appetizing food-ordering interface for browsing pizza menus, exploring categories, and ordering from local restaurants.",
    longDescription: "PizzaHub is a frontend pizza ordering app built to make discovering local restaurants and exploring menus feel quick and enjoyable. It pairs a bold hero section with featured menu items, category browsing, and a simple three-step ordering flow. Sign-in and sign-up screens, a dark mode toggle, and responsive layouts round out the experience so it stays consistent from phone to desktop.",
    stack: ["Next.js", "React", "Tailwind CSS", "lucide-react"], gradient: "orange", symbol: "◎",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://pizzahub-y5rh.vercel.app", repoUrl: "https://github.com/NayeemurRahman0017/pizzahub.git",
    challenge: "The main challenge was designing a food-ordering experience that felt appetizing and fast without overwhelming the visitor. The menu spans several categories, so I had to organize featured items, category cards, and the ordering steps in a way that kept browsing intuitive at every screen size. Balancing a strong visual identity with clear navigation, dark mode support, and separate authentication screens called for careful layout planning and a consistent design system across every section.",
    improvements: ["Add a working cart and checkout flow", "Integrate live menu data from an API", "Add order tracking and status updates"]
  },
  {
    slug: "shoboj-sathi", title: "ShobujShathi", eyebrow: "Volunteer & community events", category: "Full-stack",
    description: "A community platform for discovering volunteer events, connecting with people, and turning small acts of kindness into real impact.",
    longDescription: "ShobujShathi is a frontend community platform designed to help people find meaningful service events and get involved as volunteers. It opens with a mission-driven hero and live impact stats, then moves through feature highlights, searchable event listings, a photo gallery of past activities, and a newsletter signup. A light and dark theme, responsive layouts, and clear calls to action keep the experience welcoming across devices.",
    stack: ["Next.js", "React", "Tailwind CSS", "lucide-react"], gradient: "violet", symbol: "♥",
    image: "https://shoboj-sathi-client.vercel.app/images/hero/Hero%20Banner.png",
    liveUrl: "https://shoboj-sathi-client.vercel.app", repoUrl: "https://github.com/NayeemurRahman0017/shoboj-sathi-client.git",
    challenge: "The biggest challenge was presenting a large amount of content, including impact stats, feature cards, searchable event listings, and a photo gallery, while keeping the interface calm and easy to scan. Event discovery needed both search and filtering to stay useful as the list grows, so I focused on clear hierarchy and a layout that adapts from a single column on mobile to a multi-column grid on desktop. Maintaining a consistent look across light and dark themes, with readable typography and accessible calls to action, was essential for a site built around trust and community.",
    improvements: ["Add event creation and volunteer registration", "Add volunteer profiles and impact tracking", "Integrate email notifications for new events"]
  }
];
