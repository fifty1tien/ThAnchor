import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play, Sparkles } from "lucide-react";
import OceanDecor from "./OceanDecor";
export default function Hero({ onExplore }) {
  const { scrollY } = useScroll();
  const fishY = useTransform(scrollY, [0, 700], [0, 180]);
  return (
    <section className="hero section-shell">
      <OceanDecor />
      <motion.div className="fish-silhouette" style={{ y: fishY }}>
        𓆝
      </motion.div>
      <div className="bubble-field" aria-hidden="true">
        {Array.from({ length: 16 }, (_, index) => (
          <i key={index} style={{ "--i": index }} />
        ))}
      </div>
      <div className="hero-copy">
        <motion.div
          className="eyebrow reveal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Sparkles size={14} /> DIGITAL OCEAN JOURNAL / 2026
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7 }}
        >
          A little
          <br />
          <em>blue</em> goes a<br />
          long way<span className="coral-dot">.</span>
        </motion.h1>
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62 }}
        >
          Ruang kecil milik <strong>M. Sulthan Muzaki</strong> — pelajar RPL,
          pembuat karya, dan pengumpul cerita dari laut yang luas.
        </motion.p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={onExplore}>
            Explore the journal <ArrowUpRight size={17} />
          </button>
          <button
            className="ghost-btn"
            onClick={() =>
              document
                .getElementById("latest")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Play size={14} fill="currentColor" /> Latest artifact
          </button>
        </div>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="orbit-core">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHqiRyXBgZ_2A/profile-displayphoto-crop_800_800/B4EaBqnVPXIIAI-/0/1788495093804?e=1790208000&v=beta&t=0t-6L2k7i434_M-I6jsVIUydKnpGPbTytTJfY60GZlA"
            alt="Profil M. Sulthan Muzaki"
          />
        </div>
        <div className="orbit-label">
          PALEMBANG
          <br />— 03.13.11
        </div>
      </div>
      <div className="scroll-cue">
        <span>scroll to dive</span>
        <ArrowDown size={17} />
      </div>
    </section>
  );
}
