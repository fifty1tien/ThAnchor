import {
  Anchor,
  Camera,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Waves,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
export default function Header({ page, setPage, isDark, toggleTheme }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const links = [
    ["home", "The Shore"],
    ["about", "The Captain"],
    ["work", "The Fleet"],
    ["blog", "The Deep Ocean"],
  ];
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.28;
  }, []);
  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };
  return (
    <header className="site-header">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}MP3/bgm.mp3`}
        loop
        preload="metadata"
      />
      <button
        className="brand"
        onClick={() => setPage("home")}
        aria-label="Kembali ke halaman utama"
      >
        <span className="brand-mark">
          <Waves size={20} />
        </span>
        <span>
          SULTHAN<span className="brand-dot">.</span>
        </span>
      </button>
      <nav className="nav-links" aria-label="Navigasi utama">
        {links.map(([key, label]) => (
          <button
            key={key}
            className={page === key ? "nav-link active" : "nav-link"}
            onClick={() => setPage(key)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="icon-link"
          href="https://www.instagram.com/fifty1tien"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Camera size={17} />
        </a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? "Gunakan mode terang" : "Gunakan mode gelap"}
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button
          className={isPlaying ? "music-toggle is-playing" : "music-toggle"}
          onClick={toggleMusic}
          aria-label={isPlaying ? "Matikan musik latar" : "Putar musik latar"}
          title={isPlaying ? "Matikan musik latar" : "Putar musik latar"}
        >
          {isPlaying ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>
        <button
          className="contact-pill"
          onClick={() => {
            setPage("home");
            window.setTimeout(
              () =>
                document
                  .querySelector(".contact-strip")
                  ?.scrollIntoView({ behavior: "smooth" }),
              80,
            );
          }}
        >
          <Anchor size={15} /> Say hello
        </button>
      </div>
    </header>
  );
}
