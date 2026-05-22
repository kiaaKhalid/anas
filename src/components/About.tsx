"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const features = [
  { icon: "✅", text: "Certification ISO 9001 Management Qualité" },
  { icon: "✅", text: "Garantie Performance Panneau 25 Ans" },
  { icon: "✅", text: "Experts en Conception Zéro Énergie Nette" },
  { icon: "✅", text: "Assistance aux Subventions Gouvernementales" },
  { icon: "✅", text: "Support Technique d'Urgence 24h/24 7j/7" },
  { icon: "✅", text: "Options de Financement Flexibles Disponibles" },
];

const sliderImages = [
  { src: "/team-photo.png", alt: "Expert technicien solaire" },
  { src: "/solar-field.jpeg", alt: "Champ de panneaux solaires" },
  { src: "/house-solar.jpeg", alt: "Maison équipée de panneaux solaires" },
  { src: "/wind-solar1.jpeg", alt: "Éolienne et panneaux solaires" },
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Image side with auto-scrolling slideshow */}
          <div className={styles.imageWrapper}>
            <div className={styles.mainImage}>
              {sliderImages.map((img, index) => (
                <div
                  key={img.src}
                  className={`${styles.slide} ${index === currentIdx ? styles.activeSlide : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Experience badge */}
            <div className={styles.expBadge}>
              <span className={styles.expNum}>1+</span>
              <span className={styles.expText}>An d&apos;Expérience</span>
            </div>

            {/* Secondary overlapping image (cycles automatically, offset by 1) */}
            <div className={styles.secondaryImage}>
              {sliderImages.map((img, index) => {
                const secIndex = (currentIdx + 1) % sliderImages.length;
                return (
                  <div
                    key={`sec-${img.src}`}
                    className={`${styles.slide} ${index === secIndex ? styles.activeSlide : ""}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 60vw, 25vw"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Text side */}
          <div className={styles.textSide}>
            <p className="tag">À Propos de SMEREE</p>
            <h2 className={styles.aboutTitle}>
              Créer un Impact Propre<br />
              Pour un Avenir Énergétique Meilleur
            </h2>
            <p className={styles.lead}>
              Depuis 2026, SMEREE est à la pointe de la révolution des énergies renouvelables.
              Nous combinons la technologie photovoltaïque de pointe et l&apos;expertise en ingénierie
              pour livrer des installations solaires qui dépassent les attentes et résistent à l&apos;épreuve du temps.
            </p>

            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f.text} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <a href="#services" className="btn-primary" id="about-services-btn">
                Explorer Nos Services
              </a>
              <div className={styles.contactInfo}>
                <div className={styles.phoneBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.68 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.28h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.07 6.07l.95-.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2.03z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.callLabel}>Appelez-nous à tout moment</span>
                  <a href="tel:+212665176718" className={styles.phone}>+212 665-176718</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider to transition to WhyUs */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
