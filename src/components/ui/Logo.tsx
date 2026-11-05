type LogoProps = {
  label: string;
  className?: string;
};

const Logo = ({ label, className = "" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      className={className}
    >
      <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M24 7L41 15.5L24 24L7 15.5Z"
          className="fill-primary stroke-primary dark:fill-primary-light dark:stroke-primary-light"
        />
        <path
          d="M7 24.5L24 33L41 24.5"
          fill="none"
          className="stroke-primary/70 dark:stroke-primary-light/70"
        />
        <path
          d="M7 33.5L24 42L41 33.5"
          fill="none"
          className="stroke-primary/40 dark:stroke-primary-light/40"
        />
      </g>
    </svg>
  );
};

export default Logo;
