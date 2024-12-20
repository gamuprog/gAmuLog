---
title: "新時代のコードエディタ、Cursorのメリット・できることを網羅的に解説した"
excerpt: "新時代のAIコードエディタだ👀"
coverImage: "/assets/blog/cursor/cursor_cover.webp"
date: "2023-11-22T05:35:07.322Z"
category: "Tech"
tags: ["Programming", "Other", "AI"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/cursor/cursor_cover.webp"
---

## まえがき

VScode を今まで使用していたが、あまりにも Cursor の話題が入ってくるので実際に使ってみたら、正直デメリットほぼないというレベルで良かったので、Cursor で何ができるかまとめることにしました。記事もまだまだ少ないと思うので参考にしていただければ幸いです。 ~~最後にデメリットというか個人的に困ってる部分があるのでわかる方ぜひ教えて(助けて)ください。~~

## What is Cursor?

AI-first のコードエディタ。ChatGPT との連携が強く、エディタ内で質問、修正をしてくれるのが特徴。

## Cursor のいいところ

- ダウンロードしてみるとわかるが、VScode の拡張機能の移行がめちゃめちゃ簡単
- VScode にレイアウトがめちゃめちゃ似せてあるので(VScode のフォークなので)、Cursor 使ってると VScode を AI の方向に大規模アップデートしたみたいな感覚になる
- もちろん GitHub Copilot も使える
- **GPT PLUS の GPT-4 よりも強い GPT-4 が使える(後述)**
- APIkey 登録で GPT 使える

```js
code .
```

で VScode 開いて

```js
cursor .
```

で Cursor 開くから一応共存できる(お試ししやすい)
:::message alert
上記のようにコードエディタを開くコマンドを分けるために、既に code コマンドを VScode で使っている方は cursor ダウンロードの際に cursor コマンドのみインストールするようにしてください。code の方もインストールすると、code コマンドで VScode と Cursor どちらも開いてしまうようです。
:::

## Cursor 主要機能紹介

### cmd + Shift + L or cmd + L で GPT と Chat 機能

エディタ上で画面右に GPT に質問できるサイドバーが出現する。何も選択してないと無から質問できる状態になっていて、コードを選択した状態で開くとそのコードがあらかじめ引用された状態になっている(別の部分のコードもどんどん追加できる)。
![](https://storage.googleapis.com/zenn-user-upload/6bad0671417a-20231122.png)
↑10~21 行目を cmd + L した後に 31~33 行目を追加で cmd + L した画像

### cmd + K 　で AI Edit 機能

コードを選択した状態で cmd + K して指示を出すことで AI が自動でコードを修正してくれる。
![](https://storage.googleapis.com/zenn-user-upload/28e0ccf969bd-20231122.png)
↑ こんな感じで指示を出すと、
![](https://storage.googleapis.com/zenn-user-upload/fe610fd0f0e8-20231122.png)
↑ 修正してくれる。赤背景が削除されたコードで、緑背景が追加されたコード。部分ごとに Accept するか Reject するか選ぶ

### Symbol 機能

chat 内で、@ファイル名　とすると、そのファイル全体を読み込んでくれる。ChatGPT にファイル内のコード全コピペする必要が無くなった。複数のファイルも簡単に参照できるので嬉しい。
![](https://storage.googleapis.com/zenn-user-upload/da4350810b83-20231122.png)
↑@App.tsx と打つと中身が参照されている

### CodeBase 機能

chat 内で　@CodeBase と打つと、**プロジェクト全体のコードを読み込んでくれる。** とてつもなく嬉しい。何度 GPT-4 に「〇〇の実装の中身を見ないと判断できません。詳細な実装のコードを...」的な回答をされたか。まとめて全部コードを読み込んでくれるのは多くのプログラマーにとって嬉しい機能ではないだろうか。

### Docs 機能

AI がネット上の記事を読み込んで勉強してくれる機能。モダンな Web アプリを作っている人とかは、たとえば Next.js の最新のアプデ内容について質問がある、みたいな状況があると思うが、そういった最新情報にも対応できる。AI に公式ドキュメント読ませて鍛えられる機能優秀すぎる。
Chat 上で@を打つ →Docs を選択 → Add new doc→ 学ばせたいサイトの URL を入力 で学習してくれる。
![](https://storage.googleapis.com/zenn-user-upload/20c94a93ff48-20231122.png)
↑ とりあえず Next.js の公式ドキュメント勉強させてみた
![](https://storage.googleapis.com/zenn-user-upload/dbfc86276c4f-20231122.png)
↑ 体感 1 分弱程度で全部読み終えたらしい

#### 本当に理解しているのか確認してみる

![](https://storage.googleapis.com/zenn-user-upload/c891da262fec-20231122.png)

~~よく考えたら僕が Next.js 触ったことないからあってるか分からなかった。~~ 調べたところ最新バージョンの変更点を正しく理解できているようだ。このバージョンアップは 2023 年 10 月末にされたものなので、もちろん GPT-4 が元々知っていたということはない(2023 年 11 月現在の GPT-4 は 2023 年 4 月までのデータを学習している)。

### New File で AI に 0 からコードを書いてもらう機能

**もはや何をしたいかを伝えるだけでコードを全部書いてもらえる。** 未来を感じる。
![](https://storage.googleapis.com/zenn-user-upload/5940e2f1228c-20231122.png)
↑File 内の New AI Project を選択すると、何を作りたいか聞かれるので指示を出すとコードを全部書いてくれる。

### Auto Debug 機能,Fix Lint 機能

これらはまだ使ったことないですが、ここら辺の機能に関しては今までの VScode の拡張機能や ESLint の環境があるのでそこまで画期的な何かという感じはなさそう？使ってみて特筆したいことがあれば追記します。

## 料金と GPT の性能,APIkey

- Free プラン
  - 無料で使える。質問は、　 Slow 　 GPT-4(後述)は 50 回まで(おそらく月毎とかでなく合計)
  - GPT3.5-turbo は 200 回/月
- Pro プラン
  - 20$/月
  - Fast GPT-4 を 500 回/月
  - Slow GPT-4 は無制限

### Fast/Slow GPT-4 とは

- OpenAI と Cursor が独自の連携をしていることで、GPT Plus のユーザーが普通に GPT-4 に質問するより素早く回答を得られるらしい。これが課金すると使えるようになる Fast GPT-4。
- Slow GPT-4 でも Web 上で普段使う GPT-4 と速度は変わらないように感じた

ちなみに APIKey 設定することでコードエディタ内の Chat で自分の GPT-4 を使うこともできる ~~(GPT Plus ユーザーは全員ある程度は API 叩けるもんだと思ってて(実際は普通に API 使用料払う必要あり)ずっとエラーでて苦戦してました恥ずかしい)~~ 。

## Cursor に移行して感じたデメリット

これはデメリットというかシンプルに自分の知識不足で解決できていないだけにも感じるが、
~~**cmd + L と cmd + Shift + L が chat 開くショートカットキーに使われているせいで今まで使っていたショートカットが使えない。**
(解決方法わかる方いれば教えてくださいお願い致します)~~
VScode 上では、
cmd + L → 現在の行を選択、
cmd + Shift + L → ファイル内で現在選択している文字列と完全一致するものを全選択
がデフォルトで設定されているはずだ。前者は特によく使うし、後者は頻度こそ少ないが tailwind とかで一気に複数個の border を太くするみたいなタイミングで一気に時短できることがあり、どちらも個人的にはないと困るショートカットである。VScode だと左下に歯車マークがありそこでショートカットキーの設定も変えられるのだが、Cursor は左下に歯車マークはなく、~~右上の設定ボタンから探してもショートカットキーの設定的な項目が見つからない。割と困っている(こんなに見た目 VScode に寄せてるのになぜ設定だけ違うんだ)。解決策見つかれば追記します。~~

以下追記です。普通にできました。恥ずかしい限りです。

### ショートカットキーの変更

画面上部の Cursor → Preferences → Keyboard Shortcuts でショートカット一覧の画面に遷移できる。(win は確か File → Preferences...だったはず)
検索欄で「aichat」と調べると

- aichat.newchataction
- aichat.insertselectionintochat

という項目が、cmd + Shift + L と cmd + L に対応していることがわかる。右クリック → Remove Keybinding でショートカット削除する。これで VScode 上の元のショートカットが使えるはず...
![](https://storage.googleapis.com/zenn-user-upload/45adc9dfe248-20231122.png)
![](https://storage.googleapis.com/zenn-user-upload/6fd88e6f63dd-20231122.png)

と思ったら、cmd + Shift + L は使えるが、現在の行を選択する cmd + L はうまくいかない。
ここで、現在の行を選択するショートカットキーのキーバインディングを確認するために、検索欄で「expand line selection」を調べると... **なぜか cmd + P が割り当てられている。** cmd + P ってファイル検索だよなと思いつつコード上で使ってみると、やはり行の選択は行われずファイル検索のコマンドが実行される。なので
expand line selection を右クリック → Change Keybinding で cmd + L を登録。これでいつも通りの VScode のショートカットが使えるようになった。
ちなみに、aichat.newchataction のショートカットは流石に登録しておかないとすぐに chat 機能が使えないので、option/alt + c とかに割り当てておいた。

## あとがき

総合的にみてめちゃめちゃいい機能がたくさんあるのと、以降がものすごい楽で、~~一部ショートカットキーの問題はありますが~~ 大半は VScode そのままという感じで使いやすさもあるので、今後は Cursor をメインのコードエディタとして使っていくと思います。課金に関しては、Cursor の Pro も全然課金する価値があるように感じますが、GPT plus は plus でコーディング以外にも使うので、両方に課金して 40$/月の出費は結構痛いということで一旦 Cursor は Free で使っていこうかなと思います。

追記
想定より数十倍伸びていてびっくりしています(本当にありがとうございます 🙇)...~~急ぎで~~X アカウント作成したのでもしよろしければフォローお願いします 🙇 開発風景や執筆記事、おすすめ記事投稿する予定です！
