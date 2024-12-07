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
      className={`border-2 rounded-md py-2 px-4 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
