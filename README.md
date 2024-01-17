# roman-calendar

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

![Build](https://github.com/nottsknight/roman-calendar/actions/workflows/build-test.yml/badge.svg)

JS library for formatting dates according to the Roman calendar,
specifically according to the Imperial calendar after the Julian reforms.

The module exports a `RomanDate` class which is a subclass of the builtin
`Date`. `RomanDate` provides two methods for date formatting:
- `toShortRomanDate` returns an abbreviated date string
- `toLongRomanDate` returns a fully spelled-out date string

The module also provides a script `kalendarium` that will format the provided
ISO date string and print the result to the console. If no argument is given
it will format the current date.

## Examples

Using the `kalendarium` script:

```console
$ kalendarium 2000-01-25
a.d. VIII Kal. Feb. MMDCCLIII
ante diem octavum Kalendas Februarius MMDCCLIII
```

Using the library in your own script:

```typescript
import {RomanDate} from 'roman-calendar';

// assuming the current date is 25 January 2000
const date = new RomanDate('2000-01-25');
console.log(date.toShortRomanString()); // a.d. VIII Kal. Feb. MMDCCLIII
console.log(date.toLongRomanString()); // ante diem octavum Kalendas Februarii MMDCCLIII
```
