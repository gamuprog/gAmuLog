import { MDXRemote } from "next-mdx-remote/rsc";

import { SampleButton } from "@/components/button/SampleButton";

export async function PostBodyCC({ mdxSource }: { mdxSource: string }) {
  return await MDXRemote({
    source: mdxSource,
    components: { SampleButton },
  });
}
