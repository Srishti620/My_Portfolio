// Subtle, fixed "desk of a software engineer" motif that lives behind every
// section of the site. Pure line-art, drawn from scratch (no external image),
// so it can sit at very low opacity under any section background and still
// read as "code + coffee + notebook" rather than noise.

function Icon({ children, className, ...rest }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="#D66A96"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

const Laptop = (props) => (
  <Icon {...props}>
    <rect x="10" y="14" width="44" height="28" rx="3" />
    <path d="M16 20h32M16 26h20" />
    <path d="M4 46h56l-5 6H9l-5-6Z" />
  </Icon>
);

const CodeTags = (props) => (
  <Icon {...props}>
    <path d="M22 16 8 32l14 16" />
    <path d="M42 16l14 16-14 16" />
    <path d="M35 12 29 52" />
  </Icon>
);

const CoffeeCup = (props) => (
  <Icon {...props}>
    <path d="M12 24h30v16a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10V24Z" />
    <path d="M42 28h4a6 6 0 0 1 0 12h-4" />
    <path d="M20 16c0-3 3-3 3-6M28 16c0-3 3-3 3-6M36 16c0-3 3-3 3-6" />
  </Icon>
);

const Notebook = (props) => (
  <Icon {...props}>
    <rect x="14" y="8" width="36" height="48" rx="3" />
    <path d="M14 16h36M22 24h20M22 32h20M22 40h14" />
    <circle cx="18" cy="16" r="0" />
  </Icon>
);

const Glasses = (props) => (
  <Icon {...props}>
    <circle cx="18" cy="32" r="10" />
    <circle cx="46" cy="32" r="10" />
    <path d="M28 30h8M8 30l4-8M56 30l-4-8" />
  </Icon>
);

const Sparkle = (props) => (
  <Icon {...props}>
    <path d="M32 8v14M32 42v14M8 32h14M42 32h14M15 15l9 9M40 40l9 9M49 15l-9 9M24 40l-9 9" />
  </Icon>
);

const spots = [
  { Cmp: Laptop, top: "6%", left: "4%", size: 150, rotate: -8, opacity: 0.16 },
  { Cmp: CodeTags, top: "18%", right: "6%", size: 105, rotate: 6, opacity: 0.18 },
  { Cmp: CoffeeCup, top: "40%", left: "2%", size: 105, rotate: -4, opacity: 0.18 },
  { Cmp: Notebook, top: "58%", right: "4%", size: 125, rotate: 5, opacity: 0.16 },
  { Cmp: Glasses, top: "78%", left: "6%", size: 115, rotate: -3, opacity: 0.16 },
  { Cmp: CodeTags, top: "92%", right: "10%", size: 95, rotate: -10, opacity: 0.17 },
  { Cmp: Sparkle, top: "30%", left: "48%", size: 50, rotate: 0, opacity: 0.2 },
  { Cmp: Sparkle, top: "70%", left: "58%", size: 38, rotate: 0, opacity: 0.19 },
  { Cmp: Laptop, top: "88%", left: "40%", size: 115, rotate: 7, opacity: 0.14 },
  { Cmp: CoffeeCup, top: "10%", left: "55%", size: 85, rotate: 10, opacity: 0.14 },
];

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {spots.map(({ Cmp, size, rotate, opacity, ...pos }, i) => (
        <Cmp
          key={i}
          className="absolute"
          style={{
            ...pos,
            width: size,
            height: size,
            transform: `rotate(${rotate}deg)`,
            opacity,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundDecor;
