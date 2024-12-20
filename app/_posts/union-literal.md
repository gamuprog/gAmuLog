---
title: "【TS中級】#2 stringのユニオン×リテラル型で型安全な開発を【実務で頻出】"
excerpt: "型安全なコードを書くためにユニオン×リテラルは必須です🫣"
coverImage: "/assets/blog/union-literal/union-literal_cover.webp"
date: "2024-08-17T05:35:07.322Z"
category: "Tech"
tags: ["JavaScript", "TypeScript", "Programming"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/union-literal/union-literal_cover.webp"
---

## まえがき

今回は TypeScript における string 型のユニオン型とリテラル型について解説します。実務で TypeScript を使っている方や、これから学ぼうとしている方のために、ユニオン型とリテラル型の基本を理解し、どのように効果的に使用できるかを掘り下げていきます。

## 今回のテーマ

今回のテーマは、TypeScript における`string`型の**ユニオン型**と**リテラル型**の組み合わせについてです。これにより、コードの安全性を高め、型の誤用を防ぐ方法を学びます。

## ユニオン型とは

ユニオン型とは、複数の型のいずれかを受け取ることができる型です。

```typescript
type Status = string | number;
```

上記の例では、`Status`型の変数は、文字列または数値のいずれかを持つことができます。このように、ユニオン型は複数の型を組み合わせた型定義できます。

## リテラル型とは

リテラル型は、具体的な値そのものを型として定義するものです。

```typescript
type One = 1;

const x: One = 1;
const y: One = 2; // Error: Type '2' is not assignable to type '1'.
```

この例では、`One`という型を割り当てられた変数は、数値の 1 のみを持つことができるので、最後の行はエラーになります。

## ユニオン型とリテラル型の組み合わせ

これらを実際の例で見てみましょう。例えば、ブログのカテゴリを定義する際に、それぞれのカテゴリに対応する英語と日本語の表示名を持つオブジェクトを定義したい場合です(実際の僕の個人開発のコードです)。

```typescript
export type Category = "Tech" | "DevDiary" | "LifeStyle";

export const category: { [key in Category]: { en: string; ja: string } } = {
  Tech: { en: "Tech Articles", ja: "技術記事" },
  DevDiary: { en: "Dev Diary", ja: "開発日記" },
  LifeStyle: { en: "Lifestyle & Hobby", ja: "雑談" },
};
```

### コードの解説

1. **`Category`の定義**:  
   `Category`型は、`"Tech"`, `"DevDiary"`, `"LifeStyle"`の 3 つの文字列リテラルのユニオン型です。この型を使用することで、これらの 3 つの値以外が`Category`として扱われることを防ぎます。

2. **`category`オブジェクトの定義**:  
   `category`オブジェクトは、キーとして`Category`型を使用し、その値として英語(`en`)と日本語(`ja`)の表示名を持つオブジェクトを持っています。ここで、`key in Category`という記法を用いることで、`category`オブジェクトのキーが`Category`型であることを保証しています。**タイポや勘違いで`Category`型でないものをオブジェクトに追加しようとするとエラーが出てくれることが重要**です。

### より踏み込んだ話

上記のコードにおいて、`Category`型に新しい文字列`"other"`が追加されたら、どこかでエラーが出るでしょうか？
実は、`category`オブジェクトに **`"other"`をキーにもつプロパティがない**という旨のエラーが出ます。`category`オブジェクトの型定義から、オブジェクトのキーは`Category`型のキーを**過不足なく**持つことを期待しているので、`Category`型を増やした際に、自動でエラーを吐いてくれます。

ただ、エラーが出るのではなく、常に`category`のキーと`Category`型が一致するようにコーディングできれば一番良いと思う方もいるかもしれません。

これは、**`category`を手打ちで定義し、そのキーをすべて取得し、それらをユニオン × リテラル型でもつ`Category`型を自動で定義する**という実装です。

以下がその実装になります。

```ts
export const category = {
  Tech: { en: "Tech Articles", ja: "技術記事" },
  DevDiary: { en: "Dev Diary", ja: "開発日記" },
  LifeStyle: { en: "Lifestyle & Hobby", ja: "雑談" },
};

type Category = keyof typeof category;
```

`category`の型を`type of`で取得し、その中のキーを`key of`で取得することで、今までと同様の`Category`型を定義するのと同時に、型の追加や削除が`category`の変更に依存するようになり変更しやすくなりました。

ちなみに僕の感覚だと定義の向きが逆に感じてしまう(大体のコーダーは　型定義 → オブジェクト定義 という感覚を持っている...はず)のでこの実装は行なっていません(大規模開発でヒューマンエラーが出る可能性が高いなどの理由があるならばこの書き方をするべき)。
さらに言うと、`category`の value の方の型がうまく定義できない(やり方わかる方いればご教授お願いします 🙇)ので今回は使いません。

(`category: Record<string, { en: string; ja: string }>;`のように定義すると、`Category`型が`string`になってしまう)

## 終わりに

今回は、TypeScript における string 型のユニオン型とリテラル型について解説しました。これらを活用することで、コードの信頼性を高め、型安全な開発を行うことができます。特に、ユニオン型とリテラル型の組み合わせは、特定の値のセットを扱う際に非常に役立ち、実務でもよく見かけるので覚えておいて損は無いと思います。
お読みいただきありがとうございました 🥳
