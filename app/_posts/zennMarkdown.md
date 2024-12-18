---
title: "Next.js App RouterにおけるZenn記法Markdown→HTML変換処理"
excerpt: "Next.js App Routerで作られたブログサイトに、MarkdownからZenn風のCSSを自動的につけられるようにした🌼"
coverImage: "/assets/blog/zennMarkdown/zenn_markdown.jpg"
date: "2024-12-11T05:35:07.322Z"
category: "DevDiary"
tags: ["Next"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/zennMarkdown/zenn_markdown.jpg"
---

## まえがき

この技術ブログは、Next.js の Blog Starter Kit を用いて開発されている。記事内容ページを作成するにあたって、Zenn 記法の markdown を HTML に変換し、Zenn 風の CSS をつけることができるらしいので、その設定を行った。

https://vercel.com/templates/next.js/blog-starter-kit

## 困ったこと(~~読まなくても良い~~)

様々な方の記事を読みつつ、Zenn 記法 markdown→HTML 変換処理を調べていたのだが、自分が見た中だと記事がすべて**Pages Router**での実装方法になっていて、なかなか上手くできない。**App Router**と**Pages Router**ではディレクトリ構造も違うし、サーバーコンポーネントとクライアントコンポーネントも意識しながら実装しないといけない。いろいろ記事や公式ドキュメントを見たが、`useEffect`を使う実装が基本らしく、SSG のブログ本文に`useEffect`で変換処理を行うのは SEO 的に大丈夫なのかとか、そもそも**App Router**でのプロジェクトではどの部分にその実装を行えばいいのかとか、とにかく頭に「?」をいっぱい出しながら試行錯誤した。以下参考にした記事(や issue や公式ドキュメント)である。

https://zenn.dev/team_zenn/articles/intro-zenn-markdown
https://kenpos.dev/next.js%E3%81%A7%E3%83%96%E3%83%AD%E3%82%B0%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%AA%E3%81%8A%E3%81%99%E3%81%BE%E3%81%9A%E3%81%AFzenn%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%92%E9%81%A9%E7%94%A8%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/#zenn%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AAmarkdown%E8%A8%98%E6%B3%95%E3%82%92%E6%89%B1%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B
https://github.com/zenn-dev/zenn-editor/issues/293
https://www.npmjs.com/package/zenn-markdown-html?activeTab=readme

どのコード例も**Pages Router**で説明されていて、そもそも**App Router**以降の Next.js しか使ったことがない自分としてはこれらの実装を**App Router**でどのように対応させればいいのかが難しかった...

## 実装

なんとか実装できた...(KaTeX 除く)

### パッケージ

```json:package.json
  "dependencies": {
    "zenn-content-css": "^0.1.131",
    "zenn-markdown-html": "^0.1.131",
    "zenn-embed-elements": "^0.1.131"
  },
```

### /[slug]/page.tsx

```tsx:/[slug]/page.tsx
...
const content = markdownToHtml(post.content || "", {
    embedOrigin: "https://embed.zenn.studio",
  }); // zenn記法マークダウンをHTMLに変換する処理

  return (
    <main>
      <PostPageHeader />
      <article className="my-32 px-16 znc"> // znc 付与でCSSを反映させる
        <Script
          src="https://embed.zenn.studio/js/listen-embed-event.js"
          strategy="afterInteractive"
        /> // インタラクティブになった後に実行される、埋め込みコンテンツ(リンクカードなど)用の処理

        <PostTitle>{post.title}</PostTitle>
        <div className="flex mx-16 justify-between">
          <PostBody
            title={post.title}
            date={post.date}
            tags={post.tags}
            coverImage={post.coverImage}
            content={content}
          />
          <Sidebar
            relatedPosts={relatedPosts}
            recommendedPosts={recommendedPosts}
          />
        </div>
      </article>
    </main>
  );
}
```

実装が終わってみたらめちゃめちゃ単純だった。ただ、数式変換処理は実装していないので、KaTeX のみ利用することができない。~~ここにレポート提出でもしない限り使わないかなぁ~~

参考
https://github.com/zenn-dev/zenn-editor#%E3%81%94%E8%87%AA%E8%BA%AB%E3%81%AEweb%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E4%BD%BF%E3%81%86%E5%A0%B4%E5%90%88
