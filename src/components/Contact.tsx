"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    };

    try {
      // User's EmailJS Service ID: service_1auk6mr
      const serviceId = "service_1auk6mr";
      
      // Reading from environment variables or utilizing direct placeholders
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (
        templateId === "YOUR_TEMPLATE_ID" || 
        publicKey === "YOUR_PUBLIC_KEY" || 
        publicKey === "service_1auk6mr" ||
        !publicKey || 
        publicKey.startsWith("service_")
      ) {
        console.warn(
          "EmailJS Public Key is either missing, using placeholders, or set to the Service ID by mistake.",
          "Simulating a successful submission in development..."
        );
        // Simulation for testing the premium UI states in development
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setErrorMsg("Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter par e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.grid}>
          {/* Info side */}
          <div className={styles.infoSide}>
            <p className="tag">Contactez-nous</p>
            <h2 className={styles.title}>
              Obtenez Votre Devis<br />
              Solaire Gratuit Aujourd&apos;hui !
            </h2>
            <p className={styles.desc}>
              Remplissez le formulaire et l&apos;un de nos experts en énergie renouvelable vous répondra
              dans les 24 heures avec une proposition personnalisée.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.84a19.5 19.5 0 01-6.91-6.88 19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.28h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.07 6.07l.95-.95a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Appelez-nous</div>
                  <div className={styles.contactValue}>+212 665-176718</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>info@smeree.ma</div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Notre Emplacement</div>
                  <div className={styles.contactValue}>Avenue Annakhil, Hay Riad, Rabat, Maroc</div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/212665176718?text=Bonjour%20SMEREE%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20vos%20solutions%20%C3%A9nerg%C3%A9tiques."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappContactBtn}
              id="whatsapp-contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.76.001-2.605-1.01-5.055-2.85-6.895-1.84-1.84-4.291-2.853-6.899-2.854-5.444 0-9.866 4.384-9.868 9.761-.001 1.77.469 3.491 1.362 5.021l-.979 3.57 3.668-.962zm10.849-7.399c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.15-.174.2-.298.3-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Nous écrire sur WhatsApp
            </a>
          </div>

          {/* Form side */}
          <div className={styles.formSide}>
            {submitted ? (
              <div className={styles.successMsg}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
                <h3>Message Envoyé !</h3>
                <p>Nous reviendrons vers vous dans les 24 heures.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                <h3 className={styles.formTitle}>Demander une Consultation Gratuite</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">Nom Complet</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email">Adresse Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="jean.dupont@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-phone">Numéro de Téléphone</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+212 665-176718"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-service">Service Souhaité</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="Vente et Installation">Vente et Installation</option>
                      <option value="Contrats de Maintenance">Contrats de Maintenance</option>
                      <option value="Services de Réparation">Services de Réparation</option>
                      <option value="Conseil Technique">Conseil Technique</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message">Votre Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Parlez-nous de votre projet..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}

                <button 
                  type="submit" 
                  className="btn-primary" 
                  id="contact-submit" 
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      Envoi en cours...
                      <span className={styles.spinner}></span>
                    </>
                  ) : (
                    <>
                      Envoyer le Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
