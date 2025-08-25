import ParticlesBackground from "../common/ParticlesBackground";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Acme Analytics",
    period: "Jun 2024 – Dec 2024",
    points: [
      "Built KPI dashboards in Power BI used by 5+ stakeholders",
      "Automated weekly Excel reports with Python (pandas) reducing time by 60%",
      "Created SQL queries to extract and transform data from multiple sources"
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 px-6 scroll-mt-24 overflow-hidden"
    >
      <ParticlesBackground density={35} />
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
        Experience
      </h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-600">{exp.period}</span>
            </div>
            <p className="text-gray-700 mb-3">{exp.company}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
