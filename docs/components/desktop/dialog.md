---
id: dialog
title: Dialog
sidebar_label: Dialog
---

## Overview

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.header|String, DOM, React Element|No|Header of dialog.|
|options.content|String, DOM, React Element|No|Content of dialog.|
|options.footer|String, DOM, React Element|No|Footer of dialog.|
|options.isVisible|Boolean|No|If set to true, Dialog will show up. Otherwise Dialog will hide. Default: true|
|options.showCloseButton|Boolean|No|If set to true, close button in Item-1 will show up. Otherwise close button will hide. Default: true|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: true,
    showCloseButton: true
});
```
</details>