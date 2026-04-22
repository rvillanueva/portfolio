import "./drawer.css";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

type DrawerProps = {
  close: () => void;
  isOpen: boolean;
};

function Drawer({ close, isOpen }: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="drawer-overlay"
            className="drawer-overlay"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
          <motion.div
            key="drawer"
            className="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link className="drawer__link" to="/" onClick={close}>
              Portfolio
            </Link>
            <Link className="drawer__link" to="/about" onClick={close}>
              About
            </Link>
            <a
              className="drawer__link"
              href="https://medium.com/@ryanjvillanueva"
              onClick={close}
            >
              Blog
            </a>
            <Link className="drawer__link" to="/contact" onClick={close}>
              Contact
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
