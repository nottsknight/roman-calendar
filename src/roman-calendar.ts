import {convert} from 'roman-numeral';

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

function monthLength(month: number): number {
  switch (month) {
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    case 1:
      return 28;
    default:
      return 31;
  }
}

function numberName(num: number, long = true): string | null {
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

function getMonthName(month: number, long = true): string | null {
  switch (month) {
    case 0:
      return long ? 'Ianuarius' : 'Ian.';
    case 1:
      return long ? 'Februarius' : 'Feb.';
    case 2:
      return long ? 'Martius' : 'Mar.';
    case 3:
      return long ? 'Aprilis' : 'Apr.';
    case 4:
      return long ? 'Maius' : 'Mai.';
    case 5:
      return long ? 'Iunius' : 'Iun.';
    case 6:
      return long ? 'Iulius' : 'Iul.';
    case 7:
      return long ? 'Augustus' : 'Aug.';
    case 8:
      return long ? 'September' : 'Sep.';
    case 9:
      return long ? 'October' : 'Oct.';
    case 10:
      return long ? 'November' : 'Nov.';
    case 11:
      return long ? 'December' : 'Dec.';
    default:
      return null;
  }
}

/**
 * Converts a given common era year into the Roman numeral representation of the corresponding AUC year.
 *
 * @param year common era year
 * @returns AUC year in Roman numberals
 */
export function getRomanYear(year: number): string {
  return `${convert(year + 753)}`;
}

function getRomanDate(date: Date, long = true): string {
  const day = date.getDate();
  const month = date.getMonth();
  const monthName = getMonthName(month, long);
  const year = getRomanYear(date.getFullYear());

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

  const lastDay = monthLength(month);
  const diff = lastDay - day + 1;
  const text = long ? 'Kalendas' : 'Kal.';
  return `${numberName(diff, long)} ${text} ${monthName} ${year}`;
}

/**
 * Format the given date into its abbreviated Latin form.
 *
 * @param date date to convert
 * @returns the formatted string
 */
export function getRomanShortDate(date: Date): string {
  return getRomanDate(date, false);
}

/**
 * Format the given date into its full Latin form.
 *
 * @param date date to convert
 * @returns the formatted string
 */
export function getRomanLongDate(date: Date): string {
  return getRomanDate(date, true);
}
