import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import "../pages/Contact/contact-page.css";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact__inner">
        <motion.div
          className="contact-envelope"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HiOutlineMailOpen />
        </motion.div>
        <motion.h1
          className="contact__heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Let&rsquo;s talk.
        </motion.h1>
        <motion.p
          className="contact__text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Interested in working together, trading notes, or just saying hi?
          Drop me a line and I&rsquo;ll get back to you soon.
        </motion.p>
        <motion.a
          href="mailto:ryan@rvillanueva.dev"
          className="contact__cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          ryan@rvillanueva.dev
          <HiOutlineArrowUpRight className="contact__cta__icon" />
        </motion.a>
      </div>
    </div>
  );
}
