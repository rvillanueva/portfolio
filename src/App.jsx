import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { HomePage, ContactPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Overlay, Drawer, Navbar } from "./components";
import { AnimatePresence, motion } from "framer-motion";
import portfolioData from "./data/portfolioData";

function App() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [loadBackground, setLoadBackground] = useState(false);
  const [loadPortfolio, setLoadPortfolio] = useState(false);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [openProjectId, setOpenProjectId] = useState(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  useEffect(() => {
    const url = new URL(window.location);
    if (url.pathname.indexOf("index.html") > 0) {
      window.location = "/";
    }

    const cutoff = 160;
    const onScroll = () => {
      setIsScrolledDown(window.scrollY > cutoff);
    };
    window.addEventListener("scroll", onScroll);

    const backgroundTimer = setTimeout(() => setLoadBackground(true), 1000);
    const portfolioTimer = setTimeout(() => setLoadPortfolio(true), 750);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(backgroundTimer);
      clearTimeout(portfolioTimer);
    };
  }, []);

  const openProjectById = useCallback((projectId) => {
    setOverlayIsOpen(true);
    setOpenProjectId(projectId);
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayIsOpen(false);
    setOpenProjectId(null);
  }, []);

  const toggleDrawer = useCallback((bool) => {
    setDrawerIsOpen((prev) => (typeof bool === "boolean" ? bool : !prev));
  }, []);

  const openProject =
    portfolioData.items.find((item) => item._id === openProjectId) || null;

  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer} isScrolledDown={isScrolledDown} />
      <AnimatePresence>
        {overlayIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Overlay project={openProject} close={closeOverlay} />
          </motion.div>
        )}
      </AnimatePresence>
      <Drawer isOpen={drawerIsOpen} close={() => toggleDrawer(false)} />
      <div className="page-content">
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/"
            element={
              <HomePage
                isScrolledDown={isScrolledDown}
                openProjectById={openProjectById}
                loadBackground={loadBackground}
                loadPortfolio={loadPortfolio}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
