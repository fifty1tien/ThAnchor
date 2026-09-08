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
export default function App() {
  const [page, setPage] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    document.body.classList.toggle("night-mode", isDark);
  }, [isDark]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, article]);
  const navigate = (nextPage) => {
    setArticle(null);
    setPage(nextPage);
  };
  const openPost = (post) => {
    setArticle(posts.find((item) => item.id === post.id));
    setPage("article");
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
      <CustomCursor />
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
