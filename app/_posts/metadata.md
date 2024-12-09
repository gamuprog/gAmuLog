---
title: "Next.js App Routerでのmetadata設定とSEO対策"
excerpt: "App Routerでの動的・静的なmetadata設定を行ったのでコード例とともに解説します。"
coverImage: "/assets/blog/metadata/metadata_cover.jpg"
date: "2024-12-08T05:35:07.322Z"
category: "DevDiary"
tags: ["TypeScript", "Next"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/metadata/metadata_cover.jpg"
---

## SEO 対策の話

ブログを作成するにあたって、たくさんの人に記事を読んでもらうために**SEO 対策**は必須である。

今回はその中でも、`<meta>`タグの設定で行ったことを紹介する。toC のプロダクト開発は初めてということもあり、`<meta>`タグについても詳しいことは全然知らなかったので、いろいろ調べつつ設定した。

:::message
SEO（Search Engine Optimization）: 検索エンジン最適化のことで、ウェブサイトやウェブページが、Google などの検索エンジンで上位に表示されるように工夫する施策全般を意味する。これにより、検索エンジンを通じてサイトへの訪問者数を増やすことを目的としている。
:::

### `<metadata>`にも有用なもの、あまり意味のないもの、があるらしい

調べてみたら、有用な`<meta>`と、今設定してもあまり意味のない`<meta>`があるらしい。

#### 特に重要な`<meta>`

**`<Title>` タイトルタグ**
タイトルの役割を担っていて、**検索結果のタイトル**に使われる(~~厳密には`<metadata>`ではない~~)。

**`description`**
ページの概要を 120 字程度で説明する。**検索結果にも表示される**ので、クリック率を上げるために必要。

**`OGP`**
SNS でシェアされた時の画像やタイトル、説明文を設定するためのタグ。適切に設定することでシェアされたリンクからの訪問者数増加に繋がる。

#### 現在ではあまり重要でない`<meta>`

**`keywords`**
Google の検索エンジンでは、`<meta>`タグの`keywords`を検索のランキングに使用しないことを公式が公言している。

> 端的にいえば、使用しません。Google は Google 検索アプライアンスを販売していますが、そのプロダクトには meta タグの一致機能が備えられており、keywords meta タグが含まれる場合があります。ただし、これは企業向けの検索アプライアンスであり、Google のメインのウェブ検索とはまったく異なるものです。Google のウェブ検索（Google.com からアクセスできる、日々数多くのユーザーが使用する検索）では、keywords meta タグは完全に無視されます。現時点で Google 検索のランキングに影響が及ぶことはありません。

引用: [Google はウェブ ランキングにキーワード メタタグを使用しません](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag?hl=ja)
`keywords`はスパムなどに悪用されることが多く、利用されないらしい。

**`lang`**
コンテンツ内の文字情報を元に言語を判断するので必要ないとのこと。

## Next.js App Router での`<meta>`設定

App Router 以前と App Router 以後ではルーティングのためのディレクトリ構成が異なり、`metadata`の設定方法も異なる。今回は App Router での`metadata`設定で行ったことを紹介する。

### トップページの`metadata` (静的生成)

```tsx
// app/layout.tsx
const title = "がむログ";
const description =
  "がむの技術ブログです。React,Next.jsなどプログラミングの技術記事や開発日記、趣味の話題などを書いています。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: "/assets/home/homeOG.jpg",
  },
};
```

基本的に`app`配下の`layout.tsx`か`page.tsx`に`metadata`を設定する。

```tsx
const metadata: Metadata;
```

を定義して、`title`,`description`,`openGraph`プロパティを設定した。
超有名豆知識として、プロパティ名と変数名が一致する場合は、省略して書くことができる。
省略しない場合は以下のようになる。

```tsx
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: "website",
    images: "/assets/home/homeOG.jpg",
  },
};
```

トップページでは静的に`metadata`を設定することができたが、**ブログ記事内容ページでは記事ごとに異なる`metadata`を設定したい**ので、動的に`metadata`を設定する(以下に続く)。

### 記事内容ページの`metadata` (動的生成)

```tsx
// app/post/[slug]/page.tsx

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [post.ogImage.url],
    },
    twitter: {
      title,
      description,
      images: [post.coverImage],
    },
  };
}
```

このディレクトリでは、`fetch`した特定の記事をルーティングし、その記事内容を描画する役割があるので、`metadata`もその**特定の記事に合わせた内容**にする必要がある。このような場合は、`metadata`も動的に生成する必要があるので、`generateMetadata`関数を用いる。引数の`{ params }: Params`は`app/post/[slug]`の`[slug]`をパラメータに持つので、これを利用する。

> For example, a blog could include the following route app/blog/[slug]/page.js where [slug] is the Dynamic Segment for blog posts.

参照: [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

```tsx
const post = getPostBySlug(params.slug);
```

で特定の`post`を取得し、それを元に`metadata`を設定した。

### Next.js が自動で生成する`<meta>`

Next.js ではすべてのページに自動的に
`<meta charset="utf-8">`
`<meta name="viewport" content="width=device-width, initial-scale=1">`
が生成される。`charset`は文字のエンコードを指定し、`viewport`はモバイル端末での表示について指示するためのタグであり、レスポンシブデザインに必須の要素となっている。

これら二つの`<meta>`は自動で生成されるので、基本的にはコード上で明示的に指定する必要はない。

### 作成した`<meta>`を確認してみる

実際にサイト上で`<meta>`が正しく生成されているかどうかは、検証モードを使って`<head>`タグ内を見ることで確認することができるので確認してみた。

#### トップページ(静的生成)

![](https://storage.googleapis.com/zenn-user-upload/2c4ae4ebff53-20241209.png)

`<title>`タグや、`<meta description>`、`<meta og>`が正しく設定されていることが確認できた。また、`<meta charset="utf-8">`,`<meta name="viewport" content="width=device-width, initial-scale=1">`も自動的に生成されている。

#### 記事内容ページ(動的生成)

![](https://storage.googleapis.com/zenn-user-upload/9cdc10cd7f3c-20241209.png)

`<title>`タグや、`<meta description>`、`<meta og>`が特定の記事の内容と一致しており、動的に設定されていることが確認できた。`<meta charset="utf-8">`,`<meta name="viewport" content="width=device-width, initial-scale=1">`も自動的に生成されている。

## おわりに

以上`<meta>`の設定でした。基本的に難しい内容もなく、すぐに実装することができるので、もし`<meta>`を設定していない方がいればぜひ設定してみることをお勧めします。では 👋🏻
