---
id: attachment
title: Attachment
sidebar_label: Attachment
---

## 概要

## コンストラクタ
**パラメータ**

| 名前                  | タイプ                            | 必須  | 説明                                                                               |
| ------------------- | ------------------------------ | --- | -------------------------------------------------------------------------------- |
| オプション               | オブジェクト                         | いいえ | オブジェクトには、コンストラクタのパラメータが含まれています。                                                  |
| オプション.DropzoneText  | 文字列                            | いいえ | 添付ファイルのフィールド上にファイルをドラッグすると、テキストが表示されます。 （項目7）<br>デフォルト値：'ここにファイルをドロップします。' |
| オプション.参照ボタンテキスト     | 文字列                            | いいえ | 参照ボタンのテキスト。 (アイテム 4)<br>デフォルト値:'参照'                                        |
| オプション.FILELimitText | 文字列                            | いいえ | ファイル制限警告部分のテキスト。 (項目 5)                                                          |
| オプション.エラーメッセージ      | 文字列                            | いいえ | エラーメッセージ (項目 6)                                                                  |
| オプション.IsError表示     | ブール値                           | いいえ | **真の**である場合にのみ、「エラーメッセージ」が表示されます。<br>デフォルト値:false                          |
| オプション.ファイル          | 配列複写&lt;Object&gt; | いいえ |                                                                                  |
| オプション.ファイル [] .name | 文字列                            | いいえ | ファイル名                                                                            |
| オプション.ファイル [] サイズ   | 文字列                            | いいえ | ファイルサイズ                                                                          |
| オプション.isVisible     | ブール値                           | いいえ | アタッチメントコンポーネントが表示されます。<br>デフォルト値:true                                      |

<details class="tab-container" open> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

## メソッド
### レンダー ()
コンポーネントのdom要素を取得します。

**パラメータ**

無し

**戻り値**

DOM要素

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_render"}

```

### SetFiles (ファイル)
添付ファイルのフィールドを設定します。

**パラメータ**

| 名前            | タイプ                            | 必須  | 説明      |
| ------------- | ------------------------------ | --- | ------- |
| ファイル          | 配列複写&lt;Object&gt; | はい  |         |
| ファイル [] .name | 文字列                            | いいえ | ファイル名   |
| ファイル [] .size | 文字列                            | いいえ | ファイルサイズ |

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_files"}

```

### ファイル取得 ()
添付フィールドのすべてのファイル情報を取得します。

**パラメータ**

無し

**戻り値**

| 名前   | タイプ                            | 説明                              |
| ---- | ------------------------------ | ------------------------------- |
| ファイル | 配列複写&lt;Object&gt; | 添付ファイルフィールド内のすべてのファイルオブジェクトのリスト |

<details class="tab-container" open> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_get_files"}

```

### SetDropZoneText (DropZoneText)
ドロップゾーンのテキストを設定する

**パラメータ**

| 名前           | タイプ | 必須 | 説明                                      |
| ------------ | --- | -- | --------------------------------------- |
| DropZoneText | 文字列 | はい | 添付ファイルのフィールド上にファイルをドラッグすると、テキストが表示されます。 |

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_dropzone_text"}

```

### SetBrowseButtonText (ブラウズボタンテキスト)
参照ボタンのテキストを設定する

**パラメータ**

| 名前          | タイプ | 必須 | 説明         |
| ----------- | --- | -- | ---------- |
| ブラウズボタンテキスト | 文字列 | はい | 参照ボタンのテキスト |

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_browse_button_text"}

```

### SetFileLimitText (ファイルエリミットテキスト)
ファイル制限警告部分のテキストを設定します。

**パラメータ**

| 名前                | タイプ | 必須 | 説明              |
| ----------------- | --- | -- | --------------- |
| \[ファイル\] \[テキスト\] | 文字列 | はい | ファイル制限警告部分のテキスト |

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_file_limit_text"}

```

### seメッセージ (エラーメッセージ)
エラーメッセージを設定します。

**パラメータ**

| 名前       | タイプ | 必須 | 説明       |
| -------- | --- | -- | -------- |
| エラーメッセージ | 文字列 | はい | エラーメッセージ |

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_error_message_text"}

```

### ShowError ()
エラーメッセージを表示する

**パラメータ**

無し

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_show_error"}

```

### HideError ()
エラーメッセージを非表示にする

**パラメータ**

無し

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_hide_error"}

```

### on (イベント名、コールバック)
変更イベントのコールバックを登録する

**パラメータ**

| 名前       | タイプ | 必須 | 説明                                |
| -------- | --- | -- | --------------------------------- |
| イベント名    | 文字列 | はい | イベントの名前: <ul><li>'ファイル追加'</li><li>'ファイル削除'</li></ul> |
| コールバックです | 機能  | はい | コールバックです                          |

**戻り値**

コールバックデータ

| イベント            | 名前   | タイプ                            | 説明                                              |
| --------------- | ---- | ------------------------------ | ----------------------------------------------- |
| \[ファイル\] \[追加\] | ファイル | 配列複写&lt;Object&gt; | ファイルの追加後に添付ファイルフィールドに表示されるすべてのファイルオブジェクトのリスト。   |
| \[ファイル\] \[削除\] | ファイル | 配列複写&lt;Object&gt; | ファイルを削除した後に添付ファイルフィールドに表示されるすべてのファイルオブジェクトのリスト。 |

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_on"}

```

### ショー（）
アタッチメントコンポーネントを表示します。

**パラメータ**

無し

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_show"}

```

### hide ()
アタッチメントコンポーネントを非表示にします。

**パラメータ**

無し

**戻り値**

無し

<details class="tab-container"> <Summary>ソースを表示</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_hide"}

```