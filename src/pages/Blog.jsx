import { Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { posts } from "../data/posts";
import OceanDecor from "../components/OceanDecor";
export default function Blog({ openPost }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", "Tech", "Design", "Life"];
  const visible = posts.filter(
    (post) =>
      (filter === "All" || post.category === filter) &&
      `${post.title} ${post.excerpt}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <main className="inner-page section-shell blog-page">
      <OceanDecor variant="deep" />
      <motion.div
        className="page-intro"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-kicker">THE DEEP OCEAN / BLOG</span>
        <h1>
          Notes from
          <br />
          below the <em>surface.</em>
        </h1>
        <p>
          Catatan tentang proses, desain, teknologi, dan semua hal yang membuat
          rasa ingin tahu tetap mengapung.
        </p>
      </motion.div>
      <div className="blog-toolbar">
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={
                filter === category ? "filter-tab selected" : "filter-tab"
              }
              onClick={() => setFilter(category)}
            >
              {filter === category && <motion.span layoutId="active-filter" />}
              {category}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search size={17} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the logbook"
          />
        </label>
      </div>
      <div className="blog-grid full-grid">
        {visible.length ? (
          visible.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              onOpen={openPost}
            />
          ))
        ) : (
          <p className="empty-state">Belum ada catatan di arus ini.</p>
        )}
      </div>
    </main>
  );
}
