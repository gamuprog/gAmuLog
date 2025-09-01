---
title: "RaycastのList Repos使うときに.gitとその他configファイルの階層が一致してなくて困った話"
excerpt: "最終的に、ワークスペース直下にconfigファイルがないことによるエラーの解決という話に帰着した😴"
coverImage: "/assets/blog/raycast/1.webp"
date: "2025-09-01T05:35:07.322Z"
category: "Tech"
tags: ["Programming", "TypeScript", "Tools"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/raycast/1.webp"
---

(多分特殊な状況な気がしている🤔)

## 経緯

1. RaycastのList Reposで簡単にプロジェクトを開けるようにするぞ！

   ![](/assets/blog/raycast/1.webp)

2. 早速`gAmuLog`を開いて...と
   ![](/assets/blog/raycast/2.webp)

3. あ...そのディレクトリが開かれるのか...もう一個下のappディレクトリを開いてほしかった...

### 状況説明

RaycastのList Reposを使って爆速で作業ディレクトリを開きたい
↓
Raycastは`.git`ファイルがあるディレクトリを提示してくる
↓
自分のディレクトリ構造だと`.git`と`app`が同じ階層で、`app`配下に`tsconfig.json`や`.eslintrc.cjs`、その他すべてのファイルがあるので、`app`の階層でワークスペースを開いてほしかった

### 困ったこと

![](/assets/blog/raycast/3.webp)

こんな感じで、`app`の階層でcursorを開いていないと(つまりワークスペース直下に`.eslintrc.cjs`がないと)、パスを解決できないというエラーが出る。

## どうにかする

Raycastの爆速コードスペースオープンは最高なので、どうにかエラーを解決したい。

`.git`を`app`直下に移動するやり方も考えた。つまりgit管理するレイヤーが変わるのだが、GitHubの見た目上のディレクトリ構造の変化がすごいのと、そもそも将来的にモノレポで開発をしようとしたら、

`.git`
`frontend`(この中にフロント用.eslintrc.cjsなど)
`backend`(この中にバック用.eslintrc.cjsなど)

は同じ階層に置かれることになりそうで、根本的に`.git`とその他configファイルの階層が異なっていてもうまくいく(というかこれは開いているワークスペースとconfigファイルの階層が異なることの問題だが)ようにするほうがいいと感じたので別のやり方を考える。

## 結論 .vscode/settings.jsonを設定しよう

![](/assets/blog/raycast/4.webp)
プロジェクト直下(自分がコードスペースを開いている階層)に、`.vscode/settings.json`を作成し、

```json:settings.json
{
  "eslint.workingDirectories": ["./app"]
}
```

という風に、ESLintがどこで作用するかを明示することでエラーを解消できた(解決してから見るとめっちゃ単純やん)。

## おわりに

初心者エンジニアの頃から、「ああ！vscode開くディレクトリ間違えた！エラーすごいわ！」ってなってたので、プロジェクト直下でも、app直下でもエラーを出さずに開発できるのすごいうれしいです(小声)
