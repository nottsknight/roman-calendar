import {RomanDate} from '../src/roman-calendar';

describe('RomanCalendar', () => {
  it('can be constructed with timestamp', () => {
    const d = new RomanDate(0);
    expect(d).toBeTruthy();
  });

  it('can be constructed with a time string', () => {
    const d = new RomanDate('1970-01-01');
    expect(d).toBeTruthy();
  });

  it('can be constructed with another Date', () => {
    const d0 = new Date('1970-01-01');
    const d = new RomanDate(d0);
    expect(d).toBeTruthy();
  });

  it('produces a correct short date string', () => {
    const d = new RomanDate('2024-03-03');
    expect(d.toShortRomanString()).toEqual('a.d. V Non. Mar. MMDCCLXXVII');
  });

  it('produces a correct long date string', () => {
    const d = new RomanDate('2024-03-03');
    expect(d.toLongRomanString()).toEqual(
      'ante diem quintum Nonas Martii MMDCCLXXVII'
    );
  });

  it('correctly inserts intercalary day in leap years', () => {
    const d = new RomanDate('2024-02-23');
    expect(d.toShortRomanString()).toEqual('a.d. bis VI Kal. Mar. MMDCCLXXVII');
    d.setDate(22);
    expect(d.toShortRomanString()).toEqual('a.d. VII Kal. Mar. MMDCCLXXVII');
    d.setDate(24);
    expect(d.toShortRomanString()).toEqual('a.d. VI Kal. Mar. MMDCCLXXVII');
  });

  it('correctly calculates the length of February', () => {
    const d = new RomanDate('2024-02-29');
    expect(d.toShortRomanString()).toEqual('Prid. Kal. Mar. MMDCCLXXVII');
    d.setDate(28);
    expect(d.toShortRomanString()).toEqual('a.d. III Kal. Mar. MMDCCLXXVII');
    d.setFullYear(2023);
    expect(d.toShortRomanString()).toEqual('Prid. Kal. Mar. MMDCCLXXVII');
  });
});
