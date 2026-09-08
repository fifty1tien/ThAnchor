import { ArrowLeft, Clock3 } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
export default function Article({ post, onBack }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <main className="article-page">
      <motion.div className="reading-progress" style={{ scaleX }} />
      <div className="article-shell">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={16} /> Back to notes
        </button>
        <div className="article-heading">
          <span className="section-kicker">
            {post.tag} / {post.category}
          </span>
          <h1>{post.title}</h1>
          <div className="article-meta">
            Published {post.date} <span /> <Clock3 size={15} /> {post.readTime}
          </div>
        </div>
        <div className="article-visual">
          <span>𓆝</span>
          <p>
            the ocean keeps
            <br />
            its own time
          </p>
        </div>
        <div className="article-body">
          {post.body.split("\n\n").map((paragraph, index) =>
            index === 0 ? (
              <p className="article-lead" key={paragraph}>
                {paragraph}
              </p>
            ) : (
              <p key={paragraph}>{paragraph}</p>
            ),
          )}
        </div>
        <div className="article-end">— end of current —</div>
      </div>
    </main>
  );
}
