"use client";

import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const phoneNumber = "212665176718";
  const message = "Bonjour SMEREE, je souhaite obtenir des informations concernant vos solutions énergétiques.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Contactez-nous sur WhatsApp"
      title="Discutez avec nous sur WhatsApp"
    >
      <div className={styles.pulseContainer}>
        <div className={`${styles.pulseRing} ${styles.ring1}`}></div>
        <div className={`${styles.pulseRing} ${styles.ring2}`}></div>
      </div>
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className={styles.whatsappIcon}
        width={32}
        height={32}
      />
      <span className={styles.tooltip}>Besoin d&apos;aide ? Écrivez-nous</span>
    </a>
  );
}
