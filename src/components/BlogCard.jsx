import { ArrowUpRight, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
export default function BlogCard({
  post,
  onOpen,
  featured = false,
  index = 0,
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const updateTilt = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    setTilt({ x: y * -7, y: x * 9 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });
  return (
    <motion.article
      className={featured ? "blog-card featured-card" : "blog-card"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      onClick={() => onOpen(post)}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
    >
      <div
        className="blog-card-surface"
        style={{ "--tilt-x": `${tilt.x}deg`, "--tilt-y": `${tilt.y}deg` }}
      >
        <div className="card-meta">
          <span>{post.tag}</span>
          <span>{post.category}</span>
        </div>
        <div className="card-wave" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="card-bubbles" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="card-fish" aria-hidden="true">
          𓆝
        </span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="card-footer">
          <span>
            <Clock3 size={14} /> {post.readTime}
          </span>
          <span className="read-link">
            Read note <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
