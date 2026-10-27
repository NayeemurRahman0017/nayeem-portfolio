"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
export default function ContactForm() {
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [message, setMessage] = useState(""); const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${name}`); const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.location.href = `mailto:nayeembhuiyan0017@gmail.com?subject=${subject}&body=${body}`; setSent(true); }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Your name<input required value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" autoComplete="name"/></label><label>Email address<input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" autoComplete="email"/></label></div>
    <label>Your message<textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me a little about your project..." rows={4}/></label>
    <button className="button button-primary form-submit" type="submit">Send a message <ArrowUpRight size={17}/></button>
    {sent && <p className="form-note"><CheckCircle2 size={15}/> Your email app should open with your message.</p>}
    <p className="form-disclaimer">This form opens your default email app. No messages are stored on a server.</p>
  </form>;
}
