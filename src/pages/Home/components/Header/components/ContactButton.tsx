import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactButton() {
  return (
    <motion.a
      href="mailto:ryanvill@gmail.com"
      className="inline-block py-3 px-10 text-base text-gray-800 rounded-xl bg-white border-2 border-gray-600 hover:transition-all font-semibold hover:bg-gray-600 hover:text-white"
      initial={{ opacity: 0, y: -40 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 0.5,
        delay: 1.2,
      }}
      whileHover="hover"
    >
      Get In Touch
      <motion.div
        className="inline-block ml-1"
        initial={{ y: 2, rotate: -40 }}
        variants={{
          hover: {
            y: 0,
            rotate: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          },
        }}
      >
        <FaArrowRight className="inline-block relative -mt-1 ml-2" />
      </motion.div>
    </motion.a>
  );
}
