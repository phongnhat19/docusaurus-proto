---
id: readable-table
title: ReadableTable
sidebar_label: ReadableTable
---

## Overview

## Constructor

**Parameter**

| Name                       | Type                            | Required | Description                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| options                    | Object                          | Yes      | The object contains the params of constructor.                                                                                                                                                                                             |
| options.actionButtonsShown | Boolean                         | No       | Show the action buttons when this parameter is True. <br>Default: True                                                                                                                                                               |
| options.columns            | Array&lt;Object&gt; | Yes      | The row template.                                                                                                                                                                                                                          |
| options.columns[x].cell    | Function                        | Yes      | Returns cell template object. Cell template object must implement init and update functions <br> - init: to return DOM element for initializing cell's DOM <br> - update: to update DOM of the cell based on the data returned |
| options.columns[x].header  | String                          | Yes      | Header of column.                                                                                                                                                                                                                          |
| options.data               | Array&lt;Object&gt; | Yes      | The value of table. <br> Refer to the [getValue()](#getvalue) and [setValue(value)](#setvaluevalue) for more information                                                                                                             |
| options.defaultRowData     | Object                          | Yes      | The default value of new row.                                                                                                                                                                                                              |
| options.onCellChange       | Callback                        | No       | Handler for cell change event. <br>Return row data object to overwrite default row data object.                                                                                                                                      |
| options.onRowAdd           | Callback                        | No       | Handler for row add event                                                                                                                                                                                                                  |
| options.onRowRemove        | Callback                        | No       | Handler for row remove event                                                                                                                                                                                                               |

<details class="tab-container" open> <Summary>View source</Summary>

**Javascript**
```

```
</details>