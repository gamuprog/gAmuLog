import { PostPageHeader } from "@/components/post/PostPageHeader";

export default function TsxPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <PostPageHeader />
      {children}
    </main>
  );
}
