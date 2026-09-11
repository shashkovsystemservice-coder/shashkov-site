export default function ConstraintLine() {
  return (
    <div className="ad26-constraint" aria-hidden="true">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path className="ad26-constraint-path" d="M70 180 C250 150 340 280 470 300 C610 322 735 230 930 270" />
        <circle className="ad26-constraint-node ad26-constraint-node-a" cx="470" cy="300" r="5" />
        <circle className="ad26-constraint-node ad26-constraint-node-b" cx="930" cy="270" r="3" />
      </svg>
    </div>
  );
}
