import { ArrowUpRight, Code2, Layers3 } from "lucide-react";
import ProjectShowcase from "../components/ProjectShowcase";
export default function Work() {
  return (
    <main className="inner-page section-shell">
      <div className="page-intro">
        <span className="section-kicker">THE FLEET / PORTFOLIO</span>
        <h1>
          Small ships,
          <br />
          big <em>curiosity.</em>
        </h1>
        <p>
          Dua proyek awal yang menjadi bukti bahwa setiap perjalanan digital
          selalu dimulai dari satu layar kosong.
        </p>
      </div>
      <ProjectShowcase onDetail={() => {}} />
      <div className="case-study">
        <div>
          <span className="section-kicker">CORAL REEFS / DETAIL PROJECT</span>
          <h2>
            From blank page
            <br />
            to <em>working harbor.</em>
          </h2>
        </div>
        <div className="case-copy">
          <p>
            Form Registrasi Sederhana dibuat sebagai latihan menghubungkan
            antarmuka dengan database. Tantangannya adalah menjaga alur input
            tetap mudah dipahami dan data tetap tertata.
          </p>
          <div className="case-grid">
            <span>
              <b>Challenge</b> Membuat alur registrasi yang ringkas.
            </span>
            <span>
              <b>Solution</b> Form terstruktur dengan feedback jelas.
            </span>
            <span>
              <b>Technology</b> HTML, CSS, SQL, XAMPP, phpMyAdmin.
            </span>
            <span>
              <b>Source code</b>{" "}
              <a href="https://thann.xo.je/" target="_blank" rel="noreferrer">
                Open project <ArrowUpRight size={14} />
              </a>
            </span>
          </div>
          <div className="case-tools">
            <Code2 size={18} /> <Layers3 size={18} /> Built from the shore
          </div>
        </div>
      </div>
    </main>
  );
}
