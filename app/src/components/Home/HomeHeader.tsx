import { HomeHeaderItems } from "@/components/Home/HomeHeaderItems";

export function HomeHeader() {
  return (
    <div className="absolute w-full text-white">
      <section className="mx-4 flex-col md:flex-row flex items-center md:justify-between">
        <div className="flex flex-col items-center">
          <div className="text-xl md:text-4xl font-bold tracking-tight leading-tight">
            GamuLog.
          </div>
          <div className="mr-2 text-sm">がむログ</div>
        </div>
        <HomeHeaderItems />
      </section>
    </div>
  );
}
