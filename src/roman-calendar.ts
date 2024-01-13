import { convert } from "roman-numeral";

function nones_date(month: number): number {
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

function month_length(month: number): number {
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

function number_name(num: number, long: boolean = true): string {
  switch (num) {
    case 2:
      return long ? "Pridie" : "Prid.";
    case 3:
      return long ? "ante diem tertium" : "a.d. III";
    case 4:
      return long ? "ante diem quartum" : "a.d. IV";
    case 5:
      return long ? "ante diem quintum" : "a.d. V";
    case 6:
      return long ? "ante diem sextum" : "a.d. VI";
    case 7:
      return long ? "ante diem septimum" : "a.d. VII";
    case 8:
      return long ? "ante diem octavum" : "a.d. VIII";
    case 9:
      return long ? "ante diem nonum" : "a.d. IX";
    case 10:
      return long ? "ante diem decimum" : "a.d. X";
    case 11:
      return long ? "ante diem undecimum" : "a.d. XI";
    case 12:
      return long ? "ante diem duodecimum" : "a.d. XII";
    case 13:
      return long ? "ante diem tertium decimum" : "a.d. XIII";
    case 14:
      return long ? "ante diem quartum decimum" : "a.d. XIV";
    case 15:
      return long ? "ante diem quintum decimum" : "a.d. XV";
    case 16:
      return long ? "ante diem sextum decimum" : "a.d. XVI";
    case 17:
      return long ? "ante diem septimum decimum" : "a.d. XVII";
    case 18:
      return long ? "ante diem duodevicesimum" : "a.d. XVIII";
    case 19:
      return long ? "ante diem undevicesimum" : "a.d. XIX";
    default:
      return "";
  }
}

function month_name(month: number, long: boolean = true): string {
  switch (month) {
    case 0:
      return long ? "Ianuarius" : "Ian.";
    case 1:
      return long ? "Februarius" : "Feb.";
    case 2:
      return long ? "Martius" : "Mar.";
    case 3:
      return long ? "Aprilis" : "Apr.";
    case 4:
      return long ? "Maius" : "Mai.";
    case 5:
      return long ? "Iunius" : "Iun.";
    case 6:
      return long ? "Iulius" : "Iul.";
    case 7:
      return long ? "Augustus" : "Aug.";
    case 8:
      return long ? "September" : "Sep.";
    case 9:
      return long ? "October" : "Oct.";
    case 10:
      return long ? "November" : "Nov.";
    case 11:
      return long ? "December" : "Dec.";
    default:
      return "";
  }
}

export function get_roman_year(year: number): string {
  return `${convert(year + 753)}`;
}

export function get_roman_short_date(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (day === 1) {
    return `Kalendis ${month_name(month, false)} ${get_roman_year(year)}`;
  }

  const nones = nones_date(month);
  if (day === nones) {
    return `Nonis ${month_name(month)} ${get_roman_year(year)}`;
  } else if (day < nones) {
    const diff = nones - day + 1;
    return `${number_name(diff, false)} Non. ${month_name(
      month,
      false,
    )} ${get_roman_year(year)}`;
  }

  const ides = nones + 8;
  if (day === ides) {
    return `Ides ${month_name(month)} ${get_roman_year(year)}`;
  } else if (day < ides) {
    const diff = nones - day + 1;
    return `${number_name(diff, false)} Eid. ${month_name(
      month,
      false,
    )} ${get_roman_year(year)}`;
  }

  const diff = month_length(month) - day + 1;
  return `${number_name(diff, false)} Kal. ${month_name(
    month + 1,
    false,
  )} ${get_roman_year(year)}`;
}

export function get_roman_long_date(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (day === 1) {
    return `Kalendis ${month_name(month)} ${get_roman_year(year)}`;
  }

  const nones = nones_date(month);
  if (day === nones) {
    return `Nonis ${month_name(month)} ${get_roman_year(year)}`;
  } else if (day < nones) {
    const diff = nones - day + 1;
    return `${number_name(diff)} Nonas ${month_name(
      month,
    )} ${get_roman_year(year)}`;
  }

  const ides = nones + 8;
  if (day === ides) {
    return `Ides ${month_name(month)} ${get_roman_year(year)}`;
  } else if (day < ides) {
    const diff = nones - day + 1;
    return `${number_name(diff)} Idus ${month_name(month)} ${get_roman_year(
      year,
    )}`;
  }

  const diff = month_length(month) - day + 1;
  return `${number_name(diff)} Kalendas ${month_name(
    month + 1,
  )} ${get_roman_year(year)}`;
}
