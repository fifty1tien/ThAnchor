import { ArrowUpRight, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
export default function BlogCard({
  post,
  onOpen,
  featured = false,
  index = 0,
}) {
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
    </motion.article>
  );
}
