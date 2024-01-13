# roman-calendar

JS library for formatting dates according to the Roman calendar,
specifically according to the Imperial calendar after the Julian reforms.

The module exports three functions:
- `getRomanYear` converts a given year BC/AD into a year AUC 
  (_ad urbe conditum_) and formats it in Roman numerals
- `getRomanLongDate` converts a given date into its full Latin form
- `getRomanShortDate` converts a given date into an abbreviated form

## Examples
```typescript
import { get_roman_short_date, get_roman_long_date } from "roman-calendar";

// assuming the current date is 25 January 2000
const short_date = get_roman_short_date(Date());
console.log(short_date); // a.d. VIII Kal. Feb. MMDCCLIII
const long_date = get_roman_long_date(Date());
console.log(long_date); // ante diem octavum Kalendas Februarius MMDCCLIII
```
