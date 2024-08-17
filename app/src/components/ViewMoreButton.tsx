import Link from "next/link";

type Props = {
  className?: string;
  to: string;
};

export const ViewMoreButton = ({ to, className }: Props) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        href={to}
        className="view-more-button border-2 rounded-md py-4 px-24 border-black"
      >
        <span>もっと見る</span>
      </Link>
    </div>
  );
};
