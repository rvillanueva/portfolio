import { motion } from "framer-motion";

function CompanyList({
  companies,
  reverse,
}: {
  companies: string[];
  reverse?: boolean;
}) {
  return (
    <div className="horizontal-scrolling-items">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`horizontal-scrolling-items__item${
            reverse ? "--reverse" : ""
          }`}
        >
          {companies.map((company) => (
            <span className="company-list__item" key={company}>
              {company}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Companies() {
  const companiesA = [
    "IBM Research",
    "Pepsi",
    "Sephora",
    "Neutrogena",
    "McDonalds",
    "Sunglass Hut",
    "Maui Jim",
    "Petco",
  ];

  const companiesB = [
    "Neiman Marcus",
    "Coravin",
    "Perch Interactive",
    "Leif Technologies",
    "VotER",
    "Bubble & Bubble",
    "Bayer",
    "Jo Malone",
  ];

  return (
    <section>
      <motion.div
        className="mb-10 px-6 text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="section-label">Collaborations</div>
        <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink-800 dark:text-ink-100 sm:text-3xl">
          Brands &amp; teams I&rsquo;ve worked with
        </h2>
      </motion.div>
      <div className="space-y-8">
        <CompanyList companies={companiesA} />
        <CompanyList companies={companiesB} reverse={true} />
      </div>
    </section>
  );
}
