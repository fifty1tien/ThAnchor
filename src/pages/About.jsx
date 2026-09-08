import { Anchor, Code2, Download, Palette, Radio, Users } from "lucide-react";
import { motion } from "framer-motion";
import OceanDecor from "../components/OceanDecor";
import portraitImage from "../../IMG/Than.png";
const skills = [
  ["HTML / CSS", 88, Code2],
  ["Creative direction", 76, Palette],
  ["Live2D rigging", 68, Radio],
  ["Team & organization", 84, Users],
];
export default function About() {
  return (
    <main className="inner-page section-shell captain-page">
      <OceanDecor variant="captain" />
      <motion.div
        className="page-intro"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-kicker">THE CAPTAIN / ABOUT ME</span>
        <h1>
          Meet the mind
          <br />
          behind the <em>tide.</em>
        </h1>
        <p>
          Halo, aku Sulthan. Pelajar SMK Negeri 4 Palembang yang sedang belajar
          membuat ide-ide kecil terasa punya dunia sendiri.
        </p>
      </motion.div>
      <div className="about-layout">
        <motion.div
          className="portrait-frame captain-portrait"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={portraitImage} alt="M. Sulthan Muzaki" />
          <span className="portrait-caption">
            M. Sulthan Muzaki
            <br />
            <small>RPL student / Palembang</small>
          </span>
        </motion.div>
        <div className="about-copy">
          <span className="section-kicker">A NOTE FROM THE SHORE</span>
          <p className="large-copy">
            Aku percaya karya yang baik lahir dari rasa ingin tahu, keberanian
            mencoba, dan kemauan untuk terus belajar.
          </p>
          <p>
            Saat ini aku duduk di kelas X RPL 2. Di antara coding dan tugas
            sekolah, aku menemukan ruang untuk menggambar, menyanyi, Live2D
            rigging, serta mengeksplorasi hal baru.
          </p>
          <motion.dl
            className="facts"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <dt>Born</dt>
              <dd>Palembang, 13 Mar 2011</dd>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <dt>Sign</dt>
              <dd>Pisces</dd>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <dt>Current</dt>
              <dd>SMK Negeri 4 Palembang</dd>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <dt>Role</dt>
              <dd>Ketua Kelas X RPL 2</dd>
            </motion.div>
          </motion.dl>
          <a
            className="primary-btn"
            href={`${import.meta.env.BASE_URL}CV-Sulthan.html`}
            download="CV-Sulthan.html"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>
      <div className="skills-section">
        <div>
          <span className="section-kicker">TOOLS ON DECK</span>
          <h2>
            Learning by
            <br />
            <em>doing.</em>
          </h2>
        </div>
        <div className="skill-list">
          {skills.map(([name, level, Icon]) => (
            <motion.div
              className="skill"
              key={name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay:
                  skills.indexOf(skills.find((skill) => skill[0] === name)) *
                  0.1,
              }}
            >
              <div className="skill-label">
                <span>
                  <Icon size={16} />
                  {name}
                </span>
                <b>{level}%</b>
              </div>
              <div className="skill-track">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="timeline-note"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <Anchor size={19} />
        <p>
          Aktif berorganisasi sejak SMP: Wakil Ketua OSIS, Wakil Sekretaris,
          Ketua Divisi Medsos Pramuka, dan Ketua Ekstrakurikuler Taekwondo.
          Tahun ini aku ikut Jambore Nasional XII 2026 di Buperta Cibubur,
          Jakarta Timur.
        </p>
      </motion.div>
    </main>
  );
}
