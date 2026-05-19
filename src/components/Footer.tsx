import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
  "Installation de Panneaux Solaires",
  "Solutions Énergie Éolienne",
  "Stockage par Batterie",
  "Conseil en Énergie",
  "Supervision Intelligente",
  "Maintenance & Réparation",
];

const quickLinks = [
  { label: "À Propos de Nous", href: "#about" },
  { label: "Nos Services", href: "#services" },
  { label: "Projets Récents", href: "#projects" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contactez-nous", href: "#contact" },
  { label: "Politique de Confidentialité", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand col */}
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <Image
                  src="/logo1.png"
                  alt="SMEREE Logo"
                  width={34}
                  height={34}
                  style={{ objectFit: "contain" }}
                />
                <span>SMEREE</span>
              </div>
              <p className={styles.brandDesc}>
                Premier fournisseur de solutions d&apos;énergie solaire depuis 2004.
                Engagé à propulser un avenir durable grâce à des technologies d&apos;énergie propre et renouvelable.
              </p>
              <div className={styles.socials}>
                {[
                  { label: "f", url: "https://facebook.com" },
                  { label: "t", url: "https://twitter.com" },
                  { label: "in", url: "https://linkedin.com" },
                  { label: "yt", url: "https://youtube.com" }
                ].map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.socialLink}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services col */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Nos Services</h4>
              <ul className={styles.list}>
                {services.map((s) => (
                  <li key={s}>
                    <a href="#services">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links col */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Liens Rapides</h4>
              <ul className={styles.list}>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter col */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Newsletter</h4>
              <p className={styles.newsletterText}>
                Abonnez-vous pour obtenir les dernières nouvelles sur les subventions solaires et nos promotions.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  id="footer-newsletter-email"
                  placeholder="Votre adresse email"
                  aria-label="Newsletter email"
                />
                <button id="footer-newsletter-btn" aria-label="S'abonner">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className={styles.workHours}>
                <h5>Heures d&apos;ouverture</h5>
                <p>Lun – Ven : 8h00 – 18h00</p>
                <p>Samedi : 9h00 – 16h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>© {new Date().getFullYear()} SMEREE. Tous droits réservés.</p>
            <div className={styles.bottomLinks}>
              <a href="/privacy">Politique de Confidentialité</a>
              <a href="/terms">Conditions de Service</a>
              <a href="/cookies">Politique relative aux Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
