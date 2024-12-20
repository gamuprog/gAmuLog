---
title: "LighthouseでのWebサイト評価を使ってみた&画像圧縮の話"
excerpt: "Lighthouseでページを評価！画像形式は適切に選ぶことが必須です🧐"
coverImage: "/assets/blog/lighthouse/lighthouse_cover.webp"
date: "2024-12-20T05:35:07.322Z"
category: "DevDiary"
tags: ["Next"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/lighthouse/lighthouse_cover.webp"
---

## What is Lighthouse ?

Google が無料で提供している**Lighthouse**を使うと、Web サイトの品質を測定することができる。パフォーマンスだったり SEO 対策だったりの評価が点数で視覚化され、改善点を提案してくれる。

開発環境(localhost)上では、検証モードで Lighthouse を使って開発中のサイトの品質を測定するととができるので、今回はこれを使ってみたのだが...

## 画像の容量の話

今までの企業での開発においては、toB の開発のみを行っていたことや、画像データはあらかじめ用意されていたということもあり、画像をアップロードする上で、画像の容量やページ全体の容量を意識することがあまり多くなかった(意識しなくていいようなサイズの画像が渡されていた)。

自分のブログで、特に考えずに PhotoShop でダササムネを量産し、高画質の png で保存し、それを一気にアップロードしブログトップページに描画したところ、**3DS でインターネットを見ているのか？と勘違いするほど画面がカクカクになった。** スクロールをすれば次元の裂け目のような画面になり、5 秒後にようやく正しい画面が描画される...**逆阿部寛のホームページ**である。

⬇️ 順阿部寛のホームページ
http://abehiroshi.la.coocan.jp/

## Lighthouse を使ってみる

この状態で Lighthouse を使ってみようと思い、検証ツールから Web の品質を分析したところ、

![](https://storage.googleapis.com/zenn-user-upload/4b9e80f90677-20241211.png)

![](https://storage.googleapis.com/zenn-user-upload/8ec4e03da834-20241211.png)

やはりパフォーマンスが良くないと評価された。特に、`Largest Contentful Paint`,ページ内で最も大きなテキストや画像が描画されるまでにかかった時間が**7.9 秒**と、激長であった。ちなみに**阿部寛のホームページの`Largest Contentful Paint`は 0.7 秒**らしく、このままでは**僕のブログのトップページにアクセスする時間で阿部寛のトップページを 11 回訪問できてしまう**ので、一刻も早くパフォーマンスを改善するためにソースコードを改修した。

## ページの最大容量と画像圧縮・ファイル形式

> 合計バイトサイズを 1,600 KiB 未満に保つようにします。この目標は、Time to Interactive を 10 秒以内に抑えながら、3G 接続で理論上ダウンロードできるデータ量に基づいています。

https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight?utm_source=lighthouse&utm_medium=unknown&hl=ja

Google さんによると、**ページ容量が大体 1.6MB 未満**に収まるのが望ましいとのこと。[がむログトップページ](https://www.gamulog.com/)では、最大 12 枚の画像が表示されるので、少なくとも画像 1 枚あたり 100KB で収まっていて欲しい。

![](https://storage.googleapis.com/zenn-user-upload/149ab09b9e31-20241220.png)

......そりゃ 3DS くらいページ重くなるわ。**そもそも png は画像サイズが大きくなりやすい**らしい。png が可逆で jpg が不可逆圧縮ということしか知らなかったのでちょっと勉強になった。幸いにも PhotoShop の元データが残っていたので、それぞれの画像サイズが 50~80KB になるくらいの画素数で jpg 形式で書き出した。
ちなみに、png→jpg に圧縮変換してくれるサイトや、jpg を圧縮してくれるサイトも使ってみたが、なぜか全然容量が減らなかった(png→jpg は減ったが、それ以上減らなくて困った)ので、PhotoShop の書き出し時に画素数や容量、ファイル形式を自分で設定できる機能には非常に助けられた。

↓ 使おうとしたサイト達
https://png2jpg.com/ja/#google_vignette
https://compressjpeg.com/ja/

### 追記?

Webp という Google が開発した次世代画像フォーマットが画像容量も小さく、推奨されているらしい(前の会社でも Webp 使っていたのを今更思い出した)ので、とりあえずトップの一番大きい画像だけ Webp に変えてみたらめちゃめちゃ LightHouse の評価が良くなった。読み方は「ウェブピー」ではなく「**ウェッピー**」らしい。

## 画像圧縮後の Lighthouse 評価

![](https://storage.googleapis.com/zenn-user-upload/30ff72c846c5-20241220.png)

評価がかなりよくなった。実際に自分で操作していてもわかるほどページ読み込みが早くなった。`Largest Contentful Paint`の評価は黄色になっており、まだ改善の余地があるので、まずはすべての画像を webp に差し替えるところから始めようと思っている。

## おわりに

今回は Lihgthouse を用いた Web サイト評価について解説した。まだまだ自分でもわかっていない部分が多いので、より使いこなして SEO に強い Web サイトを作成していきたい 🕺
