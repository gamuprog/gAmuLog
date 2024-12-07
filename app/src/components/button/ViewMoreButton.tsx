import Link from "next/link";

type Props = {
  className?: string;
  buttonText?: string;
  to: string;
};

export function ViewMoreButton({
  to,
  className,
  buttonText = "もっと見る",
}: Props) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        href={to}
        className="view-more-button border-2 rounded-md py-4 w-[20rem] border-black"
      >
        <span>{buttonText}</span>
      </Link>
    </div>
  );
}
