import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // ひとまず素通し。後で独自 <CodeBlock> などをここで差し替えられる
  return { ...components };
}
