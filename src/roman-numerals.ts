function getHundreds(num: number): string {
  switch (num) {
    case 1:
      return 'C';
    case 2:
      return 'CC';
    case 3:
      return 'CCC';
    case 4:
      return 'CD';
    case 5:
      return 'D';
    case 6:
      return 'DC';
    case 7:
      return 'DCC';
    case 8:
      return 'DCCC';
    case 9:
      return 'CM';
    default:
      return '';
  }
}

function getTens(num: number): string {
  switch (num) {
    case 1:
      return 'X';
    case 2:
      return 'XX';
    case 3:
      return 'XXX';
    case 4:
      return 'XL';
    case 5:
      return 'L';
    case 6:
      return 'LX';
    case 7:
      return 'LXX';
    case 8:
      return 'LXXX';
    case 9:
      return 'XC';
    default:
      return '';
  }
}

function getUnits(num: number): string {
  switch (num) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    default:
      return '';
  }
}

/**
 * Convert the given number into Roman numerals. Only works for values `1 >= num > 4000`.
 *
 * @param num number to convert
 * @returns the Roman numeral or `null` if conversion failed
 */
export function getRomanNumeral(num: number): string | null {
  if (num < 1 || num > 3999) {
    return null;
  }

  const thousandCount = Math.floor(num / 1000);
  const thousands = thousandCount ? 'M'.repeat(thousandCount) : '';
  num = num % 1000;
  const hundredCount = Math.floor(num / 100);
  const hundreds = getHundreds(hundredCount);
  num = num % 100;
  const tensCount = Math.floor(num / 10);
  const tens = getTens(tensCount);
  num = num % 10;
  const units = getUnits(num);
  return `${thousands}${hundreds}${tens}${units}`;
}
