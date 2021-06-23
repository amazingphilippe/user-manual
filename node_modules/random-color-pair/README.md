# random-color-pair

![npm](https://img.shields.io/npm/v/random-color-pair) ![GitHub](https://img.shields.io/github/license/benrosen/random-color-pair) ![npm bundle size](https://img.shields.io/bundlephobia/min/random-color-pair) ![Maintenance](https://img.shields.io/maintenance/yes/2021) ![npm](https://img.shields.io/npm/dw/random-color-pair) ![GitHub issues](https://img.shields.io/github/issues-raw/benrosen/random-color-pair) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/benrosen/random-color-pair)

Generate two random colors: one darker and one lighter.

## Quickstart

Install the package:

```
npm i random-color-pair
```

Import the function:

```javascript
const getColorPair = require("random-color-pair");

// OR

import getColorPair from "random-color-pair";
```

Get the colors:

```javascript
const [foreground, background] = getColorPair();
```
