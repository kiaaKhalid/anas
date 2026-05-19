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
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 24 24"
        fill="currentColor"
        width="28"
        height="28"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.76.001-2.605-1.01-5.055-2.85-6.895-1.84-1.84-4.291-2.853-6.899-2.854-5.444 0-9.866 4.384-9.868 9.761-.001 1.77.469 3.491 1.362 5.021l-.979 3.57 3.668-.962zm10.849-7.399c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.15-.174.2-.298.3-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      </svg>
      <span className={styles.tooltip}>Besoin d&apos;aide ? Écrivez-nous</span>
    </a>
  );
}
