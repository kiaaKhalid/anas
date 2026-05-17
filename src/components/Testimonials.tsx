import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: "test-1",
    name: "Michel Dupont",
    role: "Propriétaire, Lyon",
    rating: 5,
    text:
      "SMEREE a installé un système de 12 kW chez nous et nous avons réduit notre facture d'électricité de 85 %. L'équipe était professionnelle, propre et a terminé avant le délai prévu. Je recommande vivement !",
    initials: "MD",
  },
  {
    id: "test-2",
    name: "Sophie Martin",
    role: "Cheffe d'Entreprise, Bordeaux",
    rating: 5,
    text:
      "En tant que cheffe d'entreprise, l'analyse de rentabilité fournie par SMEREE était exactement ce dont j'avais besoin. 18 mois après, nous avons déjà récupéré 30 % de notre investissement. Service exceptionnel.",
    initials: "SM",
  },
  {
    id: "test-3",
    name: "David Leblanc",
    role: "Promoteur Immobilier, Paris",
    rating: 5,
    text:
      "Nous avons travaillé avec SMEREE sur 12 propriétés commerciales. Leur gestion de projet est irréprochable et la qualité de leurs installations est incomparable.",
    initials: "DL",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <p className="tag">Témoignages Clients</p>
          <h2 className="section-title">
            Ce Que Disent Nos Clients<br />À Propos de SMEREE
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card} id={t.id}>
              <div className={styles.quoteIcon}>❝</div>
              <p className={styles.text}>{t.text}</p>
              <StarRating count={t.rating} />
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spiky wave divider to transition to Contact */}
      <div className={styles.waveDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0 0h1000v4H0zM10 100 0 4h20l-10 96zM30 100 20 4h20l-10 96zM50 100 40 4h20l-10 96zM70 100 60 4h20l-10 96zM90 100 80 4h20l-10 96zM110 100 100 4h20l-10 96zM130 100 120 4h20l-10 96zM150 100 140 4h20l-10 96zM170 100 160 4h20l-10 96zM190 100 180 4h20l-10 96zM210 100 200 4h20l-10 96zM230 100 220 4h20l-10 96zM250 100 240 4h20l-10 96zM270 100 260 4h20l-10 96zM290 100 280 4h20l-10 96zM310 100 300 4h20l-10 96zM330 100 320 4h20l-10 96zM350 100 340 4h20l-10 96zM370 100 360 4h20l-10 96zM390 100 380 4h20l-10 96zM410 100 400 4h20l-10 96zM430 100 420 4h20l-10 96zM450 100 440 4h20l-10 96zM470 100 460 4h20l-10 96zM490 100 480 4h20l-10 96zM510 100 500 4h20l-10 96zM530 100 520 4h20l-10 96zM550 100 540 4h20l-10 96zM570 100 560 4h20l-10 96zM590 100 580 4h20l-10 96zM610 100 600 4h20l-10 96zM630 100 620 4h20l-10 96zM650 100 640 4h20l-10 96zM670 100 660 4h20l-10 96zM690 100 680 4h20l-10 96zM710 100 700 4h20l-10 96zM730 100 720 4h20l-10 96zM750 100 740 4h20l-10 96zM770 100 760 4h20l-10 96zM790 100 780 4h20l-10 96zM810 100 800 4h20l-10 96zM830 100 820 4h20l-10 96zM850 100 840 4h20l-10 96zM870 100 860 4h20l-10 96zM890 100 880 4h20l-10 96zM910 100 900 4h20l-10 96zM930 100 920 4h20l-10 96zM950 100 940 4h20l-10 96zM970 100 960 4h20l-10 96zM990 100 980 4h20l-10 96z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
