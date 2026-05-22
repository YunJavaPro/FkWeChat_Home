export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" className={className}>
      <defs>
        <clipPath id="full-rect">
          <rect width="192" height="192" rx="44" ry="44" />
        </clipPath>
        <linearGradient id="cool-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="smooth-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
        </filter>
        <linearGradient id="text-light" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFFC6" />
          <stop offset="100%" stopColor="#E0F2FEC7" />
        </linearGradient>
      </defs>
      <rect width="192" height="192" fill="url(#cool-grad)" clipPath="url(#full-rect)" />
      <g filter="url(#smooth-shadow)" transform="translate(27, 72)">
        <g stroke="url(#text-light)" strokeWidth="17.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M0,0 H40 M0,24 H18 M0,0 V48" />
          <path d="M44,20 V48 M44,24 L68,0 M44,24 L68,48" />
          <path d="M84,10 L96,48 L110,20 L124,48 L138,0" />
        </g>
        <rect x="-7" y="66" width="84" height="10" rx="7" fill="url(#text-light)" />
      </g>
    </svg>
  );
}
