import Link from "next/link";

type Props = {
  className?: string;
  to: string;
};

export const ViewMoreButton = ({ to, className }: Props) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link href={to} className="border-2 rounded-md py-4 px-24 border-black">
        もっと見る
      </Link>
    </div>
  );
};
