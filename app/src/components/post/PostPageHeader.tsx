import Link from "next/link";

import { HomeHeaderItems } from "@/components/home/HomeHeaderItems";

export function PostPageHeader() {
  return (
    <div className="pb-2 fixed top-0 z-50 w-full bg-white border-b border-gray-200 md:pb-0">
      <section className="mx-4 flex-row flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center">
          <div className="text-2xl md:text-4xl font-bold tracking-tight leading-tighter">
            gAmuLog.
          </div>
          <div className="mr-2 text-sm">がむログ</div>
        </Link>
        <HomeHeaderItems />
      </section>
    </div>
  );
}
