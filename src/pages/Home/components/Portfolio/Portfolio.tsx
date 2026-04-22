import PortfolioItem from "./PortfolioItem";
import "./portfolio.css";
import { motion } from "framer-motion";
import type { PortfolioItem as PortfolioItemType } from "../../../../data/portfolioData";

type PortfolioProps = {
  items: PortfolioItemType[];
  openProjectById: (projectId: string) => void;
};

function Portfolio({ items, openProjectById }: PortfolioProps) {
  return (
    <section className="portfolio-section">
      <motion.div
        className="portfolio-section__header"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="section-label">Selected Work</div>
        <h2 className="portfolio-section__heading">
          Recent <em>projects</em>
        </h2>
      </motion.div>
      <motion.div
        className="portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.06 }}
      >
        {items.map((item) => (
          <PortfolioItem
            openProjectById={openProjectById}
            key={item._id}
            item={item}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Portfolio;
