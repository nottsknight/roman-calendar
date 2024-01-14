import {getRomanNumeral} from '../src/roman-numerals';

describe('getRomanNumeral', () => {
  for (const [arabic, roman] of [
    [39, 'XXXIX'],
    [246, 'CCXLVI'],
    [789, 'DCCLXXXIX'],
    [2421, 'MMCDXXI'],
    [160, 'CLX'],
    [207, 'CCVII'],
    [1009, 'MIX'],
    [1066, 'MLXVI'],
    [1776, 'MDCCLXXVI'],
    [1918, 'MCMXVIII'],
    [1944, 'MCMXLIV'],
    [2024, 'MMXXIV'],
  ]) {
    it(`should convert ${arabic}`, () => {
      const num = getRomanNumeral(arabic as number);
      expect(num).toBeTruthy();
      expect(num as string).toBe(roman as string);
    });
  }

  it('should fail to convert 0', () => {
    const num = getRomanNumeral(0);
    expect(num).toBeFalsy();
  });

  it('should fail to convert greater than 4000', () => {
    const num = getRomanNumeral(4000);
    expect(num).toBeFalsy();
  });
});
