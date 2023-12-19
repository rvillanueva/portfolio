function CompanyList({
  companies,
  reverse,
}: {
  companies: string[];
  reverse?: boolean;
}) {
  return (
    <div className="horizontal-scrolling-items">
      <div
        className={`horizontal-scrolling-items__item${
          reverse ? "--reverse" : ""
        }`}
      >
        {companies.map((company) => (
          <span className="mx-10 text-gray-400 text-lg" key={company}>
            {company}
          </span>
        ))}
      </div>
      <div
        className={`horizontal-scrolling-items__item${
          reverse ? "--reverse" : ""
        }`}
      >
        {companies.map((company) => (
          <span className="mx-10 text-gray-400 text-lg" key={company}>
            {company}
          </span>
        ))}
      </div>
      <div
        className={`horizontal-scrolling-items__item${
          reverse ? "--reverse" : ""
        }`}
      >
        {companies.map((company) => (
          <span className="mx-10 text-gray-400 text-lg" key={company}>
            {company}
          </span>
        ))}
      </div>
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
    <div className="space-y-12">
      <CompanyList companies={companiesA} />
      <CompanyList companies={companiesB} reverse={true} />
    </div>
  );
}
