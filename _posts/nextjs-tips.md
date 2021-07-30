---
title: "Next.jsプロジェクトを始めるときに便利なTips"
date: "2021-07-10"
emoji: "💡"
category: "Tips"
---

# Next.js プロジェクトを始める際の Tips を紹介していく

最近調べて便利だと思った Next.js プロジェクトを立ち上げる際の Tips を 3 つ紹介する。

## `create-next-app`を`npm`で行うオプション

急に`create-next-app`でが`yarn`で行われ、`yarn.lock`が生成されるようになった。
そんな時は、以下のようにオプションをつけて`create-next-app`を行う。

```shell
% npx create-next-app prj-name --use-npm
```

これにより、`create-next-app`が、`npm`で実行され、`package-lock.json`が生成される。

## TypeScript で始めるオプション

Next.js × TypeScript でプロジェクトを始めたい時は、`--typescript`オプションをつけると良い。`--ts`でも可。

```shell
% npx create-next-app prj-name --typescript
```

`--typescript`オプションにより、最初から`index.jsx`や`_app.jsx`が、`index.tsx`・`_app.tsx`のように TypeScript に対応した形でプロジェクトを始めることができる。

## `npm run dev`で立ち上がる localhost で任意のポート番号を指定する

いくつかの開発を同時に行なっていると、たまに`Port 3000 is already in use.`と言われることがあるので、ポート番号の指定方法をメモしておく。

プロジェクトの`package.json`の`scripts`を編集する

```diff js:package.json
{
  ...
  "scripts": {
-   "dev": "next",
+   "dev": "next -p 3333",
    ...
  },
  ...
}
```

このように`dev`のバリューを`next -p ポート番号`に書き換えることで任意のポート番号でローカルサーバーを起動することができる。
上記の例だと、`http://localhost:3333/`のローカルサーバーが立ち上がる。
