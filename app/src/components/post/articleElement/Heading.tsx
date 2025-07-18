type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight leading-tighter ${className}`}
    >
      {children}
    </h1>
  );
}
export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}
export function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={`pt-4 text-2xl font-bold tracking-tight leading-tight ${className}`}
    >
      {children}
    </h3>
  );
}
export function H4({ children, className }: HeadingProps) {
  return (
    <h4
      className={`text-xl font-bold tracking-tight leading-tight ${className}`}
    >
      {children}
    </h4>
  );
}
export function H5({ children, className }: HeadingProps) {
  return (
    <h5
      className={`text-lg font-bold tracking-tight leading-tight ${className}`}
    >
      {children}
    </h5>
  );
}
