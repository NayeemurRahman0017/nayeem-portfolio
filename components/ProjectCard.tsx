import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card">
    <Link href={`/projects/${project.slug}`} className={`project-art art-${project.gradient}`} aria-label={`View ${project.title} project details`}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-art-overlay">
        <div className="art-window"><div className="window-dots"><i/><i/><i/></div><div className="mock-content"><span className="mock-label">{project.eyebrow}</span><strong>{project.title}</strong><div className="mock-line"/><div className="mock-pills"><i/><i/><i/></div><div className="mock-bottom"><span>{project.symbol}</span><span>0{index + 1} / 03</span></div></div></div>
        <span className="art-index">0{index + 1}</span><span className="art-open"><ArrowUpRight size={20}/></span>
      </div>
    </Link>
    <div className="project-card-info"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><Link href={`/projects/${project.slug}`} className="text-link">View More / Details <ArrowUpRight size={15}/></Link></div>
    <p className="project-description">{project.description}</p>
    <div className="tag-list">{project.stack.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
  </article>;
}
