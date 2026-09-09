import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Mail,
  MessageCircle,
} from "lucide-react";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import OceanDecor from "../components/OceanDecor";
import WaveDivider from "../components/WaveDivider";
import { posts } from "../data/posts";
export default function Home({ setPage, openPost }) {
  return (
    <>
      <Hero onExplore={() => setPage("blog")} />
      <ProjectShowcase onDetail={() => setPage("work")} />
      <div className="ocean-transition" aria-hidden="true">
        <WaveDivider />
        <span className="transition-caption">
          below the surface / keep exploring
        </span>
      </div>
      <section className="notes-section section-shell">
        <OceanDecor variant="logbook" />
        <div className="section-heading compact">
          <div>
            <span className="section-kicker">FROM THE LOGBOOK</span>
            <h2>
              Fresh from
              <br />
              <em>the deep.</em>
            </h2>
          </div>
          <button className="text-button" onClick={() => setPage("blog")}>
            View all notes <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              featured={!index}
              onOpen={openPost}
            />
          ))}
        </div>
      </section>
      <section className="contact-strip section-shell">
        <OceanDecor variant="contact" />
        <div>
          <span className="section-kicker">QUICK CONTACT</span>
          <h2>
            Let’s make a<br />
            <em>wave together.</em>
          </h2>
        </div>
        <div className="contact-links">
          <a href="mailto:yellmancraft@gmail.com">
            <Mail size={17} /> yellmancraft@gmail.com
          </a>
          <a
            href="https://wa.me/6282184188225"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/fifty1tien"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={17} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/fifty1tien"
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={17} /> Instagram
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <span>© 2026 Sulthan Muzaki</span>
        <span>Made with curiosity & saltwater.</span>
      </footer>
    </>
  );
}
