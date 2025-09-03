import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="navbar bg-dark shadow-sm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-light px-5">
          To Do List
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
