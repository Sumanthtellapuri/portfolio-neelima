import ParticlesBackground from "../common/ParticlesBackground";

const education = [
  {
    degree: "B.Tech, Electronics & Communication Engineering",
    school: "XYZ University",
    period: "2019 – 2023",
    details:
      "Relevant coursework: Probability & Statistics, Data Structures, Signals & Systems."
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-6 scroll-mt-24 overflow-hidden"
    >
      <ParticlesBackground density={30} />
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-12">
        Education
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {edu.degree}
            </h3>
            <div className="text-gray-700 mb-1">{edu.school}</div>
            <div className="text-sm text-gray-600 mb-3">{edu.period}</div>
            <p className="text-gray-700">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

