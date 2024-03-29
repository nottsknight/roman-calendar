import {getRomanNumeral} from './roman-numerals';

function nonesDate(month: number): number {
  switch (month) {
    case 2:
    case 4:
    case 6:
    case 9:
      return 7;
    default:
      return 5;
  }
}

function monthLength(month: number, leapYear: boolean): number {
  switch (month) {
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    case 1:
      return leapYear ? 29 : 28;
    default:
      return 31;
  }
}

function numberName(num: number, long: boolean): string | null {
  switch (num) {
    case 2:
      return long ? 'Pridie' : 'Prid.';
    case 3:
      return long ? 'ante diem tertium' : 'a.d. III';
    case 4:
      return long ? 'ante diem quartum' : 'a.d. IV';
    case 5:
      return long ? 'ante diem quintum' : 'a.d. V';
    case 6:
      return long ? 'ante diem sextum' : 'a.d. VI';
    case 7:
      return long ? 'ante diem septimum' : 'a.d. VII';
    case 8:
      return long ? 'ante diem octavum' : 'a.d. VIII';
    case 9:
      return long ? 'ante diem nonum' : 'a.d. IX';
    case 10:
      return long ? 'ante diem decimum' : 'a.d. X';
    case 11:
      return long ? 'ante diem undecimum' : 'a.d. XI';
    case 12:
      return long ? 'ante diem duodecimum' : 'a.d. XII';
    case 13:
      return long ? 'ante diem tertium decimum' : 'a.d. XIII';
    case 14:
      return long ? 'ante diem quartum decimum' : 'a.d. XIV';
    case 15:
      return long ? 'ante diem quintum decimum' : 'a.d. XV';
    case 16:
      return long ? 'ante diem sextum decimum' : 'a.d. XVI';
    case 17:
      return long ? 'ante diem septimum decimum' : 'a.d. XVII';
    case 18:
      return long ? 'ante diem duodevicesimum' : 'a.d. XVIII';
    case 19:
      return long ? 'ante diem undevicesimum' : 'a.d. XIX';
    default:
      return null;
  }
}

function getMonthName(month: number, long: boolean): string | null {
  switch (month) {
    case 0:
      return long ? 'Ianuarii' : 'Ian.';
    case 1:
      return long ? 'Februarii' : 'Feb.';
    case 2:
      return long ? 'Martii' : 'Mar.';
    case 3:
      return long ? 'Aprilis' : 'Apr.';
    case 4:
      return long ? 'Maii' : 'Mai.';
    case 5:
      return long ? 'Iunii' : 'Iun.';
    case 6:
      return long ? 'Iulii' : 'Iul.';
    case 7:
      return long ? 'Augustus' : 'Aug.';
    case 8:
      return long ? 'Septembris' : 'Sep.';
    case 9:
      return long ? 'Octobris' : 'Oct.';
    case 10:
      return long ? 'Novembris' : 'Nov.';
    case 11:
      return long ? 'Decembris' : 'Dec.';
    default:
      return null;
  }
}

/**
 * Extension of the `Date` class to provide date formatting according to
 * the Roman method.
 */
export class RomanDate extends Date {
  /**
   * Construct a new `RomanDate`.
   * @param date a UNIX timestamp, an ISO date string, or an existing `Date` object
   */
  constructor(date?: number | string | Date) {
    if (date) {
      super(date);
    } else {
      super();
    }
  }

  /**
   * Return an abbreviated string representing this date according to the Roman calendar.
   */
  toShortRomanString(): string {
    return this.getRomanDate(false);
  }

  /**
   * Return a full string representing this date according to the Roman calendar.
   */
  toLongRomanString(): string {
    return this.getRomanDate(true);
  }

  private getRomanDate(long = true): string {
    const day = this.getDate();
    const month = this.getMonth();

    const ceYear = this.getFullYear();
    const isLeapYear = ceYear > 0 && ceYear % 4 === 0 && month === 1;
    const auc = ceYear > 1 ? ceYear + 753 : 754 - ceYear;
    const year = getRomanNumeral(auc);

    let monthName = getMonthName(month, long);

    if (day === 1) {
      const kalendsText = long ? 'Kalendis' : 'Kal.';
      return `${kalendsText} ${monthName} ${year}`;
    }

    const nones = nonesDate(month);
    if (day === nones) {
      const nonesText = long ? 'Nonis' : 'Non.';
      return `${nonesText} ${monthName} ${year}`;
    }

    if (day < nones) {
      const diff = nones - day + 1;
      const nonesText = long ? 'Nonas' : 'Non.';
      return `${numberName(diff, long)} ${nonesText} ${monthName} ${year}`;
    }

    const ides = nones + 8;
    if (day === ides) {
      const idesText = long ? 'Idibus' : 'Eid.';
      return `${idesText} ${monthName} ${year}`;
    }

    if (day < ides) {
      const diff = ides - day + 1;
      const idesText = long ? 'Idus' : 'Eid.';
      return `${numberName(diff, long)} ${idesText} ${monthName} ${year}`;
    }

    const lastDay = monthLength(month, isLeapYear);
    const diff = lastDay - day + 2;
    const text = long ? 'Kalendas' : 'Kal.';
    monthName = getMonthName(month + 1, long);

    if (isLeapYear && diff === 7) {
      const num = long ? 'ante diem bis sextum' : 'a.d. bis VI';
      return `${num} ${text} ${monthName} ${year}`;
    }

    const num = diff > 7 ? numberName(diff - 1, long) : numberName(diff, long);
    return `${num} ${text} ${monthName} ${year}`;
  }
}
