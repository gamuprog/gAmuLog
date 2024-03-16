import { FooterItems } from "@/components/FooterItems";
import Link from "next/link";
import { SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pb-32">
      <div className="py-8 flex flex-col items-center">
        <h3 className="text-4xl font-bold tracking-tight leading-tight">
          gAmuLog.
        </h3>
        <div className="mr-2 text-sm">がむログ</div>
      </div>
      <div className="flex justify-center">
        <FooterItems />
      </div>
      <Link
        href="https://zenn.dev/gamuprog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiZenn className="text-6xl" />
      </Link>
      <Link
        href="https://twitter.com/gamu_prog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="text-6xl" />
      </Link>
    </footer>
  );
}

export default Footer;
