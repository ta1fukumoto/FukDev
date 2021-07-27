---
title: "Next/Imageに出現する謎の余白を撃退する"
date: "2021-07-13"
emoji: "🌁"
category: "Tips"
---

Next.js で使える`Image`コンポーネントは、画像の最適化を自動でやってくれるし便利です。

ですが、画像の下に謎に余白がつくんですよね。
大体の場合は気にならないことの方が多いのですが、たまに余白が邪魔なときがあります。（画像自体に影をつけたり、背景を塗ったりするとき）

これを撃退したいと思います。

# 謎の余白の撃退法

画像の周りをグラデーションで囲いたいなと思い、以下のようなコードを書きました。（スタイリングには Tailwind を使用しています。）

```tsx
<div className="flex justify-start items-center space-x-5 mb-4">
  <div className="p-0.5 rounded-full bg-gradient-to-br from-primary to-secondary">
    <Image className="rounded-full" src={profile.img} width={60} height={60} />
  </div>
  <h2 className="text-base md:text-xl font-bold">{profile.name}</h2>
</div>
```

![](/posts/next-image-tips/next-image-tips-1.png)

どこにも`margin`や`padding`が設定されていませんが、なぜか画像の下に余白が生じています！

調べてみてもどこにも余白を設定する CSS は書かれていないんですよね。（知っている方いたら教えていただきたいです。）
どうやら`10px`の余白がついているようです。

どうしようかなと思ったのですが、ひとまず`Image`コンポーネントを`div`タグで囲い、その`div`タグにネガティブマージンを作ります。

```tsx
<div className="flex justify-start items-center space-x-5 mb-4">
  <div className="p-0.5 rounded-full bg-gradient-to-br from-primary to-secondary">
    <div className="-mb-2.5">
      <Image className="rounded-full" src={profile.img} width={60} height={60} />
    </div>
  </div>
  <h2 className="text-base md:text-xl font-bold">{profile.name}</h2>
</div>
```

![](/posts/next-image-tips/next-image-tips-2.png)

余白が消え、綺麗にグラデーションの囲いがついています！
今のところこれで解決しているのですが、誰か根本的な解決法を知っている方がいらっしゃったら教えていただきたいです。
