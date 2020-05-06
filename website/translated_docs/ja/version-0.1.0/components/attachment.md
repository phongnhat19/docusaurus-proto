---
id: version-0.1.0-attachment
title: Attachment
sidebar_label: Attachment
original_id: attachment
---

## Overview

## Constructor
**Parameter**

| Name                | Type                            | Required | Description                                                                      |
| ------------------- | ------------------------------- | -------- | -------------------------------------------------------------------------------- |
| options             | Object                          | No       | An object contains params of constructor.                                        |
| オプション.DropzoneText  | String                          | No       | 添付ファイルのフィールド上にファイルをドラッグすると、テキストが表示されます。 （項目7）<br>デフォルト値：'ここにファイルをドロップします。' |
| オプション.参照ボタンテキスト     | String                          | No       | 参照ボタンのテキスト。 (アイテム 4)<br>デフォルト値:'参照'                                        |
| オプション.FILELimitText | String                          | No       | ファイル制限警告部分のテキスト。 (項目 5)                                                          |
| オプション.エラーメッセージ      | String                          | No       | エラーメッセージ (項目 6)                                                                  |
| オプション.IsError表示     | Boolean                         | No       | **真の**である場合にのみ、「エラーメッセージ」が表示されます。<br>デフォルト値:false                          |
| オプション.ファイル          | Array&lt;Object&gt; | No       |                                                                                  |
| オプション.ファイル [] .name | String                          | No       | ファイル名                                                                            |
| オプション.ファイル [] サイズ   | String                          | No       | ファイルサイズ                                                                          |
| options.isVisible   | Boolean                         | No       | アタッチメントコンポーネントが表示されます。<br>デフォルト値:true                                      |

<details class="tab-container" open> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

DOM要素

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_render"}

```

### SetFiles (ファイル)
添付ファイルのフィールドを設定します。

**Parameter**

| Name          | Type                            | Required | Description |
| ------------- | ------------------------------- | -------- | ----------- |
| ファイル          | Array&lt;Object&gt; | Yes      |             |
| ファイル [] .name | String                          | No       | ファイル名       |
| ファイル [] .size | String                          | No       | ファイルサイズ     |

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_files"}

```

### ファイル取得 ()
添付フィールドのすべてのファイル情報を取得します。

**Parameter**

None

**Returns**

| Name | Type                            | Description                     |
| ---- | ------------------------------- | ------------------------------- |
| ファイル | Array&lt;Object&gt; | 添付ファイルフィールド内のすべてのファイルオブジェクトのリスト |

<details class="tab-container" open> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_get_files"}

```

### SetDropZoneText (DropZoneText)
ドロップゾーンのテキストを設定する

**Parameter**

| Name         | Type   | Required | Description                             |
| ------------ | ------ | -------- | --------------------------------------- |
| DropZoneText | String | Yes      | 添付ファイルのフィールド上にファイルをドラッグすると、テキストが表示されます。 |

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_dropzone_text"}

```

### SetBrowseButtonText (ブラウズボタンテキスト)
参照ボタンのテキストを設定する

**Parameter**

| Name        | Type   | Required | Description |
| ----------- | ------ | -------- | ----------- |
| ブラウズボタンテキスト | String | Yes      | 参照ボタンのテキスト  |

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_browse_button_text"}

```

### SetFileLimitText (ファイルエリミットテキスト)
ファイル制限警告部分のテキストを設定します。

**Parameter**

| Name              | Type   | Required | Description     |
| ----------------- | ------ | -------- | --------------- |
| \[ファイル\] \[テキスト\] | String | Yes      | ファイル制限警告部分のテキスト |

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_file_limit_text"}

```

### seメッセージ (エラーメッセージ)
エラーメッセージを設定します。

**Parameter**

| Name     | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| エラーメッセージ | String | Yes      | エラーメッセージ    |

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_set_error_message_text"}

```

### ShowError ()
エラーメッセージを表示する

**Parameter**

None

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_show_error"}

```

### HideError ()
エラーメッセージを非表示にする

**Parameter**

None

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_hide_error"}

```

### on (イベント名、コールバック)
変更イベントのコールバックを登録する

**Parameter**

| Name     | Type     | Required | Description                       |
| -------- | -------- | -------- | --------------------------------- |
| イベント名    | String   | Yes      | イベントの名前: <ul><li>'ファイル追加'</li><li>'ファイル削除'</li></ul> |
| コールバックです | Function | Yes      | コールバックです                          |

**Returns**

コールバックデータ

| イベント            | Name | Type                            | Description                                     |
| --------------- | ---- | ------------------------------- | ----------------------------------------------- |
| \[ファイル\] \[追加\] | ファイル | Array&lt;Object&gt; | ファイルの追加後に添付ファイルフィールドに表示されるすべてのファイルオブジェクトのリスト。   |
| \[ファイル\] \[削除\] | ファイル | Array&lt;Object&gt; | ファイルを削除した後に添付ファイルフィールドに表示されるすべてのファイルオブジェクトのリスト。 |

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_on"}

```

### ショー（）
アタッチメントコンポーネントを表示します。

**Parameter**

None

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_show"}

```

### hide ()
アタッチメントコンポーネントを非表示にします。

**Parameter**

None

**Returns**

None

<details class="tab-container"> <Summary>View source</Summary>

**Javascript**
```javascript

```
</details>

```KUCComponentRenderer {"id":"attachment_hide"}

```