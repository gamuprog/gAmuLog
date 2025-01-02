import React from "react";

type Props = {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

export function Button({
  className,
  onClick,
  disabled = false,
  children,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-2 rounded-full border md:rounded-md md:py-2 md:px-4 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
