import Link from "next/link";

import { HomeHeaderItems } from "@/components/home/HomeHeaderItems";

type Props = {
  className?: string;
};

export function HomeHeader({ className }: Props) {
  return (
    <div className={`${className} absolute w-full text-white`}>
      <section className="mx-4 flex-row flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
            gAmuLog.
          </div>
          <div className="mr-2 text-sm">がむログ</div>
        </Link>
        <HomeHeaderItems />
      </section>
    </div>
  );
}
