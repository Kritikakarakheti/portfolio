import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      particles: {
        number: {
          value: 100,
        },
        size: {
          value: 2,
        },
        move: {
          enable: true,
          speed: 1,
        },
        opacity: {
          value: 0.5,
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.6,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <div>
      <Particles init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesComponent;
