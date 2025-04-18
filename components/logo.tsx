// components/Logo.tsx
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg className="h-9 w-9" height="36" viewBox="0 0 34 32">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
      <span className="hidden font-bold sm:inline-block">VICKO SOLUÇÕES</span>
    </Link>
  );
};

export default Logo;
