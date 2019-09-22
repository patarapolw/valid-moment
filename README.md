# valid-moment

Convert standard date string to Date, based on moment.js; and invalidate bad formatting.

<https://stackoverflow.com/questions/7445328/check-if-a-string-is-a-date-value>

## Examples

Valid date strings include,

- ISO date string (from JavaScript, Python and Java)
- Locale string

Invalid date string include,

- Numbers and number strings

## Plans

- Be non-library specific, so that can use no library (Date object only), or with [inmoment](https://github.com/rsp/node-immoment) or [luxon](https://moment.github.io/luxon/).

## Usage

```typescript
import { toDate, toMoment } from "valid-moment";
console.log(toDate(DATE_STRING))  // Returns 'null' if invalid
console.log(toMoment(DATE_STRING))  // Returns 'null' if invalid
```

## Installation

```
npm i valid-moment
```

## Tests

For current testing results, see [/tests/tests.json](/tests/tests.json). The tests are done at GMT+0700.
