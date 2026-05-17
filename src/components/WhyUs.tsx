import styles from "./WhyUs.module.css";

const reasons = [
  {
    id: "certified",
    num: "01",
    title: "Experts Certifiés",
    desc: "Notre équipe détient des certifications de premier plan en installation solaire, génie électrique et conception de systèmes énergétiques.",
  },
  {
    id: "quality",
    num: "02",
    title: "Panneaux de Qualité Premium",
    desc: "Nous utilisons uniquement des panneaux solaires de grade A, avec des taux d'efficacité leaders du secteur et des garanties de performance de 25 ans.",
  },
  {
    id: "support",
    num: "03",
    title: "Support Dédié",
    desc: "Surveillance 24h/24, équipes de maintenance réactives et un responsable de compte dédié pour chaque client tout au long de la vie de votre système.",
  },
  {
    id: "roi",
    num: "04",
    title: "Meilleur Retour sur Investissement",
    desc: "Nos clients économisent en moyenne 60 à 80 % sur leur facture d'électricité. La plupart des systèmes s'autofinancent en moins de 7 ans avec un ROI de 400 %+.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className="container">
        <div className={styles.header}>
          <p className="tag">Pourquoi Nous Choisir</p>
          <h2 className="section-title">
            Le Choix Intelligent Pour<br />
            Les Solutions Énergies Vertes
          </h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.id} className={styles.card} id={`why-${r.id}`}>
              <div className={styles.cardNum}>{r.num}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
              </div>
              <div className={styles.cardArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>Prêt à Passer à l&apos;Énergie Solaire ?</h3>
            <p>Rejoignez des milliers de clients satisfaits qui économisent de l&apos;argent et protègent la planète.</p>
          </div>
          <a href="#contact" className="btn-primary" id="whyus-cta-btn">
            Obtenir un Devis Gratuit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Wave divider to transition to Projects */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <g fill="currentColor">
            <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z" opacity=".5"></path>
            <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z" opacity=".5"></path>
            <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
          </g>
        </svg>
      </div>
    </section>
  );
}
