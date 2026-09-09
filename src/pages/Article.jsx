import { ArrowLeft, Clock3 } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
export default function Article({ post, onBack }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const boatLeft = useTransform(progress, [0, 1], ["0%", "100%"]);
  const boatTop = useTransform(
    progress,
    [0, 0.2, 0.45, 0.7, 1],
    ["-1px", "-9px", "1px", "-8px", "-1px"],
  );
  const boatRotation = useTransform(
    progress,
    [0, 0.2, 0.45, 0.7, 1],
    ["-5deg", "5deg", "-4deg", "5deg", "-5deg"],
  );
  return (
    <main className="article-page">
      <div className="reading-progress" aria-label="Progress membaca artikel">
        <motion.svg
          className="reading-wave"
          viewBox="0 0 1200 34"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M0 17 C 90 3, 150 31, 240 17 S 390 3, 480 17 S 630 31, 720 17 S 870 3, 960 17 S 1110 31, 1200 17"
            pathLength="1"
            style={{ pathLength: progress }}
          />
        </motion.svg>
        <motion.span
          className="reading-boat"
          style={{ left: boatLeft, top: boatTop, rotate: boatRotation }}
        >
          ⛵
        </motion.span>
      </div>
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
