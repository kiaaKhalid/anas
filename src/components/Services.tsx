import styles from "./Services.module.css";

const services = [
  {
    id: "solar-panels",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="#22c55e" strokeWidth="2" fill="none" />
        <line x1="4" y1="16" x2="36" y2="16" stroke="#22c55e" strokeWidth="2" />
        <line x1="4" y1="24" x2="36" y2="24" stroke="#22c55e" strokeWidth="2" />
        <line x1="16" y1="8" x2="16" y2="32" stroke="#22c55e" strokeWidth="2" />
        <line x1="24" y1="8" x2="24" y2="32" stroke="#22c55e" strokeWidth="2" />
        <line x1="20" y1="32" x2="20" y2="38" stroke="#22c55e" strokeWidth="2" />
        <line x1="14" y1="38" x2="26" y2="38" stroke="#22c55e" strokeWidth="2" />
      </svg>
    ),
    title: "Installation de Panneaux Solaires",
    description:
      "Installation professionnelle de panneaux photovoltaïques haute efficacité pour les particuliers et les entreprises. Systèmes sur mesure pour une production d'énergie maximale.",
  },
  {
    id: "wind-energy",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="3" fill="#22c55e" />
        <path d="M20 17L18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6L20 17Z" fill="#22c55e" />
        <path d="M22.6 21.5L32 16C32.95 15.45 34.1 15.78 34.66 16.73C35.21 17.68 34.88 18.83 33.93 19.39L22.6 21.5Z" fill="#22c55e" />
        <path d="M17.4 21.5L7.07 19.39C6.12 18.83 5.79 17.68 6.34 16.73C6.9 15.78 8.05 15.45 9 16L17.4 21.5Z" fill="#22c55e" />
        <line x1="20" y1="23" x2="20" y2="36" stroke="#22c55e" strokeWidth="2" />
      </svg>
    ),
    title: "Solutions Énergie Éolienne",
    description:
      "Services complets d'installation et de maintenance d'éoliennes. Exploitez l'énergie du vent pour compléter votre système solaire et bénéficier d'une énergie propre 24h/24.",
  },
  {
    id: "consulting",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 32V18L20 8L32 18V32H24V24H16V32H8Z" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <circle cx="20" cy="19" r="3" stroke="#22c55e" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Conseil en Énergie",
    description:
      "Consultation d'experts pour évaluer vos besoins énergétiques, analyser vos habitudes de consommation et concevoir une feuille de route personnalisée en énergie renouvelable.",
  },
  {
    id: "battery-storage",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="12" width="28" height="18" rx="3" stroke="#22c55e" strokeWidth="2" fill="none" />
        <rect x="34" y="17" width="3" height="8" rx="1.5" fill="#22c55e" />
        <path d="M18 22L22 16L22 21L26 21L22 27L22 22Z" fill="#22c55e" />
      </svg>
    ),
    title: "Systèmes de Stockage par Batterie",
    description:
      "Solutions avancées de stockage d'énergie pour conserver l'excédent solaire et l'utiliser la nuit ou lors de coupures. Indépendance énergétique tout autour du cadran.",
  },
  {
    id: "maintenance",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M32 8L28 12M28 12L20 20M28 12L24 12M28 12L28 16" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 28C10 28 14 24 16 22L24 30C22 32 18 36 14 36C11.8 36 10 34.2 10 32C10 30.8 10 28 10 28Z" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <circle cx="28" cy="12" r="5" stroke="#22c55e" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Maintenance & Réparation",
    description:
      "Programmes de maintenance complets et services de réparation rapide pour maintenir votre installation solaire à un niveau de performance optimal année après année.",
  },
  {
    id: "monitoring",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="20" rx="2" stroke="#22c55e" strokeWidth="2" fill="none" />
        <polyline points="12,22 16,16 20,20 24,14 28,18" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="#22c55e" strokeWidth="2" />
      </svg>
    ),
    title: "Supervision Intelligente",
    description:
      "Systèmes de surveillance en temps réel avec intégration d'application mobile. Suivez la production, la consommation et les économies d'énergie depuis n'importe où.",
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
                <div className={styles.cardIcon}>{svc.icon}</div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.description}</p>
                <a href="#contact" className={styles.cardLink}>
                  En Savoir Plus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
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
