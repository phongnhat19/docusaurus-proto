---
id: version-0.1.0-multiple-choice
title: MultipleChoice
sidebar_label: MultipleChoice
original_id: multiple-choice
---

## Overview

## Constructor

**Parameter**

| Name                       | Type                            | Required | Description                                                                                                |
| -------------------------- | ------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| options                    | Object                          | No       | The object contains params of constructor.                                                                 |
| options.items              | Array&lt;Object&gt; | No       | List of items which will be displayed on multiple choices.                                                 |
| options.items[].value      | String                          | Yes      | String value of item <br> If the value is duplicate, the error message will be displayed             |
| options.items[].label      | String                          | No       | String label of item                                                                                       |
| options.items[].isDisabled | Boolean                         | No       | Indicate item will be disabled when display. Default value: 'false'.                                       |
| options.value              | Array<String>                   | No       | List of checked item.<br> If the 'options.value[]' is nonexistent value, the error will be displayed |
| options.isDisabled         | Boolean                         | No       | The multiple choices will be disabled. <br> Default value: 'false'                                   |
| options.isVisible          | Boolean                         | No       | The multiple choices will be visible. <br> Default value: 'true'                                     |

<details class="tab-container" open> <Summary>Sample</Summary>

**Javascript**
```

```
</details>