import Link from "next/link";

export type LinkTextProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export function LinkText({ children, to, className }: LinkTextProps) {
  return (
    <Link
      className={`text-blue-500 hover:cursor-pointer hover:underline ${className}`}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
