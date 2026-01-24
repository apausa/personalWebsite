import { useCallback, useEffect, useRef, useState } from "react";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";

import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(
          100 - ((cycleTime - animationDuration) / animationDuration) * 100,
        );
      }
    } else {
      // Continuously increase position for seamless looping
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress, yoyo]);

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === "horizontal") {
      return `${p}% 50%`;
    }
    if (direction === "vertical") {
      return `50% ${p}%`;
    }
    // For diagonal, move only horizontally to avoid interference patterns
    return `${p}% 50%`;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngles = {
    horizontal: "to right",
    vertical: "to bottom",
    diagonal: "to bottom right",
  };
  const gradientAngle = gradientAngles[direction] ?? "to bottom right";
  // Duplicate first color at the end for seamless looping
  const gradientColors = [...colors, colors[0]].join(", ");

  const backgroundSizes = {
    horizontal: "300% 100%",
    vertical: "100% 300%",
    diagonal: "300% 300%",
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: backgroundSizes[direction] ?? "300% 300%",
    backgroundRepeat: "repeat",
  };

  return (
    <motion.div
      className={`animated-gradient-text ${showBorder ? "with-border" : ""} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder ? (
        <motion.div
          className="gradient-overlay"
          style={{ ...gradientStyle, backgroundPosition }}
        />
      ) : null}
      <motion.div
        className="text-content"
        style={{ ...gradientStyle, backgroundPosition }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
