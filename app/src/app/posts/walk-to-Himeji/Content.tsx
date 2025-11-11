import { H3 } from "@/components/post/articleElement/Heading";
import { LinkText } from "@/components/post/articleElement/LinkText";
import { RainbowText } from "@/components/post/articleElement/RainbowText";

export default function Content() {
  return (
    <section className="space-y-4">
      <p className="text-5xl">
        お久しぶりです。
        <RainbowText>がむ</RainbowText>
        です。
      </p>
      <p className="mt-4">最近(直近半年)は何をしていたかというと、</p>
      <p>
        <span className="text-red-500 font-bold">†孤独の就活戦士†</span>
        をしていたり...(理系で院進せず就活してたから就活仲間がマジで0人だった)
      </p>
      <p>友達と神戸から姫路まで70km散歩してみたり...</p>
      <p>ポーカーの大会に出まくってちょっと優勝見えるところまで行ったり...</p>
      <div className="mt-4">
        <LinkText className="text-xl" to="https://tech-word-spikes.vercel.app/">
          TechWordSpikes - 急上昇ITワードランキング
        </LinkText>

        <p>なるサイトを作ってみたり...(ぜひ触ってみてください)</p>
      </div>
      <p>大阪万博で謎のカクテルパーティにお呼ばれしたり...</p>
      <p>技術カンファレンスに出席したり...</p>
      <p>LT会に登壇したり...(これは先週)</p>
      <p>
        とまあ、わりかし色んなことをやっていたんですが、
        <span className="text-red-500">なーんでブログにしなかったか</span>
        というと、
      </p>
      <H3>沼、ハマってました。</H3>
      <p>
        というのも、&quot;がむログ&quot;そのものの改修をしようと思い開発していたのですが、この沼がもう深い深い。
      </p>
      <p>
        やりたかったこととしては、<RainbowText>こーんな感じに、</RainbowText>
        自分で好き勝手CSSをいじったりコンポーネントを使ったりして記事を書きたかったので、
      </p>
      <p>
        今までの、
        <LinkText to="https://www.npmjs.com/package/zenn-markdown-html">
          Zenn-markdown
        </LinkText>
        を使って簡単かつ十分リッチな見た目で記事を書ける状態(主に技術記事用)も維持しつつ、
      </p>
      <p>
        雑談や趣味の記事に関してはCSSやらカスタムコンポーネントやらで遊べるようにする
      </p>
      <p>というのが目標でした。</p>
      <p>
        ここからが<span className="text-red-500">沼の始まり</span>でした。
      </p>
      <H3>試行錯誤 残念プレー集</H3>
      <p className="text-sky-600">
        1.そもそもmdファイル内にtsx書いちゃえばいいんじゃないか？
      </p>
      <p>
        →Zenn-markdown内の処理でsanitizerが走っててHTML直書きは消される。こうやってXSS対策するのね。学びになりましたわ(捨てゼリフ)
      </p>
      <p className="pt-4 text-sky-600">2.じゃあ、mdxで書けばいいんじゃない？</p>
      <p>
        →なんかmdxとmd両立させる処理が絶妙にむずい。しかもNext.jsのSSRだとちょっとMDXの仕様が違う？的な感じでどうしても最後までうまくいかず。7回くらい「これ絶対いけたわ」って確信したシーンあった。
      </p>
      <p>→あとDynamicRoutingの仕様にやられたところもある。</p>

      <p className="pt-4">
        ちなみにGitHubに上げてる分は僕の格闘記録が見れます。恥ずかしいので見ないでください。
      </p>
      <p>
        開発している人ならわかると思うんですけど、全然うまくいかない時ってモチベの削れ方エグいですよね。試行錯誤しつつ半分逃げつつで、
        <LinkText to="https://tech-word-spikes.vercel.app/">
          TechWordSpikes
        </LinkText>
        を優先して作ってたらこんなにも月日が経ってしまいました。最新記事古すぎてサ終したのかと思った。
      </p>
      <H3>現状</H3>
      <p>
        現状はカスタムコンポーネント使ったり、CSSいじれてるので上手くできてると思うんですが、結構妥協してます。
      </p>
      <p>
        なるべく共通のフレームは共有した状態で、app/posts配下に直置きする形でTSXを書いてます。
        <span className="font-bold">逆Dynamic Routing</span>
        です。mdファイルは引き続きapp/posts/[slug]て感じ。
      </p>
      <H3>これからなにするの</H3>
      <p>時間経っちゃったけど記事にしたいなーってやつは記事にしようかなと。</p>
      <p>あと関係ないけど普通に英語の勉強したいな(マジで関係ない)</p>
      <p>
        技術記事でいうと普通にVibe
        Codingの環境構築したいのでそれ終わったら記事にする予定(多分)
      </p>
      <p>
        個人開発だとiOSアプリで1個良さげなアイデアあるので磨いてから作りたい。
      </p>
      <p>(ポーカーの記事でも書くか...)</p>
    </section>
  );
}
