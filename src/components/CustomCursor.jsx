import { useEffect, useRef, useState } from "react";
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState([]);
  const [trail, setTrail] = useState([]);
  const lastTrailAt = useRef(0);
  const trailId = useRef(0);
  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const now = performance.now();
      if (now - lastTrailAt.current < 80) return;
      lastTrailAt.current = now;
      const id = trailId.current++;
      const bubble = {
        id,
        x: event.clientX + (id % 3) * 3 - 3,
        y: event.clientY + (id % 2) * 4 - 2,
        size: 4 + (id % 3) * 2,
      };
      setTrail((current) => [...current.slice(-7), bubble]);
      window.setTimeout(
        () => setTrail((current) => current.filter((item) => item.id !== id)),
        850,
      );
    };
    const click = (event) => {
      const id = Date.now();
      setRipples((current) => [
        ...current.slice(-3),
        { id, x: event.clientX, y: event.clientY },
      ]);
      window.setTimeout(
        () =>
          setRipples((current) => current.filter((ripple) => ripple.id !== id)),
        900,
      );
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("click", click);
    };
  }, []);
  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {trail.map((bubble) => (
        <span
          key={bubble.id}
          className="cursor-bubble"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
          }}
        />
      ))}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="cursor-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </>
  );
}
