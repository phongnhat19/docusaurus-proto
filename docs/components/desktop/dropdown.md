---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

## Overview

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.items|Array&lt;Object&gt;|No|List of items will be displayed on dropdown.|
|options.items[].value|String|Yes|The value of an item.<br>If the value is duplicate, the error will be displayed|
|options.items[].label|String|No|The label of an item.|
|options.items[].isDisabled|Boolean|No|Indicate item will be disabled when display. Default value is false.|
|options.value|String|No|Default selected value. <br> If the 'options.value' is nonexistent value, the error will be displayed|
|options.isDisabled|Boolean|No|The dropdown will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The dropdown will be visible. <br> Default value: 'true'|


<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var dropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        }
    ],
    value: 'Banana'
});
```
</details>

***
以下、藤原さんプロト
***

# Dropdown

## Overview
![Dropdown](../img/dropdown.PNG)

|Number|	Description|
| --- | --- |
|1|	選択中の値を表示するためのフィールド。 |	
|2|	選択肢一覧を表示するためのフィールド。 |
|3| 選択肢一覧の中で、選択中の値を示している。 |	
|4| dropdownの説明欄として使用する。|
|5| 予期せぬ値が入った時のエラーアラートとして使用する。 |
***

## Specification

### Properties

| Name| Type| Default |Required| Description |
| --- | --- | --- | --- | --- |
|items|array<Item>|[]|yes|dropdownの選択肢一覧|
|value|string or null|null|no|dropdownの選択されている値|
|className|string|""|no|dropdownのclass名の追加|
|id|string|""|no|dropdownのid名の追加|
|visible|boolean|true|no|dropdownの表示/非表示|
|disabled|boolean|fales|no|alertの選択/非選択|
|label|Label||no|Componentの説明欄|
|alert|Alert|{}|no|dropdownの各選択肢のテキスト|

### Item
| Name| Type| Default |Required| Description |
| --- | --- | --- | --- | --- |
|label|string|""|yes|dropdownの各選択肢のテキスト|
|value|string|""|no|dropdownの各選択肢の値|

### Alert
| Name| Type| Default |Required| Description |
| --- | --- | --- | --- | --- |
|text|string|""|yes|alertの文言|
|visible|boolean|fales|no|alertの表示/非表示|

### Label
| Name| Type| Default |Required| Description |
| --- | --- | --- | --- | --- |
|text|string|""|yes|labelの文言|
|visible|boolean|fales|no|alertの表示/非表示|
***

## Constructor
### Dropdown(options)
#### Parameters
| Name| Type| Default |Required| Description |
| --- | --- | --- | --- | --- |
|options|object|{}|yes|コンポーネントのプロパティを含むJSONオブジェクト|

***
## Sample Code

全てのパラメータを記載したサンプルコード

### ES5
```javascript
var dropdown = new Dropdown({
  items : [
    { 
      label: 'orange',
      value: 'Orange' 
    },
    { 
      label: 'apple',
      value: 'Apple' 
    },
  ],
  value :  'Orange',
  width : 500px,
  mode : 'recordList',
  className: 'kintone-ui-component-options-class',
  id : 'kintone-ui-component-options-id',
  visible : true,
  disabled : true,
  label : {
    text : 'フルーツ',
    required: true,
    visible: true
  },
  alert : {
    text : 'エラーです',
    visible: true
  },
  onChange: (event) => {} 
});
```
### ES6