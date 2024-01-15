# roman-calendar

JS library for formatting dates according to the Roman calendar,
specifically according to the Imperial calendar after the Julian reforms.

The module exports three functions:

- `getRomanYear` converts a given year BC/AD into a year AUC
  (_ab urbe condita_) and formats it in Roman numerals
  - the city of Rome is traditionally said to have been founded in 753 BC
    so `getRomanYear` returns the given year plus 753
- `getRomanLongDate` converts a given date into its full Latin form
- `getRomanShortDate` converts a given date into an abbreviated form

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
