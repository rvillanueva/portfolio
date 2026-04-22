import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../pages/Home/components/Header/Header";
import Portfolio from "../pages/Home/components/Portfolio/Portfolio";
import Skills from "../pages/Home/Skills";
import Companies from "../pages/Home/Companies";
import portfolioData from "../data/portfolioData";
import "../pages/Home/home-page.css";
import { useOverlay } from "./__root";

const Background = lazy(
  () => import("../pages/Home/components/Background/Background"),
);

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { openProjectById } = useOverlay();
  const [loadBackground, setLoadBackground] = useState(false);
  const [loadPortfolio, setLoadPortfolio] = useState(false);

  useEffect(() => {
    const backgroundTimer = setTimeout(() => setLoadBackground(true), 1000);
    const portfolioTimer = setTimeout(() => setLoadPortfolio(true), 750);
    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(portfolioTimer);
    };
  }, []);

  const showPortfolio =
    (typeof window !== "undefined" && window.scrollY > 300) || loadPortfolio;

  return (
    <div className="home-page">
      {loadBackground ? (
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
        </ClientOnly>
      ) : null}
      <Header />
      <div className="my-24 sm:my-32">
        <Skills />
      </div>
      <div className="my-24 sm:my-32">
        <Companies />
      </div>
      {showPortfolio ? (
        <motion.div
          className="my-24 sm:my-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Portfolio
            openProjectById={openProjectById}
            items={portfolioData.items}
          />
        </motion.div>
      ) : (
        <div className="home-page__header__spacer" />
      )}
    </div>
  );
}
