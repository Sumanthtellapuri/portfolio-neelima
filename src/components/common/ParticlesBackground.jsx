import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * ParticlesBackground
 * Subtle, reusable particle background for sections.
 * Renders as an absolutely positioned, non-interactive layer.
 */
const ParticlesBackground = ({ density = 60 }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsReady(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 } }
      },
      particles: {
        color: { value: ["#60a5fa", "#a78bfa", "#f472b6"] },
        links: {
          enable: true,
          color: "#a78bfa",
          distance: 120,
          opacity: 0.2,
          width: 1
        },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        number: { density: { enable: true, area: 800 }, value: density },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        shape: { type: "circle" }
      }
    }),
    [density]
  );

  if (!isReady) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10 pointer-events-none"
      options={options}
    />
  );
};

export default ParticlesBackground;
