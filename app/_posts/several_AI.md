---
title: "2025年最新版｜主要な生成AIツールまとめ - チャットから開発・画像・動画まで"
excerpt: "ChatGPTやGeminiなどの自然言語AIからDevinやGitHub Copilotといった開発AI、画像生成や動画生成AIやNotebookLMもまとめて紹介。用途や特徴をざっくり押さえて、最新AIの活用ヒントを得よう💭"
coverImage: "/assets/blog/react-union-literal/react-css_cover.webp"
date: "2025-02-19T05:35:07.322Z"
category: "Tech"
tags: ["AI", "Programming", "Tools"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/react-union-literal/react-css_cover.webp"
---

## まえがき

昨今の生成 AI は種類がとても多く、名前しか聞いたことないものが増えてきたので、どんなものがあるのか(と、ほんの少しの説明)をメモ的にまとめた ✍️

**AI ツールの存在の認知(名前を知ってもらうこと)が目的なので、説明は最小限です。ご了承ください 🙇🏻‍♂️**

## 自然言語(チャットボット)な AI

### ChatGPT

> ChatGPT は、質問応答、文章生成、要約、翻訳、コード作成、データ解析など、多様なタスクを支援する AI です。知識提供や創作支援、学習補助、問題解決などに活用でき、対話形式で柔軟に対応します。

by ChatGPT-o1

OpenAI 製。ちなみに筆者は GPT-Plus($20/Month)に加入してます。$200/Month の Pro もある 💸
正直これで十分すぎて今のところ他のツールに乗り換える予定はない 👏🏻

### Gemini

> Gemini（ジェミニ）は、Google が開発した大規模言語モデルです。テキストやコードの生成、翻訳、質問応答など、多様なタスクに対応できます。Gemini Pro は特に高度な性能を持ち、様々な分野で活用されています。

by Gemini 2.0 flash

Google 製。Advanced は ¥2900/Month。

### Claude

> 私は Anthropic 社が開発した AI アシスタントの Claude です。分析、文章作成、コーディング、数学、教育など、様々なタスクのお手伝いができます。常に丁寧で誠実な対応を心がけ、正確で有用な情報提供に努めています。対話を通じて、人々の問題解決や目標達成をサポートすることを喜びとしています。

by Claude 3.5 Sonnet

Anthropic 製。$20/Month の Pro 有。

### Perplexity

> Perplexity は、生成 AI と検索エンジンを組み合わせた対話型 AI 検索ツールです。ユーザーの質問に対し、最新のウェブ情報を基に正確で要点を押さえた回答を提供します。情報源の明示、複数の AI モデル選択、多言語対応など、高度な機能を備えています。

by Perplexity

Perplexity 社製。前述の 3 つとは異なり、**AI 検索エンジン**なので、質問ごとに毎回 web 検索しているという特徴があり、ソースが明瞭 🧑🏻‍💻
$20/Month or $200/Year の Pro 有。

### 超ざっくり比較

ChatGPT は万能タイプ。
Gemini は Google 製品との連携に強い。
Claude は文章の精度が良いと感じる。小説っぽい言い回しとかするのも強いイメージ。
Perplexity はレポート作成とかに使いやすい。最新情報やソースが必要なときに強い。

最近の傾向として、**Deep Research** というものが出てきており(現在 Gemini,ChatGPT,Perplexity)、深く思考してレポートを生成する(ソース有)ことができるようになってきている。

⬇️ 比較記事(ChatGPT,Gemini,Claude)
https://note.com/erukiti/n/n73ba47fe4518

### その他

Llama,Grok など

## 開発な AI

### Devin

Cognition 社製。「完全自立型 AI ソフトウェア・エンジニア」とのこと。
Slack 上で指示を出したら、コードの実装・修正から PR 出すところまでやってくれる。凄い 👀
https://x.com/tonkotsuboy_com/status/1871777460330938846
対話しながらコードを修正してもらえるので、リモートでエンジニアを雇っているような感覚になりそう。従量課金製で$500~/Month💸

正直できることが凄すぎて人手が足りていない時やある程度単純な作業を PR 出して CI 通すところまでしてもらうという意味では全然アリかも 🤖
https://zenn.dev/ubie_dev/articles/devin-for-test

### GitHub Copilot

Microsoft 社と OpenAI が共同開発した AI ペアプログラマー。VScode や JetBrains、Neovim などのエディタで利用可能。コードの補完だけでなく、関数の自動生成やコメントからのコード作成などができる。
Copilot Chat の登場により、エディタ内で自然言語を用いたコード修正・最適化の指示も可能に。

個人で$10/Month(学生は申請で無料になる)

大規模なコード修正や PR 作成まではカバーしていないため、Devin のような「完全自律型エンジニア」とは異なる立ち位置。
日々のコーディング補助やリファクタリング、既存コードの理解を助けるツールとして強力 💡

https://zenn.dev/umi_mori/books/ai-native-programming/viewer/github_copilot_basic_usage

### Dify

Phrase 社が開発する「Web ベースの生成 AI 統合プラットフォーム」。OpenAI などの LLM を活用した AI アプリケーションを、GUI で管理しながら素早くデプロイできるのが特徴。  
自社環境へのデプロイ(OSS 版)にも対応しており、機密性の高いプロジェクトでの利用も検討しやすい。  
ナレッジベースやデータソースと連携し、各種ワークフローを自動化できるため、**AI チャットボットをノーコードで作成**することなどができる。

https://zenn.dev/aldagram_tech/articles/7c168a667b06e4

### v0

Vercel 社製。自然言語から UI デザインとコード生成ができる。成果物をそのまま公開することも可能。
無料でも使えるが使用量(クレジット)制限が厳しい。$20/Month の Pro にもクレジット制限あり。クレジットをカスタマイズできる Enterprise プランがある(料金もカスタムにより変動)。

https://qiita.com/shirochan/items/541126f4c866367b2278

### Bolt

StackBlitz 社製。自然言語でのフルスタックアプリケーション開発ツール。
パッケージのインストールやビルドまでやってくれる 🏗️
$20/Month の Pro 有(トークン制限増える)。

https://qiita.com/Ameyanagi/items/67f220df9c9240021048

### 超ざっくり比較

性能で言えば Devin が圧倒的(値段も圧倒的だが)で、Slack で会話しながら実装方針を固め、コードを書いてもらい CI まで通した状態で PR を出してもらい、レビュー対応まで行うことができる。

v0 と Bolt の比較としては、v0 はフロントエンド寄りでバックエンドは非対応。Bolt はフルスタックで行ってくれる。

⬇️ 比較記事(v0,Bolt)
https://zenn.dev/tsuruo/scraps/b76f5914f53a4b

### その他

Cursor: AI アシスタント付きのコードエディタ(VScode のフォーク)。複数のファイルを跨いだ質問ができたり、web 上のドキュメントを読み込ませた上でコードをの修正をしてもらうことができる。

https://www.gamulog.com/posts/cursor

## 画像生成な AI

(筆者が詳しくないので有名なものの列挙になります)

### Stable Diffusion

入力テキストを元に画像生成。オープンソース。昔からあるし、書籍も充実してるイメージ。

### Midjourney

入力テキストを元に画像生成。有料&Discord 上で使用する。これも昔からあるイメージ。

### DALL-E

OpenAI 社製。入力テキストを元に画像生成。ChatGPT での会話の中で使えるのも強い。

### Imagen

Google 製。2025 年 2 月現在でかなり性能がいい(Imegen3)。

### Recraft

Recraft 社製。2025 年 2 月現在でかなり性能がいい。現状では Imagen と Recraft は特にすごいらしい。

### その他

Flux,Canva(の機能の一部),Adobe Photoshop(の機能の一部)など

⬇️ 画像生成 AI をもっと知りたい人用
https://www.sms-datatech.co.jp/column/consulting_generativeai-app/

## 動画生成な AI

(筆者が詳しくないので有名なものの列挙になります)

### Sora

OpenAI 社製。テキストから動画を生成できる。
GPT-Plus 会員は 720p で 5 秒の動画を月 50 本生成できる。1080p で 20 秒の動画は Pro 会員($200/Month)のみ
2024 年では「満を持してリリース！！」といった感じだったのを覚えているが、思ったより現在の動画生成 AI 界隈では流行っていないらしい。

### Runway-Gen

Runway 社製。画像から動画にも対応しているモデルがある。動画生成の大御所(らしい)。
無制限に動画を生成できる有料プランがある。

### Kling

快手社製。テキスト,画像から動画を生成できる。とにかくクオリティがいい。

### その他

Pollo AI,Pika など

⬇️ 動画生成 AI をもっと知りたい人用
https://www.fruitmail.net/articles/generation-ai-videos

## 番外編: NoteBookLM

DeNA の南場会長が 2025/2/5 の講演で自身が利用していると言っていた NotebookLM。
Google 社製で、**ドキュメント管理 ×AI** というようなサービス。
ドキュメントを投げるだけで要約してくれたり、そのドキュメントをもとにこちらの質問に答えてくれる。キャッチアップにめちゃめちゃ便利かも。

さらに、特定の分野のドキュメントを投げまくることでその分野について深い知見を持った AI を作ることができるのも特徴 👀

ただ、要約・検索に特化した AI ツールなので、「読み込ませた記事を元に新しい記事を生成する」みたいなことはできないっぽい 🙅

## おわりに

ジャンルを絞って調べてみたが、想像以上に種類が多かった 🫠
開発系 AI の v0 や Bolt などはまだ使ったことがないので、今度の開発で使ってみようと思う 🧑🏻‍💻

最後までお読みいただきありがとうございました 🙌

(あと、初めて ChatGPT o1 に記事タイトルとディスクリプションの案出しをして貰ったけど、めっちゃ大層なタイトルになったな 🧐)
