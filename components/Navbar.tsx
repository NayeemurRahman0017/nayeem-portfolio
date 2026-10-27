"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [{ href: "/#about", label: "About" }, { href: "/#skills", label: "Skills" }, { href: "/#education", label: "Education" }, { href: "/#projects", label: "Projects" }, { href: "/#contact", label: "Contact" }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav shell" aria-label="Main navigation">
    <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">N<span>.</span></span><span>Nayeem<span className="brand-muted">.dev</span></span></Link>
    <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
      {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15}/></Link>
    </div>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
  </nav></header>;
}
