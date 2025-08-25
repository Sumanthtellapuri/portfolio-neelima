import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { motion } from "framer-motion";
import ParticlesBackground from "../common/ParticlesBackground";
import "./Skills.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  const barData = {
    labels: ["Analytics", "Visualization", "Communication", "Problem-Solving"],
    datasets: [
      {
        label: "Proficiency",
        data: [90, 85, 80, 88],
        backgroundColor: [
          "rgba(59,130,246,0.8)",
          "rgba(139,92,246,0.8)",
          "rgba(236,72,153,0.8)",
          "rgba(16,185,129,0.8)"
        ],
        borderRadius: 12
      }
    ]
  };

  const pieData = {
    labels: ["Python", "SQL", "Power BI", "Tableau", "Excel"],
    datasets: [
      {
        label: "Skill Distribution",
        data: [85, 80, 90, 75, 85],
        backgroundColor: [
          "rgba(59,130,246,0.8)",
          "rgba(16,185,129,0.8)",
          "rgba(139,92,246,0.8)",
          "rgba(236,72,153,0.8)",
          "rgba(251,191,36,0.8)"
        ],
        borderWidth: 2,
        borderColor: "#fff"
      }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <ParticlesBackground density={50} />

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="skills-title"
      >
        Skills
      </motion.h2>

      {/* Charts Grid */}
      <div className="skills-grid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="skills-card chart-container"
        >
          <h3 className="skills-subtitle">Core Strengths</h3>
          <Bar
            data={barData}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: { grid: { color: "#f3f4f6" } },
                x: { grid: { display: false } }
              },
              plugins: { legend: { display: false } }
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="skills-card chart-container"
        >
          <h3 className="skills-subtitle">Technical Skills Split</h3>
          <Pie
            data={pieData}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: { color: "#374151", boxWidth: 14, padding: 10 }
                }
              }
            }}
          />
        </motion.div>
      </div>

      {/* Individual Skills */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="skills-card skills-tags"
      >
        <h3 className="skills-subtitle">Individual Skills</h3>
        <div className="tags-container">
          {[
            "Python",
            "SQL",
            "Power BI",
            "Tableau",
            "Excel",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Statistics",
            "Data Cleaning",
            "ETL",
            "Reporting"
          ].map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
