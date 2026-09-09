import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import { posts } from "./data/posts";
import RandomArticleFishing from "./components/RandomArticleFishing";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [article, setArticle] = useState(null);
  const [fishingPost, setFishingPost] = useState(null);
  useEffect(() => {
    document.body.classList.toggle("night-mode", isDark);
  }, [isDark]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, article]);
  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);
  const navigate = (nextPage) => {
    setArticle(null);
    setPage(nextPage);
  };
  const openPost = (post) => {
    setFishingPost(null);
    setArticle(posts.find((item) => item.id === post.id));
    setPage("article");
  };
  const castForArticle = () => {
    const options = posts.filter((post) => post.id !== article?.id);
    setFishingPost(
      options[Math.floor(Math.random() * options.length)] || posts[0],
    );
  };
  const content = article ? (
    <Article post={article} onBack={() => navigate("blog")} />
  ) : page === "home" ? (
    <Home setPage={navigate} openPost={openPost} />
  ) : page === "about" ? (
    <About />
  ) : page === "work" ? (
    <Work />
  ) : (
    <Blog openPost={openPost} />
  );
  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-screen"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1] }}
            aria-label="Memuat Ocean Journal"
          >
            <div
              className="loading-tide loading-tide-back"
              aria-hidden="true"
            />
            <div className="loading-tide loading-tide-mid" aria-hidden="true" />
            <div
              className="loading-tide loading-tide-front"
              aria-hidden="true"
            />
            <div className="loading-content">
              <span className="loading-kicker">WELCOME ABOARD / 2026</span>
              <div className="loading-brand">
                <span className="brand-mark">SM</span>
                <strong>OCEAN JOURNAL</strong>
              </div>
              <div className="loading-meter">
                <span />
              </div>
              <span className="loading-status">
                gathering the tide<span className="loading-dots">...</span>
              </span>
            </div>
            <div className="loading-bubbles" aria-hidden="true">
              {Array.from({ length: 18 }, (_, index) => (
                <i
                  key={index}
                  style={{
                    "--bubble": index,
                    "--bubble-left": `${(index * 37) % 98}%`,
                    "--bubble-size": `${8 + (index % 5) * 3}px`,
                    "--bubble-delay": `${-(index * 0.45)}s`,
                  }}
                />
              ))}
            </div>
            <div className="loading-life" aria-hidden="true">
              <div className="loading-depth loading-depth-far">
                <div className="loading-coral loading-coral-left">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="loading-kelp loading-kelp-far">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="loading-seahorse">
                  <b />
                  <i />
                </div>
              </div>
              <div className="loading-submarine">
                <span className="submarine-window" />
                <span className="submarine-window" />
                <span className="submarine-periscope" />
                <span className="submarine-fin" />
              </div>
              <div className="loading-school">
                {Array.from({ length: 14 }, (_, index) => (
                  <span
                    key={index}
                    style={{
                      "--fish": index % 4,
                      "--fish-x": `${(index * 47) % 330}px`,
                      "--fish-y": `${(index * 71) % 155}px`,
                      "--fish-size": `${14 + (index % 4) * 5}px`,
                      "--fish-rotate": `${index % 2 ? -8 : 6}deg`,
                      "--fish-delay": `${-(index * 0.22)}s`,
                    }}
                  >
                    {index % 3 === 0 ? "𓆝" : index % 3 === 1 ? "𓆟" : "𓆞"}
                  </span>
                ))}
              </div>
              <div className="loading-turtle-pod">
                <span>🐢</span>
                <span>🐢</span>
                <span>🐢</span>
                <span>🐢</span>
              </div>
              <div className="loading-jellyfish">
                <b />
                <i />
                <i />
                <i />
              </div>
              <div className="loading-depth loading-depth-near">
                <div className="loading-coral loading-coral-right">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="loading-kelp">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="loading-wave loading-wave-back" />
            <div className="loading-wave loading-wave-mid" />
            <div className="loading-wave loading-wave-front" />
          </motion.div>
        )}
      </AnimatePresence>
      <CustomCursor />
      <RandomArticleFishing
        post={fishingPost}
        onCast={castForArticle}
        onOpen={openPost}
        onClose={() => setFishingPost(null)}
      />
      <Header
        page={page}
        setPage={navigate}
        isDark={isDark}
        toggleTheme={() => setIsDark((value) => !value)}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={page + (article?.id || "")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
