import Link from "next/link";

import { HomeHeaderItems } from "@/components/home/HomeHeaderItems";

export function PostPageHeader() {
  return (
    <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <section className="mx-4 flex-col md:flex-row flex items-center md:justify-between">
        <Link href="/" className="flex flex-col items-center">
          <div className="text-xl md:text-4xl font-bold tracking-tight leading-tighter">
            gAmuLog.
          </div>
          <div className="mr-2 text-sm">がむログ</div>
        </Link>
        <HomeHeaderItems />
      </section>
    </div>
  );
}
