import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/30 text-center py-8 text-gray-600 text-sm">
        © 2025 Neelima. Built with React, TailwindCSS, and ❤️
      </footer>
    </div>
  );
}

export default App;
