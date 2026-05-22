"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const heroImages = [
  "/hero-bg.png",
  "/solar-field.jpeg",
  "/wind-solar1.jpeg",
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Background image slider */}
      <div className={styles.bgWrapper}>
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`${styles.slide} ${index === currentIdx ? styles.activeSlide : ""}`}
          >
            <Image
              src={src}
              alt="Solar energy installations"
              fill
              priority={index === 0}
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
            />
          </div>
        ))}
        <div className={styles.overlay} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Nous Énergisons Le Solaire Pour<br />
            <span>Le Meilleur Service !</span>
          </h1>

          <p className={styles.subtitle}>
            Nous menons la transition vers l&apos;énergie propre grâce à l&apos;installation professionnelle
            de panneaux solaires, des solutions éoliennes et un conseil en énergie verte complet
            pour les particuliers et les entreprises.
          </p>

          <div className={styles.ctas}>
            <a href="#services" className="btn-primary" id="hero-services-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Nos Services
            </a>
            <a href="#contact" className="btn-outline" id="hero-contact-btn">
              Devis Gratuit
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider to transition to Services */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
