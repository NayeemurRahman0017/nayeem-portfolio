import type { Metadata } from "next";
// @ts-ignore -- Next.js processes this stylesheet import at build time.
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Github, ArrowUpRight } from "lucide-react";
export const metadata: Metadata = { title: "MD. Nayeemur Rahman Bhuiyan Nayeem | Portfolio", description: "A responsive portfolio for a CSE student and web developer showcasing projects, skills, and contact information." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar/>{children}<footer className="site-footer"><div className="shell footer-inner"><a href="#top" className="brand"><span className="brand-mark">N<span>.</span></span><span>Nayeem<span className="brand-muted">.dev</span></span></a><p>Designed & built with care <span className="footer-heart">♥</span></p><div className="footer-links"><a href="https://github.com/NayeemurRahman0017" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://docs.google.com/document/d/1vYvXdIajDoSHtNiRPWXTPqRV4W8hDvIuUC0yk2ASmmU/edit?usp=sharing" target="_blank" rel="noreferrer" aria-label="Resume"><ArrowUpRight size={17}/></a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Nayeem. All rights reserved.</span><span>Built with Next.js & TypeScript</span></div></footer></body></html>
}
