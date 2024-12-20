---
title: "React(TS)のユニオン×リテラル型を用いて単一コンポーネントから複数のCSSを出し分ける"
excerpt: "ユニオン×リテラル型を利用してReactコンポーネントの再利用性を向上させましょう💪🏻"
coverImage: "/assets/blog/react-union-literal/react-css_cover.webp"
date: "2024-08-20T05:35:07.322Z"
category: "Tech"
tags: ["React", "TypeScript", "Programming"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/react-union-literal/react-css_cover.webp"
---

## まえがき

React や TypeScript での開発において、コンポーネントのスタイリングを効率的に管理することは重要です。特に、テーマカラーやバリエーションを持つコンポーネントの場合、スタイルの一貫性を保ちながら柔軟にカスタマイズできる仕組みが求められます。今回の記事では、TypeScript のユニオン × リテラル型を活用して、単一コンポーネントから CSS のクラスを Props で出し分ける実装について解説します。(tailwind を使用)

ユニオン × リテラル型の関連記事 ↓
[ユニオン × リテラル型の活用方法について](/union-literal)

## コードの概要

以下のコードは僕が個人開発で作成しているブログサイトの実際のコードです。

```typescript
export type ThemeColorVariant = "red" | "blue" | "green" | "orange";
type Props = {
  posts: Post[];
  className?: string;
  sectionTitleJa: string;
  sectionTitleEn: string;
  maxPostsToShow?: number;
  themeColorVariant: ThemeColorVariant;
  viewMoreTo?: string;
};

export function HomeSection({
  themeColorVariant,
  posts,
  className,
  sectionTitleJa,
  sectionTitleEn,
  maxPostsToShow = 3,
  viewMoreTo,
}: Props) {
  const textVariants: { [key in ThemeColorVariant]: string } = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
    orange: "text-orange-400",
  };

  return (
    <section className={`pt-16 mx-auto px-36 ${className}`}>
      <h2 className="text-center text-xl md:text-4xl tracking-tight leading-tight">
        {sectionTitleJa}
      </h2>
      <div className={`text-center mb-8 ${textVariants[themeColorVariant]}`}>
        {sectionTitleEn}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-20 md:gap-y-32">
        {posts.slice(0, maxPostsToShow).map((post) => (
          <PostPreview
            themeColorVariant={themeColorVariant}
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      {viewMoreTo ? (
        <ViewMoreButton to={viewMoreTo} className="py-16" />
      ) : (
        <div className="mt-16" />
      )}
    </section>
  );
}
```

このコードでは、`ThemeColorVariant`というユニオン型を定義しています。`ThemeColorVariant`は、`"red"`, `"blue"`, `"green"`, `"orange"`という 4 つの文字列リテラルのいずれかの値を取ることができます。この型を使って、コンポーネントが受け取るテーマカラーを制限し、許容される色のバリエーションを明確にしています。

次に、コンポーネント内でのテーマカラーに応じた CSS クラスの切り替えを行う部分を見てみましょう。

オブジェクト`textVariants`は、`ThemeColorVariant`型をキーとして、各テーマカラーに対応する CSS クラスを値として持つマッピングを定義しています。このマッピングを利用することで、コンポーネント内で動的に CSS クラスを切り替えることができます。

以下の部分で、`themeColorVariant`に応じて適切な CSS クラスを適用します。

```typescript
<div className={`text-center mb-8 ${textVariants[themeColorVariant]}`}>
  {sectionTitleEn}
</div>
```

ここでは、`themeColorVariant`の値に応じて、`textVariants`オブジェクトから対応する CSS クラスを取得し、それを`className`として適用しています。これにより、コンポーネントは受け取ったテーマカラーに応じて異なるスタイルを持つことができます。

## 使い方の例

この実装の具体的な使い方を見てみましょう。例えば、`HomeSection`コンポーネントを使用して、異なるテーマカラーを持つセクションを表示することができます。

```typescript
<HomeSection
  themeColorVariant="blue"
  posts={posts}
  sectionTitleJa="最新の記事"
  sectionTitleEn="Latest Articles"
  viewMoreTo="/blog"
/>
```

このように、`themeColorVariant`プロパティに`"blue"`を渡すことで、セクションのタイトルが青色で表示されます。同様に、`"red"`, `"green"`, `"orange"`を渡せば、それぞれの色に応じたスタイルが適用されます。

## この実装のメリット

### 1. 柔軟性の向上

この実装により、コンポーネントの柔軟性が大幅に向上します。例えば、`HomeSection`コンポーネントを複数の場所で使用する場合、テーマカラーに応じたスタイルの調整が容易になります。もし CSS クラスを直書きしていた場合、変更箇所が増え、タイポやスタイルの不一致が発生するリスクが高まります。しかし、`ThemeColorVariant`のようなユニオン型とオブジェクトマッピングを使うことで、スタイルを一括で管理・変更でき、タイポが発生した際も型チェックによってエラーとして検出できるため、コードの保守性が高まります。

### 2. 一貫したデザインの保持

`PostPreview`のような子コンポーネントにテーマカラーのバリエーションをバケツリレーのように渡すことができる点も大きなメリットです。これにより、`HomeSection`とその内部で使用される`PostPreview`のテーマが常に一致することが保証され、セクション全体で一貫したデザインを保持することができます。
これらのメリットにより、今回の実装は、スタイル管理の効率を高め、コードの安全性と保守性を強化する優れた手法となっています。

## 終わりに

今回の記事では、React と TypeScript を使って、テーマカラーを動的に切り替える実装について解説しました。ユニオン × リテラル型とオブジェクトマッピングを活用することで、コードの可読性と保守性を高めつつ、柔軟にスタイリングを管理することができます。複数のテーマカラーを持つコンポーネントを効率的に管理したい場合、今回紹介した手法は非常に有用です。次回も TypeScript や React に関連するテクニックを紹介していきたいと思います。お読みいただきありがとうございました 🥳
