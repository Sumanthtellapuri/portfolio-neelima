import { motion } from "framer-motion";
import {
  BarChart,
  Database,
  LineChart,
  Lightbulb,
  Target,
  Rocket
} from "lucide-react";
import ParticlesBackground from "../common/ParticlesBackground";
import "./About.css";

// Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 }
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 }
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Particles Background */}
      <ParticlesBackground density={80} />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="about-title"
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* Row: Journey + Drives Me */}
        <div className="about-grid">
          {/* My Journey */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="about-card"
          >
            <h3 className="about-subtitle">
              <Database className="icon text-blue-500" /> My Journey
            </h3>
            <p className="about-text">
              From curiosity with numbers to solving real business problems, my
              journey has shaped me into a{" "}
              <span className="highlight-blue">Data Analyst</span> ready to make
              impact from day one. With expertise in{" "}
              <span className="highlight-purple">
                Python, SQL, Power BI & Tableau
              </span>
              , I transform raw data into{" "}
              <span className="highlight-pink">clear stories and insights</span>{" "}
              that guide smarter decisions.
            </p>
          </motion.div>

          {/* What Drives Me */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-card"
          >
            <h3 className="about-subtitle">
              <Lightbulb className="icon text-yellow-500" /> What Drives Me
            </h3>
            <ul className="about-list">
              <li>📊 Turning data into meaningful decisions</li>
              <li>🔎 Asking the right business questions</li>
              <li>📚 Continuous learning & growth</li>
              <li>🚀 Driving measurable impact</li>
            </ul>
          </motion.div>
        </div>

        {/* Professional Snapshot */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="about-card snapshot"
        >
          <h3 className="about-subtitle center">
            <Target className="icon text-red-500" /> Professional Snapshot
          </h3>
          <div className="snapshot-grid">
            <div className="about-mini-card">
              <BarChart className="mini-icon text-blue-500" />
              <span className="mini-title">Data Analyst</span>
              <p className="mini-text">SQL, Python, Power BI, Tableau</p>
            </div>
            <div className="about-mini-card">
              <LineChart className="mini-icon text-purple-500" />
              <span className="mini-title">Data Storyteller</span>
              <p className="mini-text">Visuals that make insights actionable</p>
            </div>
            <div className="about-mini-card">
              <Rocket className="mini-icon text-pink-500" />
              <span className="mini-title">Problem Solver</span>
              <p className="mini-text">Creative, efficient & impact-driven</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
