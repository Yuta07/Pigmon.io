---
title: Next.jsでAMP対応
date: '2019-12-15'
excerpt: 'Next.jsアプリケーションでAMP対応してみる'
featuredImage: './AMP_icon.png'
categories: ['Dev']
---

## ⚡️ AMP とは

AMP とはモバイルでのウェブサイト閲覧を高速化することを目的とするオープンソースプロジェクトのことです。

[AMP 公式サイト](https://amp.dev)

AMP キャッシュを利用して、コンテンツを一瞬で表示させることを可能としています。
AMP には便利な UI コンポーネントが用意されているので、それを利用することで AMP Valid なページを作成できます。

## 👨‍💻 Next.js で AMP を使う

Next.js で AMP を対応させるには 2 つの方法があります。

この場合、

### 1. AMP First Page

```javascript
export const config = { amp: true };
```

AMP First ページで作成する場合は上記を追加するだけです。

### 2. Hybrid AMP Page

```javascript
import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };
```

既存のページを AMP 対応させる場合、Hybrid AMP のパターンをとることになると思います。

Hybrid AMP とする場合は、オリジナルのページと AMP のページで作成する必要があるので、同じ UX にするために作る必要があります。

そのため、AMP を想定して AMP First ページを作成していくことをお勧めします。

## 🤔️️ TypeScript で AMP

TypeScript を利用している場合、型が定義されている訳ではないので、使用する AMP コンポーネント用に型定義をする必要があります。

プロジェクトフォルダ直下に `amp.d.ts` ファイルを作成して下記のように定義します。

`amp-img` を使用する場合です。

```typescript
declare namespace JSX {
  interface AmpImg {
    children?: Element;
    alt?: string;
    src?: string;
    width?: string;
    height?: string;
    layout?: string;
  }

  interface IntrinsicElements {
    'amp-img': AmpImg;
  }

  interface IntrinsicElements {
    'amp-timeago': AmpTimeAgo;
  }
}
```

他の AMP コンポーネントを使用する場合でも同様に追加するだけです。

## 🌸 Example

Next.js での簡単な例です。
`Head` 内で AMP を使用するためにスクリプトを読み込みます。

また、AMP コンポーネントを使用する場合はその都度、スクリプトを読み込む必要があります。

```typescript
import Head from 'next/head';

export const config = { amp: true };

const AMPComponent = () => {
  return (
    <div>
      <Head>
        <title>AMP Example</title>
        <script async src="https://cdn.ampproject.org/v0.js" />
      </Head>
      <style jsx>{`
        // スタイルの記述はここに行います
      `}</style>
      <div>
        <amp-img src="" width="" height="" alt="" layout="responsive">
          <noscript>
            <img src="" width="" height="" alt="" />
          </noscript>
        </amp-img>
      </div>
    </div>
  );
};

export default AMPComponent;
```

## 😄 まとめ

AMP は表示の高速化・検索結果のカルーセルなどメリットが多い技術ですが、制約もあって開発が難しいこともあります。

そのため、プロジェクトごとに必要な技術の見極めをしっかりと行って判断をする必要があると思いました。
