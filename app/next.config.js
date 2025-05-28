/** @type {import('next').NextConfig} */
const nextConfig = {
  // *.md / *.mdx もページ拡張子として解釈させる
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // そのほか既存で入れたい設定があればここに追記
  transpilePackages: ["next-mdx-remote"],
};

import createMDX from "@next/mdx";

// MDX 用ローダーを Next.js 設定にマージして export
export default createMDX({
  extension: /\.mdx?$/, // mdx だけで十分なら /\.mdx$/ でも可
})(nextConfig);
