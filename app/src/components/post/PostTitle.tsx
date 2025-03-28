import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="!text-xl md:!text-3xl md:font-semibold tracking-tight leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
