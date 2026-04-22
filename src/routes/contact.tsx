import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import "../pages/Contact/contact-page.css";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact__text-container">
        <motion.div
          initial={{ opacity: 0, y: "20%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="contact-envelope text-center"
        >
          <HiOutlineMailOpen className="inline-block" />
        </motion.div>
        <div className="contact__text">
          Interested in chatting? Shoot me an email at{" "}
          <a href="mailto:ryan@rvillanueva.dev">ryan@rvillanueva.dev</a>.
        </div>
      </div>
    </div>
  );
}
