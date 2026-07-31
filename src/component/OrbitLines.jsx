const OrbitLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {/* Top */}
      <line
        x1="50%"
        y1="50%"
        x2="50%"
        y2="31%"
        stroke="#22d3ee"
        strokeWidth="2"
      />

      {/* Right */}
      <line
        x1="50%"
        y1="50%"
        x2="65%"
        y2="50%"
        stroke="#eab308"
        strokeWidth="2"
      />

      {/* Left */}
      <line
        x1="50%"
        y1="50%"
        x2="35%"
        y2="50%"
        stroke="#22c55e"
        strokeWidth="2"
      />

      {/* Bottom */}
      <line
        x1="50%"
        y1="50%"
        x2="50%"
        y2="69%"
        stroke="#ec4899"
        strokeWidth="2"
      />
    </svg>
  );
};

export default OrbitLines;