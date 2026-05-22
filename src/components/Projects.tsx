"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

interface Project {
  id: string;
  image?: string;
  images?: string[];
  title: string;
  category: string;
  power: string;
  location: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    image: "/solar-field.jpeg",
    title: "Ferme Solaire du Désert",
    category: "Commercial",
    power: "2,4 MW",
    location: "Rabat",
  },
  {
    id: "project-2",
    images: ["/house-solar.jpeg", "/house-solar2.jpeg"],
    title: "Complexe Résidentiel",
    category: "Résidentiel",
    power: "120 kW",
    location: "Marrakech",
  },
  {
    id: "project-3",
    image: "/wind-solar1.jpeg",
    title: "Hybride Éolien & Solaire",
    category: "Système Hybride",
    power: "5,8 MW",
    location: "Meknès",
  },
  {
    id: "project-4",
    image: "/hero-bg.png",
    title: "Siège Social d'Entreprise",
    category: "Commercial",
    power: "850 kW",
    location: "Casablanca",
  },
];

const additionalProjects: Project[] = [
  {
    id: "project-5",
    image: "/projet5.jpeg",
    title: "Centrale Solaire Agricole",
    category: "Agricole",
    power: "380 kW",
    location: "Kénitra",
  },
  {
    id: "project-6",
    image: "/projet6.jpeg",
    title: "Complexe Hôtelier Éco-Solaire",
    category: "Commercial",
    power: "150 kW",
    location: "Casablanca",
  },
];

function ProjectImage({ images, image, title, category }: { images?: string[]; image?: string; title: string; category: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgList = images || (image ? [image] : []);

  if (imgList.length === 0) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imgList.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imgList.length) % imgList.length);
  };

  return (
    <div className={styles.imageWrap}>
      {imgList.map((imgSrc, idx) => (
        <div
          key={imgSrc}
          className={`${styles.imageSlide} ${idx === currentIndex ? styles.activeSlide : ""}`}
          style={{
            position: idx === currentIndex ? "relative" : "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: idx === currentIndex ? 1 : 0,
            visibility: idx === currentIndex ? "visible" : "hidden",
            transition: "opacity 0.4s ease-in-out, visibility 0.4s ease-in-out",
          }}
        >
          <Image
            src={imgSrc}
            alt={`${title} - Image ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
      <div className={styles.overlay}>
        <span className={styles.category}>{category}</span>
      </div>
      {imgList.length > 1 && (
        <>
          <button
            className={styles.prevBtn}
            onClick={prevImage}
            aria-label="Image précédente"
          >
            &#10094;
          </button>
          <button
            className={styles.nextBtn}
            onClick={nextImage}
            aria-label="Image suivante"
          >
            &#10095;
          </button>
          <div className={styles.dots}>
            {imgList.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? [...projects, ...additionalProjects] : projects;

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
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-primary"
            id="projects-view-all"
            style={{ border: "none", cursor: "pointer" }}
          >
            {showAll ? "Voir Moins" : "Voir Tous les Projets"}
          </button>
        </div>

        <div className={styles.grid}>
          {displayedProjects.map((p) => (
            <div key={p.id} className={styles.card} id={p.id}>
              <ProjectImage
                images={p.images}
                image={p.image}
                title={p.title}
                category={p.category}
              />
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
