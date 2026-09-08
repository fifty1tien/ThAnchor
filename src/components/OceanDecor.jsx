import { motion, useScroll, useTransform } from "framer-motion";

const fish = ["𓆝", "𓆟", "𓆞", "𓆝", "𓆟", "𓆞"];

export default function OceanDecor({ variant = "hero" }) {
  const { scrollY } = useScroll();
  const schoolY = useTransform(
    scrollY,
    [0, 900],
    [0, variant === "hero" ? 150 : -55],
  );
  const jellyY = useTransform(scrollY, [0, 900], [0, -90]);

  return (
    <div className={`ocean-decor ocean-decor-${variant}`} aria-hidden="true">
      <motion.div className="fish-school" style={{ y: schoolY }}>
        {fish.map((shape, index) => (
          <span
            key={`${shape}-${index}`}
            style={{
              "--fish-index": index,
              "--fish-row": index % 3,
              "--fish-size": `${18 + (index % 3) * 8}px`,
            }}
          >
            {shape}
          </span>
        ))}
      </motion.div>
      <motion.div className="jellyfish jellyfish-one" style={{ y: jellyY }}>
        <span className="jelly-cap" />
        <i />
        <i />
        <i />
      </motion.div>
      <div className="jellyfish jellyfish-two">
        <span className="jelly-cap" />
        <i />
        <i />
        <i />
      </div>
      <div className="kelp kelp-one">
        <i />
        <i />
        <i />
      </div>
      <div className="kelp kelp-two">
        <i />
        <i />
        <i />
      </div>
      <div className="wave-line wave-line-one" />
      <div className="wave-line wave-line-two" />
    </div>
  );
}
