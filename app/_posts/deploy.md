---
title: "NextのプロジェクトをVercelにデプロイして、独自ドメインを設定する"
excerpt: "VercelにNextプロジェクトをデプロイ！お名前.comで取得した独自ドメインを設定してみた⚙️"
coverImage: "/assets/blog/deploy/deploy_cover.webp"
date: "2024-12-21T05:35:07.322Z"
category: "DevDiary"
tags: ["Next"]
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/deploy/deploy_cover.webp"
---

## アプリケーションデプロイ先の選定

本ブログは Next.js を用いて作成されている。いざデプロイ！というところで、デプロイ先のサーバーを選定する必要があるのだが、今回に関しては**Vercel**一択であった。そもそも Vercel 社は Next.js フレームワークそのものを提供している企業で、Next.js で作成されたアプリケーションのデプロイが非常にできることと、**CI/CD 周りをほぼ何も設定せずに自動デプロイまでしてくれる**ので、今回は Vercel をデプロイ先に選定した。

:::message
CI/CD...Continuous Integration/Continuous Delivery の略。常にコードが(統合された状態で)正しく動き、常に新しいコードを正しくデプロイし本番環境で動かすことができるようにする仕組みや体制のこと。簡単にいうと、コードを変更した時などに毎回チェックやテスト、ビルドが行われて、デプロイがされるようにする仕組み。
:::

## はじめてのでぷろい

GitHub Actions の変更などは行なったことがあったが、初回デプロイに関しては初めてなので、色々と調べつつ行なった。

### デプロイ手順

1. GitHub アカウントを元に Vercel のアカウントを作成する。

---

2. Add New... → Project を選択
   ![](https://storage.googleapis.com/zenn-user-upload/86e842bb853f-20241221.webp)

---

3. Import Git Repository から、import したいプロジェクトを選択
   ![](https://storage.googleapis.com/zenn-user-upload/2bd46d4a643e-20241221.webp)

---

4. Project Name を設定、フレームワークを「Next.js」にし、デプロイ！
   ![](https://storage.googleapis.com/zenn-user-upload/86b277f6ea23-20241221.png)

---

5. 一分ほど待ったら、デプロイ完了(簡単すぎ)

以下参考サイト
https://zenn.dev/dollaga_saiore/articles/2b9158e5add3c6
https://zenn.dev/hayato94087/articles/6bcab4299db7a2#vercel%E3%81%ABgithub%E3%81%AE%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%82%92%E7%99%BB%E9%8C%B2

## 独自ドメイン設定

vercel で特に設定せずにデプロイを行うと、URL が`https://{projectName}.vercel.app`になる(被ってなければこうなるはず)。せっかくなので、URL を`gamulog.com`に変更してみた。

## はじめてのお名前.com

まず独自ドメインである、`gamulog.com`を取得する。お名前.com を使ったらとても簡単に取得することができたので説明は割愛する。初めてのドメイン取得だったので安かった。

### ドメイン設定手順

1. 一旦 Vercel で使いたい独自ドメインを入力
   デプロイしているプロジェクト →Settings→Domains に移動して、検索ボックス内に自分が追加したいドメインを入力して、「Add」を押下

↓ この検索ボックス内にドメインを入力(画像は独自ドメイン設定後のものなので本来は`www.gamulog.com`と`gamulog.com`は下にない)
![](https://storage.googleapis.com/zenn-user-upload/b631c4e57757-20241221.png)

---

2. Recommended されている一番上のものを選ぶ(`www`あり・なしを両方登録し、`www`なしは`www`ありにリダイレクトする)
   ![](https://storage.googleapis.com/zenn-user-upload/c36141dd3ef5-20241221.png)

---

3. `Aレコード`と`CNAME`の`Value`をメモする
   お名前.com で DNS 設定する際に使う。
   ![](https://storage.googleapis.com/zenn-user-upload/ea0b90314d34-20241221.webp)

---

4. 「DNS 設定」から設定したいドメインを選択 → 「DNS レコード設定を利用する」を選択
   ![](https://storage.googleapis.com/zenn-user-upload/5ddcfe1733e0-20241221.png)

---

5. さっきメモったやつ(2 種類)を入力
   TTL は 3600 のままで OK。
   `Aレコード`の場合はホスト名は空、`CNAME`の場合は`www`
   ![](https://storage.googleapis.com/zenn-user-upload/f741e198d24b-20241221.png)

---

6. Vercel に戻って、`Valid Configuration`になれば完了。SSL 証明書も自動で発行してくれるので、20 分ほど待つと、SSL 証明書周りの処理も完了になる(https 通信になる)

以下参考サイト
https://zuma-lab.com/posts/vercel-onamae-domain-settings
https://ph-1ab.com/deploy-vercel-with-own-domain/

### 余談 1.ドメイン自動診断

SSL 証明書発行中に、お名前.com がドメインの自動診断を行っていて、
![](https://storage.googleapis.com/zenn-user-upload/d68749e34fef-20241221.png)

これが表示されたのでちょっと焦った。**HTTPS 接続になった後は評価が B まで上がった**のでひとまず安心。A 評価にするにはおそらく追加で課金して色々なセキュリティオプションをつける必要がありそう。

### 余談 2.A レコードと CNAME レコード,TTL とは

**A レコード**...ドメインを IP アドレスに置き換える最も基本的なレコード
**CNAME レコード**...ドメインを別のドメインにリダイレクトするためのレコード。`www`ありを`www`なしの URL にリダイレクトする時などに利用。
**TTL**...Time to Live キャッシュ保持時間。今回の話では、ブラウザやリゾルバがレコードをキャッシュに保持する時間を指す。

どれも FE の勉強や AWS-SAA の勉強でやった内容なので、実際に使うことでより知識が定着した。

## CI/CD 　について

以上の手順で、初回デプロイは完了した。この状態で、いつも通りに`main`ブランチからブランチを切り開発し`push`、そしてプルリクエストを行うと、Vercel がプルリクエストを検証し、正しくデプロイできるかを判断してくれる。チェックが終わった後に`main`ブランチにマージを行うと、自動的に新しいソースコードがデプロイされ、変更が反映される。

## おわりに

今回は Vercel を用いたデプロイ、独自ドメイン設定を行った。初めてのデプロイ、ドメイン設定であったがとても簡単に行うことができた。CI/CD も基本的な部分は自動化されているので開発においても非常に助かっている。Vercel さんありがとう 🫰🏻
