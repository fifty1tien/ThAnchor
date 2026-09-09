export default function WaveDivider({ className = "" }) {
  return (
    <div className={`wave-divider ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
        <path
          className="wave-divider-line wave-divider-back"
          d="M0 44 C180 90 300 5 480 43 S780 94 960 42 S1260 5 1440 43"
        />
        <path
          className="wave-divider-line wave-divider-front"
          d="M0 61 C170 18 330 103 520 60 S850 17 1020 61 S1270 103 1440 58"
        />
      </svg>
    </div>
  );
}
