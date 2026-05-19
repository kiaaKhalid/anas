import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "project-1",
    image: "/solar-field.png",
    title: "Ferme Solaire du Désert",
    category: "Commercial",
    power: "2,4 MW",
    location: "Provence-Alpes-Côte d'Azur",
  },
  {
    id: "project-2",
    image: "/house-solar.png",
    title: "Complexe Résidentiel",
    category: "Résidentiel",
    power: "120 kW",
    location: "Île-de-France",
  },
  {
    id: "project-3",
    image: "/wind-solar.png",
    title: "Hybride Éolien & Solaire",
    category: "Système Hybride",
    power: "5,8 MW",
    location: "Normandie",
  },
  {
    id: "project-4",
    image: "/hero-bg.png",
    title: "Siège Social d'Entreprise",
    category: "Commercial",
    power: "850 kW",
    location: "Grand Est",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="tag">Projets Récents</p>
            <h2 className="section-title">
              Nos Dernières<br />Installations Solaires
            </h2>
          </div>
          <a href="#projects" className="btn-primary" id="projects-view-all">
            Voir Tous les Projets
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card} id={p.id}>
              <div className={styles.imageWrap}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay}>
                  <span className={styles.category}>{p.category}</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>{p.title}</h3>
                <div className={styles.meta}>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {p.location}
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                    {p.power}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider to transition to Testimonials */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
