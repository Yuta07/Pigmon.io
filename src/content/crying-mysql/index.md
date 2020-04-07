---
title: 'Railsでmysqlがインストールできない'
date: '2020-04-06'
excerpt: 'Railsでmysqlがインストールできない。gem install mysql2でmysql2が利用できない場合には。この記事は2019年3月に書いた記事です。'
featuredImage: './pien.png'
categories: ['Dev']
---

## ✏️ はじめに

この記事は Qiita にて 2019 年 3 月に書いた記事です。内容が古くなっている可能性もあるので、お気をつけください。

1 年ぶりくらいに Rails を触ろうとして DB で MySQL を使いたかったのですが、インストールエラー地獄にはまってしまったので、同じエラーで苦しんでいる方がこの記事をみて解決できればと思います。

## 💻 開発環境

- ruby2.6.1
- rails5.2.2
- os Mojave version 10.14.1

## 🚫 エラー内容

```sh
Fetching mysql2 0.5.2
Installing mysql2 0.5.2 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
​
// 以下中略
​
Gem files will remain installed in /Users/name/myapp/vendor/bundle/ruby/2.6.0/gems/mysql2-0.5.2 for inspection.
Results logged to /Users/name/myapp/vendor/bundle/ruby/2.6.0/extensions/x86_64-darwin-18/2.6.0-static/mysql2-0.5.2/gem_make.out
​
An error occurred while installing mysql2 (0.5.2), and Bundler cannot continue.
Make sure that `gem install mysql2 -v '0.5.2' --source 'https://rubygems.org/'` succeeds before bundling.
​
In Gemfile:
  mysql2
```

## 🤔 原因

他の方の記事や GitHub で調査したところ、openssl が正しく設置されていないことが原因だったようです。

## 👍 解決策

こちらに全てが書いてありました。

https://github.com/brianmario/mysql2/issues/1005

この記事にある通り、魔法のコマンド

```sh
bundle config --local build.mysql2 "--with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include"
bundle install
```

で解決しました。
​

ちなみに openssl をインストールしていない方は先に

```sh
brew install openssl
```

をして下さい。
​
この結果、無事に mysql での開発を進めることができました！
GitHub 万歳！！！
