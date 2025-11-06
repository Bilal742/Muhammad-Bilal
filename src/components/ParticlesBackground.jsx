import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // 👈 Yeh line body ke background pe lagayegi
        background: { color: "#1F232D" },
        particles: {
          number: { value: 80 },
          color: { value: "#00EEFF" },
          links: {
            color: "#00EEFF",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1.2 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
