import { FooterItems } from "@/components/FooterItems";
import Link from "next/link";
import { SiZenn } from "react-icons/si";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="pb-8 flex flex-col items-center">
        <h3 className="text-4xl font-bold tracking-tight leading-tight">
          gAmuLog.
        </h3>
        <div className="mr-2 text-sm">がむログ</div>
      </div>
      <div className="flex justify-center">
        <FooterItems />
      </div>
      <div className="mt-8 mx-[36rem] flex justify-between">
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
        <Link
          href="https://github.com/gamuprog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-6xl" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
