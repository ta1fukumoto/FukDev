---
title: "Next.jsにTailwind CSSを導入する手順"
date: "2021-07-11"
emoji: "🌬"
category: "Tech"
---

# Next.js に Tailwind CSS を導入する手順

プロジェクトのスタイリングには、Tailwind CSS を使用するので導入していく。

## Tailwind を`npm install`する

まず、Tailwind CSS のパッケージを`npm`でインストールする。

```shell
% npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## 設定ファイルの生成

`tailwind.config.js`と`postcss.config.js`を作成する。`-p`オプションで`postcss.config.js`を同時に生成できる。

```shell
% npx tailwindcss init -p
```

`tailwind.config.js`と`postcss.config.js`ファイルが作成されれば OK。

```js:tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

```js:postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## パージの設定をする

`tailwind.config.js`ファイルの中で、すべてのページとコンポーネントへのパスでパージオプションを設定し、本番ビルドで未使用のスタイルをツリーシェイクできるようにする。（ツリーシェイク=実行されいないコードを削除すること）

```diff js:tailwind.config.js
module.exports = {
- purge: [],
+ purge: [
+   "./src/pages/**/*.{js,ts,jsx,tsx}",
+   "./src/components/**/*.{js,ts,jsx,tsx}",
+   "./src/styles/*.css",
+ ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## Just-in-Time Mode を有効にする

`tailwind.config.js`に`mode: "jit"`を追記し、Just-in-Time Mode を有効にする。

```diff js:tailwind.config.js
module.exports = {
+ mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

## `global.css`で Tailwind をインポートする

`global.css`の冒頭に以下の 3 行を追記する

```css:global.css
+ @tailwind base;
+ @tailwind components;
+ @tailwind utilities;
```
