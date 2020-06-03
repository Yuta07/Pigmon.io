---
title: Recoilのチュートリアルを触ってみる
date: '2020-06-02'
excerpt: 'Recoil + TypeScriptでチュートリアルをやってみる。'
featuredImage: './recoil-todo.png'
categories: ['Dev']
---

## 🔥 はじめに

本記事を執筆した時点(2020/6/1)での React および Recoil のバージョンです。

```
"react": "^16.13.1",
"recoil": "^0.0.8",
```

## 🔧 Recoil とは

Facebook が発表した React のステート管理ライブラリです。

Redux のようにステートをひとまとめにした巨大な Reducer を作ることなく、コンポーネント間でのステート共有を可能にしています。

## 🧠 atom

書き込み可能なステートを返します。今回は使用する頻度が高そうな 3 つを紹介します。

`atom` の使用の際は以下の 2 つのオプションを定義する必要があります。

- `key`: `atom` を識別するための一意の文字列。アプリケーション全体で一意である必要があります。もし被ってしまった場合、下記のようなランタイムエラーが生じます。

```
TypeError: Cannot destructure property 'error' of 'undefined' as it is undefined.
```

- `default`: `atom` の初期値です。

**1. useRecoilState()**

- 使ってみた感じでは `useState` のような API です。読み取りと書き込みが可能です。

```typescript
// atomを先に定義
const value = atom({
  key: 'input',
  default: '',
});

const [inputValue, setInputValue] = useRecoilState<string>(value);
```

**2. useRecoilValue()**

- 書き込みではなく、読み取りだけの場合は `useRecoilState()` ではなくこちらを使用します。`useRecoilState()` でも動きますが、書き込む必要がないのならこちらを使用した方が良いかと思います。

**3. useSetRecoilState()**

- `atom` への書き込みを行う場合に使用します。特徴として、再レンダリングなしで値の変更を可能とします。

## 🧠 selector

特定のステート(`atom`)を別のステートで返すことができます。オプションとして `key` と `get` 、`set`があります。

`set` は書き込み可能な `selector` ですが、定義で必要なのは `key` と `get` になるようです。

**1. get**

- 下記の例では `get` 関数が `get` を引数にとり、 `todoListFilterState` の値を取得するということになります。

```typescript
// 公式チュートリアルより
// Ref: https://recoiljs.org/docs/basic-tutorial/selectors/

export const todoListFilterState: RecoilState<string> = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListState: RecoilValueReadOnly<never[]> = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter: string = get(todoListFilterState);

    // 中略
  },
});
```

**2. set**

- `set` 関数が `set` と `newValue` を引数にとります。下記の例では、 `tempCelcius` に書き込みが行われたら、 `(newValue * 9) / 5 + 32)` を返すことになります。

```typescript
// 公式ドキュメントより
// Ref: https://recoiljs.org/docs/api-reference/core/selector

const tempFahrenheit = atom({
  key: 'tempFahrenheit',
  default: 32,
});

const tempCelcius = selector({
  key: 'tempCelcius',
  get: ({ get }) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({ set }, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),
});
```

## 📚 チュートリアルを進める

ドキュメントのチュートリアルに沿って進めていきます。

プロジェクトを作成して、 `recoil` をインストールします。

```
npx create-react-app my-app

and

yarn add recoil
```

今回は TypeScript を使用するため、先に型定義ファイルのインストールをします。

2020/6/1 時点で型定義ファイルが追加されているようです。

https://github.com/DefinitelyTyped/DefinitelyTyped/pull/44756

```
yarn add --dev @types/recoil
```

※ 型定義は推論に従って、ざっくりで進めています。そのため、途中 `any` がありますが気にせず進めていただければと思います。

※ ソースコードは所々省いているので、全て見る場合はチュートリアルを見るか・ソースをご覧ください。

- [今回のソースコード：github](https://github.com/Yuta07/recoil-todo)
- [Recoil 　チュートリアル](https://recoiljs.org/docs/basic-tutorial/intro)

---

**1.** Recoil を使用する場合は `RecoilRoot` をトップレベルで定義する必要があります。今回は `App.tsx` に定義して進めます。

```typescript
// App.tsx
// TodoListについては後から作成していきます。

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
```

**2.** TodoList コンポーネントを作成します。ここでのステートは読み込みのみなので、 `useRecoilValue` を使用しています。

```typescript
// TodoList.tsx
export const todoListState: RecoilState<never[]> = atom({
  key: 'todoListState',
  default: [],
});

export const TodoList = () => {
  const todoList = useRecoilValue<Props[]>(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: Props) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
};
```

**3.** TodoList をレンダーするためのコンポーネントを作成します。TodoList を読み込むだけでなく、更新・削除を行うため、 `useRecoilState` を使用しています。

```typescript
// TodoListitem.tsx
export const TodoItem = ({ item }: ItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // 中略

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
```

**4.** Todo を追加するための `atom` の追加と `todoListState` に新しく値を追加するために `useSetRecoilState` を定義します。今回は書き込みのみなので、 `useSetRecoilState` の使用となります。

```typescript
const value: RecoilState<string> = atom({
  key: 'input',
  default: '',
});

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useRecoilState<string>(value);
  const setTodoList: SetterOrUpdater<any> = useSetRecoilState(todoListState);

  //　中略

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
```

**5.** 残りはチュートリアルに従って、`stats` と `filter` ファイルの追加を行います。この 2 ファイルでは `selector` を使用しており、 Redux の `selector` のようにステートを計算して別の値を返しています。

## 🎉 まとめ

使用してみた感触としては非常にシンプルでわかりやすく感じました。特に Redux を使用する際の action 作って、reducer 作ってという作業をする必要がないのはかなり楽じゃないかと思います。トップレベルに記載するのが、 `RecoilRoot` だけというのも良いですね。

個人的には Redux を使用する際の state をひとまとめにする感じが好きなので、当分は Redux ライフを送りたいなと思いました。

## 🤗 Thanks

- [Recoil ドキュメント](https://recoiljs.org/)
- https://blog.uhy.ooo/entry/2020-05-16/recoil-first-impression/
