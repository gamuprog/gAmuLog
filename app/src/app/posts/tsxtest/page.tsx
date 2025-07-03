// // 適当なページを作成
// import React from "react";

// import { Sidebar } from "@/components/Sidebar";
// import { ShareButtons } from "@/components/button/ShareButtons";
// import { PostBodyForMd } from "@/components/post/PostBodyForMd";
// import { PostPageHeader } from "@/components/post/PostPageHeader";
// import { PostTitle } from "@/components/post/PostTitle";
// export default function Page() {
//     post =
//   return (
//     <main>
//       <PostPageHeader />

//       <article className="my-20 md:my-32 md:px-16">
//         {/* 埋め込みスクリプト */}

//         <PostTitle>{post.title}</PostTitle>

//         <div className="mx-4 flex justify-between md:mr-16 md:ml-0">
//           {/* 共有ボタン */}
//           <div className="sticky top-20 h-fit self-start hidden md:block">
//             <ShareButtons post={post} directionVariant="vertical" />
//           </div>

//           <PostBodyForMd post={post} content={formattedPostContent} />
//           <Sidebar
//             className="hidden md:block"
//             relatedPosts={relatedPosts}
//             recommendedPosts={recommendedPosts}
//           />
//         </div>
//       </article>
//     </main>
//   );
// }
