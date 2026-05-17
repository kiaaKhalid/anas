import styles from "./Services.module.css";

const services = [
  {
    id: "installation",
    image: "/service_installation.png",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-install" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22c55e" />
            <stop offset="1" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="grad-sun" x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eab308" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="4" y="18" width="40" height="24" rx="4" fill="url(#grad-install)" opacity="0.15" />
        <path d="M24 4L6 18H42L24 4Z" fill="url(#grad-install)" />
        <rect x="12" y="22" width="10" height="8" rx="2" stroke="#22c55e" strokeWidth="2.5" fill="#0d1b2e" />
        <rect x="26" y="22" width="10" height="8" rx="2" stroke="#22c55e" strokeWidth="2.5" fill="#0d1b2e" />
        <path d="M17 22V30M31 22V30" stroke="#22c55e" strokeWidth="1.5" />
        <circle cx="36" cy="10" r="5" fill="url(#grad-sun)" />
        <path d="M36 3V7M36 13V17M29 10H33M39 10H43" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Vente et Installation",
    description: "Revenus principaux générés par la fourniture et la pose de systèmes photovoltaïques. Marge bénéficiaire attractive sur les équipements et la main-d'œuvre qualifiée.",
  },
  {
    id: "maintenance",
    image: "/service_maintenance.png",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="#22c55e" strokeWidth="2.5" fill="#0d1b2e" />
        <path d="M18 4H30V8H18V4Z" fill="url(#grad-install)" />
        <circle cx="24" cy="6" r="2" fill="#0d1b2e" />
        <path d="M16 16H32M16 24H26M16 32H28" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 28L31 31L38 24" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 36C36 38.2 34.2 40 32 40H16C13.8 40 12 38.2 12 36" stroke="#22c55e" strokeWidth="2" />
      </svg>
    ),
    title: "Contrats de Maintenance",
    description: "Revenus récurrents mensuels ou annuels assurant une prévisibilité financière et un engagement long terme avec nos clients.",
  },
  {
    id: "repair",
    image: "/service_repair.png",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#22c55e" strokeWidth="2.5" fill="#0d1b2e" />
        <path d="M6 20H42M6 28H42M18 10V38M30 10V38" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" fill="url(#grad-sun)" opacity="0.2" />
        <path d="M20 20L28 28M28 20L20 28" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 34L8 40" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="8" cy="40" r="1.5" fill="#22c55e" />
      </svg>
    ),
    title: "Services de Réparation",
    description: "Interventions ponctuelles pour les pannes ou remplacements de composants, avec tarifs compétitifs et réactivité garantie.",
  },
  {
    id: "consulting",
    image: "/service_consulting.png",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#22c55e" strokeWidth="2.5" fill="#0d1b2e" />
        <path d="M16 28L22 22L26 26L32 18" stroke="#eab308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="18" r="2.5" fill="#eab308" />
        <path d="M12 32H36" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 10V14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Conseil Technique",
    description: "Prestations d'expertise pour l'optimisation des installations existantes ou la planification de nouveaux projets solaires.",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      {/* Dark header band */}
      <div className={styles.headerBand}>
        <div className="container">
          <div className={styles.headerContent}>
            <p className="tag">Nos Services</p>
            <h2 className={styles.sectionTitle}>
              Nos Services & Solutions Énergétiques
            </h2>
            <p className={styles.sectionDesc}>
              De la consultation initiale à la maintenance continue, nous offrons des services en énergie renouvelable
              de bout en bout, adaptés à vos besoins et à votre budget.
            </p>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className={styles.cardsBg}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((svc) => (
              <div key={svc.id} className={styles.card} id={`service-${svc.id}`}>
                <div className={styles.imageContainer}>
                  <img src={svc.image} alt={svc.title} className={styles.cardImage} />
                  <div className={styles.cardIcon}>{svc.icon}</div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{svc.title}</h3>
                  <p className={styles.cardDesc}>{svc.description}</p>
                  <a href="#contact" className={styles.cardLink}>
                    En Savoir Plus
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider to transition to About */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <g fill="currentColor">
            <path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path>
            <path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path>
            <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path>
          </g>
        </svg>
      </div>
    </section>
  );
}
