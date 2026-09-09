import { Fish, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function RandomArticleFishing({
  post,
  onCast,
  onOpen,
  onClose,
}) {
  return (
    <>
      <button
        className="fishing-trigger"
        onClick={onCast}
        aria-label="Pancing artikel acak"
        title="Pancing artikel acak"
      >
        <span className="fishing-line" />
        <Fish size={20} />
      </button>
      <AnimatePresence>
        {post && (
          <motion.div
            className="fishing-catch"
            initial={{ y: "120%", rotate: -5, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: "120%", rotate: 5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 170, damping: 18 }}
          >
            <button
              className="fishing-close"
              onClick={onClose}
              aria-label="Tutup rekomendasi"
            >
              <X size={15} />
            </button>
            <span className="section-kicker">CAUGHT FROM THE DEEP</span>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
            <button className="fishing-read" onClick={() => onOpen(post)}>
              Buka artikel <Fish size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
