import Link from "next/link";
export default function NotFound() { return <main className="not-found shell"><span className="eyebrow">404 — PAGE NOT FOUND</span><h1>That page took<br/><span className="muted-heading">a wrong turn.</span></h1><p>The page you are looking for does not exist or may have moved.</p><Link href="/" className="button button-primary">Back to home ↗</Link></main>; }
