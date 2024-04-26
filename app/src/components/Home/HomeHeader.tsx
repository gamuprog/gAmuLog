import { HomeHeaderItems } from "@/components/home/HomeHeaderItems";
import Link from "next/link";

export function HomeHeader() {
  return (
    <div className="absolute w-full text-white">
      <section className="mx-4 flex-col md:flex-row flex items-center md:justify-between">
        <Link href="/" className="flex flex-col items-center">
          <div className="text-xl md:text-4xl font-bold tracking-tight leading-tight">
            gAmuLog.
          </div>
          <div className="mr-2 text-sm">がむログ</div>
        </Link>
        <HomeHeaderItems />
      </section>
    </div>
  );
}
