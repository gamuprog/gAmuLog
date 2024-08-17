---
title: "【JS初級】#1 mapメソッドとforEachメソッドの違い・使い分け【3分解説】"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla"
coverImage: "/assets/blog/compareMapAndForEach/cover.webp"
date: "2019-03-17T05:35:07.322Z"
category: "Tech"
tags: ["Tech", "Life"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/compareMapAndForEach/cover.webp"
---

## まえがき

今回から始まりました、JavaScript(TypeScript)解説シリーズ。実務で JavaScript(TypeScript)を使っている人も、勉強中の人も、「あれ？言われてみればどうだったっけ？」となるような疑問を解決していこうというコーナーです。今後はもっと踏み込んだ内容も執筆していきたいと思っています。

## 今回のテーマ

第一回のテーマは`map`メソッドと`forEach`メソッドです。どちらもよく使われることのあるメソッドですが、違いを正しく理解せずに使っている方も中にはいるのではないでしょうか。今回はこの二つのメソッドの違いについて解説します。

## 例題

```js
const arrayA = [0, 1, 2, 3];

arrayA.forEach((elm) => {
  return (elm += 1);
});

console.log(arrayA);
```

Q.このコードを実行した際のコンソールの表示はどのようなものになりますか？

A.

```js
[0, 1, 2, 3];
```

<div class="message">
非破壊的メソッドの`forEach`は、元の配列に変更を加えません。
</div>

## 結論

- `map`メソッド → 配列の各要素に対し操作を行い、その結果を要素に持つ**新しい配列を返す**メソッド。非破壊的。
- `forEach`メソッド → 配列の各要素に対し操作を行うメソッド。非破壊的。

`map`メソッドは既存の配列の要素から、新しい配列を作成するという目的がある場合に用いられます。
逆にいえば、ただただ配列の要素に対して何かを実行したいだけであれば`forEach`メソッドを使うのが良いということになります。

**基本的に、配列を返したいかどうかで使い分けると覚えれば OK**です。

どちらのメソッドも非破壊的メソッドなので、**元の配列が書き換えられることはありません**。先ほどの問題で出力結果が`[1, 2, 3, 4]`になると思ってしまった方もいたのではないでしょうか。
(じゃあさっきの例題の `return elm += 1;` はなんだったのかというと、何でもないです。この返り値はどこにも保存されず、即破棄されます。)

<div class="message">
破壊的なメソッド: そのメソッドを使った際に、元の配列(オブジェクト)に変更が加わるもの。 ex)push,pop

非破壊的なメソッド: そのメソッドを使った際に、元の配列(オブジェクト)に変更が加わらないもの。

</div>

|        | map                          | forEach                          |
| ------ | ---------------------------- | -------------------------------- |
| 共通点 | 配列の各要素に操作を行いたい | 配列の各要素に操作を行いたい     |
| 相違点 | 結果から配列を作りたい       | 操作だけ行って何も返す必要がない |

## 例

### map

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

// [2, 4, 6, 8, 10]
```

各要素を２倍にしたものを要素に持つ、新しい配列を定義できました。`numbers`配列はそのままです。

### forEach

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});

// 2
// 4
// 6
// 8
// 10
```

配列の各要素に対し、２倍にした値をコンソールで出力しました。`numbers`配列はそのままです。

## 終わりに

今回は`map`メソッドと`forEach`メソッドについての違い・使い分けを解説しました。ですが、ぶっちゃけてしまうと**forEach メソッドは使わないことが多い**です。理由としては

- `forEach`でやりたい大体のことは他のメソッドでより簡潔に書くことができる
- 返り値がない関数の実行があまりない

などがあります。実務で使った例としては、React で開発してる際に`forEach`で配列内の要素を次々に`setState(elm)`した位しか記憶にないです。
逆に、フロントエンドのタスクを消化している日のほとんどで`map`メソッドは使います。

CS 専攻の人が考えつきがちな、不必要な`forEach`メソッドを使ったコードにこんなものがあります。

```js
let total = 0;
const numbers = [5, 10, 15];

numbers.forEach((number) => {
  total += number;
});

console.log(`Total sum: ${total}`);
```

配列の要素の数値の合計を求めるコードですが、僕も CS 専攻で C 言語をゴリゴリに書いていたので、JavaScript 始めたての時はこのようなコードを書こうとしてしまっていたかもしれません。
このコードは以下のように書き換えることができます。

```js
const numbers = [5, 10, 15];

const total = numbers.reduce((acc, number) => acc + number, 0);

console.log(`Total sum: ${total}`);
```

`reduce`メソッドを使うことで、簡潔に、そして不要な`let`を用いずにコードを書くことができました。
他にも、

- 配列内の特定要素を`forEach`で探す →`find`
- 配列内でとある条件を満たすものだけを集める →`filter`
- 配列内でとある条件を満たすものだけに対し操作を行い配列を作る(`forEach`&`push`)→`filter`&`map`

という風に、よく考えてみれば考えてみるほど、`forEach`を使わなければいけない場面は少ないと感じます。

今回の解説で、`map`と`forEach`の違いを理解し、正しく使い分けられるようになったり、リファクタリングの手助けになったりすれば幸いです。

(次回は TypeScript の内容にしようと考えています。お読み頂きありがとうございました 🙌)