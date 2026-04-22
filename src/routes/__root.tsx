import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Drawer, Navbar, Overlay } from "../components";
import portfolioData from "../data/portfolioData";
import appCss from "../App.css?url";
import indexCss from "../index.css?url";

type OverlayContextValue = {
  openProjectById: (projectId: string) => void;
};

const OverlayContext = createContext<OverlayContextValue>({
  openProjectById: () => {},
});

export function useOverlay() {
  return useContext(OverlayContext);
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#fbfaf7" },
      {
        name: "description",
        content:
          "Ryan Villanueva is a full stack software engineer in New York City with over nine years of professional experience leading technical projects and teams. He graduated from Wharton and worked at IBM Research's innovation lab before moving to venture-backed startups.",
      },
      { title: "Ryan Villanueva" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: indexCss },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap",
      },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
      { rel: "manifest", href: "/icons/manifest.json" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <AppShell />
    </RootDocument>
  );
}

function AppShell() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  useEffect(() => {
    const cutoff = 160;
    const onScroll = () => {
      setIsScrolledDown(window.scrollY > cutoff);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openProjectById = useCallback((projectId: string) => {
    setOverlayIsOpen(true);
    setOpenProjectId(projectId);
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlayIsOpen(false);
    setOpenProjectId(null);
  }, []);

  const toggleDrawer = useCallback((bool?: boolean) => {
    setDrawerIsOpen((prev) => (typeof bool === "boolean" ? bool : !prev));
  }, []);

  const openProject =
    portfolioData.items.find((item) => item._id === openProjectId) || null;

  return (
    <OverlayContext.Provider value={{ openProjectById }}>
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
      <main className="page-content">
        <Outlet />
      </main>
    </OverlayContext.Provider>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
