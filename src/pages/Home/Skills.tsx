import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      label: "HTML/CSS/Javascript",
      year: 2001,
    },
    {
      label: "Node.js",
      year: 2014,
    },

    {
      label: "Python",
      year: 2019,
    },
    {
      label: "React",
      year: 2017,
    },

    {
      label: "Vue.js",
      year: 2020,
    },
    {
      label: "Angular",
      year: 2016,
    },
    {
      label: "AWS",
      year: 2014,
    },
    {
      label: "SQL/MySQL/PostgreSQL",
      year: 2017,
    },
    {
      label: "NoSQL/MongoDB",
      year: 2014,
    },
  ];

  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <motion.div
      className="flex flex-row justify-center"
      transition={{ duration: 1.4, staggerChildren: 0.05, type: "spring" }}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
    >
      <div className="flex flex-row space-x-12">
        {skills.map((skill) => (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <div className="text-gray-500">{skill.label}</div>
            <div className="text-center text-xs text-gray-400">
              {currentYear - skill.year} years
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
