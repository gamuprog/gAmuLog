---
title: "【React入門】絶対に理解させる(たい)useEffect【初中級者向け】"
excerpt: "一癖も二癖もあるReactのuseEffectをわかりやすく解説！"
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2024-08-21T05:35:07.322Z"
category: "Tech"
tags: ["React", "Hooks", "Programming"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## まえがき

🧑🏻‍💻「よし、`state`の更新に応じて別の`state`を`setState`するコードを`useEffect`で実装したぞ！！」

```ts
const [firstName, setFirstName] = useState<string>("太郎");
const [lastName, setLastName] = useState<string>("リアクト");

const [fullName, setFullName] = useState<string>("");

useEffect(() => {
  setFullName(firstName + lastName);
}, [firstName, lastName]);
```

👮‍♂️🚓🚨「開けろ！！！！`useEffect`市警だ！！！！」

## 今回のテーマ

今回は React の`Hooks`の一つである、`useEffect`について解説します。`useEffect`は一癖も二癖もある`Hook`で、使い方を間違えると**パフォーマンスの低下やバグの温床になる危険性**があります。
今回も初学者向けに、厳密性よりも理解させることを目的としています。

## 対象読者

- React 勉強中の方
- `useState`は多分いけるぞって方
- `useEffect`が正しく使えているか自信のない方

## `useEffect`って何

**副作用を担当する`Hook`...とよく言われています**。「よく言われています」というのも、実は`useEffect`の使用法や考え方にはいろいろな議論があり、人によって捉え方が異なります。

実際は、**外部 API でデータを取得したり、React 管轄外の DOM 操作を行ったり**する時に使われるものと捉えてくれれば大丈夫です。

:::message alert
もしあなたが単なる`state`の更新や操作に`useEffect`を使用しているなら、おそらく**その`useEffect`は不要**です！！！
:::

### 副作用って何

厳密な定義はなく、曖昧ですが、React に限って言えば、「JSX(TSX)を生成、返却する処理、またはその為の`state`管理**以外**の作用」と考えられます。要するに UI を表示するための処理以外の作用です。

基本的に副作用は不必要に起こるべきではなく、どうしても必要な場合にのみ適切に起こすべきであるので、**`useEffect`はどうしても使わないといけない場合以外で使うべきではない**です。

## `useEffect`の書き方

### 一般化

```ts
useEffect(() => {
  // ここに処理を書く
  return () => {
    // ここにクリーンアップ関数
  };
}, [ここに依存配列]);
```

### 処理について

ここに記述される処理は、主にデータ取得、検索や直接的な DOM 操作になります。
処理が走るタイミングは以下です。

- 初回レンダリング時(マウント時)
- 依存配列に変数を並べた際、その変数の値に変化があった場合

### クリーンアップ関数について

クリーンアップ関数は、コンポーネントの純粋さを保つために必要で、API のキャンセルやイベントリスナーの削除などを担います。
クリーンアップ関数が走るタイミングは以下です。

- アンマウント時(レンダリング対象外になった時)
- 依存配列の値にに変化があり再レンダリングが行われた時
  どちらのタイミングでも、**前回の`state`,`Props`を用いて**クリーンアップ関数が実行されます。

#### 再レンダリングって何

画面を更新(再描画)するために、JavaScript をもう一回読み込み直すことを指します。
基本的に以下のタイミングで再レンダリングが走ります。

- 自コンポーネントの Props が更新された時
- 自コンポーネントの State が変更された時
- 親コンポーネントが再レンダリングされた時

### `useEffect`の処理の流れ

`useEffect`の処理は**レンダリングの後**に行われます。
これにより DOM の操作が可能になっています。

(`useEffect`がレンダリングの最中に走ってしまうと、当たり前ですが DOM 生成が終わっていないので、DOM 操作を行いたくても参照する DOM そのものが無いという事態になります。なので`useEffect`はレンダリングが終わった後に走ります。)

- 初回レンダリング時
  - `useEffect`の処理が発火
  - クリーンアップ関数は走らない
- 再レンダリング時
  - 前回の`state`&`Props`を用いてクリーンアップ関数を実行 → 依存配列をチェックし、前回から変更があれば処理を実行
- アンマウント時
  - 前回の`state`&`Props`を用いてクリーンアップ関数を実行

### コードの例:データ取得

```ts
const [results, setResults] = useState([]);
useEffect(() => {
  let ignore = false;
  fetchAPI(query).then((response) => {
    if (!ignore) {
      setResults(response);
    }
  });
  return () => {
    ignore = true;
  };
}, [query]);
```

このコードは、`fetchAPI`という外部からデータを取得する関数を、`query`が変更された際に実行するコードです。
これにより、検索ワードが変わるたびにデータを取得することができます。

では、クリーンアップ関数はどのような作用をしているでしょうか？
これは検索ワードの変更時に、前回走った`fetchAPI`の結果を`results`に格納することを防ぐ為の関数です。

あなたが`React`と検索したい時、タイピングを行う上で、`R`,`Re`,`Rea`,`Reac`,`React`の 5 つの検索ワードで`fetchAPI`が走ってしまいます(毎回依存配列内の変数`query`が変わるため)。最後に走ったのは`React`ですが、この 5 つの検索の結果のうちどれが最後に返ってくるかは分かりません。もしかしたら`Re`の検索結果が一番最後に返ってきて`results`に上書きされてしまうかもしれません。

それを防ぐために変数`ignore`を定義します。`R`を打った際に走った`fetchAPI`は、`Re`を打った際のクリーンアップ関数`ignore = true`によって、`if`文の中を通らなくなります(つまり`setResultsされない`)。

これを繰り返すことで、素早くタイピングした場合でも、`React`の検索結果だけが`results`に格納されます(`React`を打った後に再レンダリングはされていないため、クリーンアップ関数が走らない → `results`に取得データが格納される)

### コードの例:イベントリスナー

```ts
useEffect(() => {
  const keydownListener = (event) => {
    if (event.key === "Enter") {
      console.log("Enterキーが押されました");
    }
  };
  // コンポーネントがマウントされた時にリスナーを設定
  document.addEventListener("keydown", keydownListener);

  // コンポーネントがアンマウントされた時にリスナーを削除
  return () => {
    document.removeEventListener("keydown", keydownListener);
  };
}, []);
```

このコードでは、イベントリスナーの登録と削除を行なっています。これによって、ユーザーがエンターキーを押下した時に`console`を出力することができるようになります。
この`useEffect`の依存配列は空なので、イベントリスナーはマウント時(初回レンダー時)に登録され、アンマウント時(レンダー対象外になる時)にクリーンアップ関数が走りイベントリスナーが削除されます。

一般的にイベントリスナーの設定・削除は、React の DOM 操作の範囲外なので、これはコンポーネントのレンダーが終わったタイミングで行われるべきです。`useEffect`はレンダーの後に走り、クリーンアップを行うことができるという特徴があるので、イベントリスナーの設定・削除は`useEffect`を利用して実装されるべきです。

### `useEffect`である必要がないパターン

`state`の更新しかしていない場合

```ts
const [firstName, setFirstName] = useState<string>("太郎");
const [lastName, setLastName] = useState<string>("リアクト");

const [fullName, setFullName] = useState<string>("");

useEffect(() => {
  setFullName(firstName + lastName);
}, [firstName, lastName]);
```

これは以下のようにリファクタリングできます。

```ts
const [firstName, setFirstName] = useState<string>("太郎");
const [lastName, setLastName] = useState<string>("リアクト");

const fullName = firstName + lastName;
```

`firstName`,`lastName`は`state`なので、変化があった時点で再レンダリングが走ります。つまり、`fullName`も計算され直すので、`fullName`を`state`で管理する必要はありません。
そもそも、`state`を要素にもつ`state`は基本的に不要な可能性が高いです。

ちなみに、リファクタリング前のコードは内部でどのようなレンダリングが行われるか説明できるでしょうか？
`firstName`を変えた際の動きを追ってみましょう。

1. `firstName`を`"二郎"`に変更 🍜
2. `state`の変更を感知し、再レンダリングが走る
3. 再レンダリングによって`firstName = "二郎"`,`lastName = "リアクト"`, **`fullName = "太郎リアクト"`** でレンダリングされる(`fullName`は`useEffect`内なので、まだ更新されていない！)
4. レンダリング後に、`useEffect`が依存配列内の値の変化(`firstName = "二郎"`)を感知
5. `setFullName(firstName + lastName);`を計算する
6. `fullName`が変わったので、再レンダリングされる(`state`の更新)
7. 再レンダリングによって`firstName = "二郎"`,`lastName = "リアクト"`, **`fullName = "二郎リアクト"`** でレンダリングされる
8. 依存配列内の値は変化していないので、`useEffect`は発火しない

このような流れになります。不要な`useEffect`のせいでレンダリング回数が増加し、パフォーマンスが低下することが理解できると思います。

## まとめ

今回は`useEffect`の使い方について解説しました。`useEffect`は`Hooks`の中でも特に使い所が難しいものとなっているので、是非正しいタイミングで使えるようになりましょう！お読みいただきありがとうございました 🥳
