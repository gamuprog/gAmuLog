import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";

import { FooterItems } from "@/components/footer/FooterItems";
import { externalURL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-4 pb-6 md:py-16">
      <div className="pb-2 md:pb-8 flex flex-col items-center">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
          gAmuLog.
        </h3>
        <div className="mr-2 text-sm">がむログ</div>
      </div>

      <div className="flex justify-center">
        <FooterItems />
      </div>
      <div className="mx-20 mt-8 md:mx-[36rem] flex justify-between">
        <Link href={externalURL.zenn} target="_blank" rel="noopener noreferrer">
          <SiZenn className="text-4xl md:text-6xl" />
        </Link>
        <Link
          href={externalURL.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-4xl md:text-6xl" />
        </Link>
        <Link
          href={externalURL.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl md:text-6xl" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
