---
id: version-0.1.0-quick-start
title: Quick Start
sidebar_label: Quick Start
original_id: quick-start
---

## Overview

## dist ファイルの使用

*  次のファイルを添付します 2 から './dist ' [のキントーンUIコンポーネント](https://github.com/kintone/kintone-ui-component/tree/master) のフォルダをキントーンアプリに
```
 。/dist/kintone-ui-component.min.js
 ./dist/kintone-ui-component.min.css
```
* index.js ファイルの作成
```

```
* [のkintoneアプリ設定](https://help.kintone.com/en/k/user/js_customize.html)にindex.jsファイルを添付する

![結果](assets/result.png)

<img alt="結果" src="../../assets/result.png" class="docImage" />

## ウェブパックの使用
**ステップ** 1：コマンドを実行する
```
$ mkdir私のカスタマイズ
$ cd 私のカスタマイズ
$ npmのinit-y
$ npmは、クロスENVバベルプリセットステージ-0 CSSローダースタイルローダーウェブパック-CLIバベルローダー @babel /コア
$ npmをインストールします/ kintone-ui-コンポーネント
$ mk src @kintone
```
**ステップ** 2：src /フォルダにインデックス.jsファイルを追加します。
```
import {Button} from '@kintone/kintone-ui-component/esm/js'
(function () {
  kintone.events.on("app.record.index.show", function () {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    var button = new Button({text: 'Submit', type:'submit'});
    button.on('click', function(){
      alert('This is my customization');
    })
    kintoneSpaceElement.appendChild(button.render());
  });
})();
```
**ステップ** 3: webpack.config.js ファイルをマイカスタマイズ/フォルダに追加する
```
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "my-customization.min": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    watch: env.watch
  }
}
```
**ステップ** 4：Webpackによってbuiddするためのスクリプトをpackage.jsonに追加する
```
「scripts」: {
  「build-webpack」:「cross-env node_env=Production webpack」,
...
}
```
* コマンドを実行して、カスタマイズファイルを構築する
```
$ npmはビルド-ウェブパックを実行します
```
```
結果:
*./dist/my-customization.min.js
```
* [kintoneアプリ設定](https://help.kintone.com/en/k/user/js_customize.html)にmy-customization.min.jsを添付する

![結果](assets/result.png)
