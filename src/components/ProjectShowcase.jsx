import { ArrowUpRight, Code2, ExternalLink, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import OceanDecor from "./OceanDecor";
const projects = [
  {
    title: "Form Registrasi Sederhana",
    type: "HTML / CSS / SQL",
    url: "https://thann.xo.je/",
    detail:
      "Sebuah dermaga registrasi sederhana dengan PHP, XAMPP, dan phpMyAdmin.",
  },
  {
    title: "Blog Pertama",
    type: "HTML / CSS",
    url: "https://fifty1tien.github.io/First-Blog/",
    detail:
      "Eksperimen pertama merangkai cerita, visual, dan kode menjadi satu halaman.",
  },
];
export default function ProjectShowcase({ onDetail }) {
  return (
    <section className="projects-section section-shell" id="latest">
      <OceanDecor variant="fleet" />
      <div className="section-heading">
        <div>
          <span className="section-kicker">LATEST ARTIFACT OF SEA</span>
          <h2>
            Things I’ve
            <br />
            <em>anchored.</em>
          </h2>
        </div>
        <p>
          Setiap proyek adalah jejak kecil dari rasa ingin tahu yang terus
          bergerak. Lihat apa yang baru saja berlabuh.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.article
            className="project-row"
            key={project.title}
            initial={{ opacity: 0, x: index ? 35 : -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.28)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12 }}
          >
            <div className="project-number">0{index + 1}</div>
            <motion.div
              className="project-icon"
              whileHover={{ rotate: 12, scale: 1.12 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              {index ? <Code2 size={25} /> : <Globe2 size={25} />}
            </motion.div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <span>{project.type}</span>
              <p>{project.detail}</p>
            </div>
            <a
              className="round-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Buka ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
            <button className="detail-button" onClick={onDetail}>
              View detail <ArrowUpRight size={15} />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
