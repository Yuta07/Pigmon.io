---
title: React / TypeScriptでStorybook環境構築
date: '2020-01-05'
excerpt: 'React + TypeScriptでStorybookの環境構築するための初期手順。'
featuredImage: './reat_storybook_start.png'
categories: ['Dev']
---

## 📚 Storybook とは

Storybook は UI コンポーネントの開発ツールで、アプリ外の環境で開発・設計することが可能です。

デザイナーと開発者の橋渡しの役割を果たすデザイン設計システムであり、組織共通の UI コンポーネントのソースとして活用することができます。

## ✏️ Storybook プロジェクトの作成

今回は React を使用して進めていきます。

TypeScript を使用して、プロジェクトを作成していきます。

```
npx create-react-app my-app --template typescript
```

もしくは

```
yarn create react-app my-app --template typescript
```

以降は yarn を使用して進めます。

プロジェクト直下に移動して、Storybook をインストールします。

```
# Add Storybook:
npx -p @storybook/cli sb init
```

これで Storybook を実行することが出来るようになったはずです。

```
yarn storybook
```

@storybook/react をインストールします。

```
yarn add - D @storybook/react
```

また、react, react-dom, @babel/core, babel-loader が package.json にない場合は、こちらもインストールしておきましょう。

```
yarn add react react-dom --save
yarn add -D babel-loader @babel/core
```

ここまで出来れば、Storybook での初期設定は終了となります。

ここから先は追加設定となりますので、必要のない方は飛ばしてしまって問題ありません。

## 🤔 Addon の追加

以下の Addon を追加します。オプションなので、必須ではありません。

```
yarn add -D @storybook/addon-actions # イベント発火時のデータを表示する
yarn add -D @storybook/addon-a11y # アクセシビリティのため
yarn add -D @storybook/addon-console # ログやエラーを表示する
yarn add -D @storybook/addon-knobs # Storybook UI で動的にインプットを動かす
yarn add -D @storybook/addon-storysource # パネルでソースコードを閲覧する場合に使用
yarn add -D @storybook/addon-viewport # Storybook UI 上で異なるサイズ・レイアウトで表示する
```

アドオンをインストールした場合は、`.storybook/addon.js`に必要に応じて以下を追記します。

```javascript
import '@storybook/addon-actions/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-console';
import '@storybook/addon-knobs/register';
import '@storybook/addon-storysource/register';
import '@storybook/addon-viewport/register';
```

## ⚙ Config ファイルの設定

`.storybook/config.js` ファイルを以下のように書き換えます。

また、components フォルダ内に story を作成するように修正します。

- 参考サイト：[Options Parameter](https://storybook.js.org/docs/configurations/options-parameter/)

```javascript
import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

// jsx => tsx
const req = require.context('../src/components', true, /\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
  options: {
    isFullscreen: false,
    isToolshown: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);

configure(loadStories, module);
```

Storybook のスタイルを追加してみます。今回は、styled-components を使用します。

```
yarn add styled-components
yarn add -D @types/styled-components
```

src フォルダに `src/shared/global.ts` というファイルを作成して、グローバルスタイルを書きます。ファイル名、ファイル場所はお好みで構いません。

```typescript
import { createGlobalStyle, css } from 'styled-components';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  margin: 0.5rem;
  font-size: 1rem;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
```

その後、 `.storybook/config.js` を以下のように変更します。

```javascript
import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { GlobalStyle } from '../src/shared/global';

~~ 中略 ~~

addDecorator(withA11y);

// Add global style
addDecorator(Story => (
  <>
    <GlobalStyle />
    {Story()}
  </>
));

configure(loadStories, module);
```

## 👨‍💻 テスト用コンポーネントを追加

今回は Storybook の React 用チュートリアルに従って、Task コンポーネントを TypeScript で作成します。

- 参考サイト：[Build a simple component](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/)

`src/components/Task` フォルダに、Task.tsx を作成して以下のようにします。

```typescript
import * as React from 'react';

export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};
```

また、Story とするために stories ファイル, Task.stories.tsx を作成します。

```typescript
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Task } from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
```

さらに `src/components/Task` フォルダに index.ts を追加して以下のようにします。

```typescript
export * from './Task';
```

最後に、 `src/components` に index.ts を追加します。

```typescript
export { Task } from './components/Task';
```

ここまで行うと、 `yarn storybook` で Storybook UI 上に Task コンポーネントが表示されるかと思います。

## 🚀 まとめ

簡単な設定のみとなりましたが、Lint や Prettier を追加したり、CI / CD を動かしたりと自分好みに設定を変更することもできます。

また、React 以外でもプロジェクト作成は可能なので、好きな言語で素敵な Storybook ライフを送れると思います。

## 🤗 Thanks

- [Introduction to design systems](https://www.learnstorybook.com/design-systems-for-developers/react/en/introduction/)
- [Storybook for React tutorial](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)
