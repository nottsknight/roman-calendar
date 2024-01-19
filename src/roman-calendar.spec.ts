import {RomanDate} from './roman-calendar';

describe('RomanCalendar', () => {
  describe('constructor', () => {
    it('works with timestamp', () => {
      const d = new RomanDate(0);
      expect(d).toBeTruthy();
    });

    it('works with a time string', () => {
      const d = new RomanDate('1970-01-01');
      expect(d).toBeTruthy();
    });

    it('works with another Date', () => {
      const d0 = new Date('1970-01-01');
      const d = new RomanDate(d0);
      expect(d).toBeTruthy();
    });
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

  describe('leap year calculation', () => {
    it('correctly labels intercalary leap day', () => {
      const d = new RomanDate('2024-02-24');
      expect(d.toShortRomanString()).toEqual(
        'a.d. bis VI Kal. Mar. MMDCCLXXVII'
      );
    });

    it('correctly labels days either side of intercalary day', () => {
      const d = new RomanDate('2024-02-22');
      expect(d.toShortRomanString()).toEqual('a.d. VIII Kal. Mar. MMDCCLXXVII');
      d.setDate(23);
      expect(d.toShortRomanString()).toEqual('a.d. VII Kal. Mar. MMDCCLXXVII');
      d.setDate(25);
      expect(d.toShortRomanString()).toEqual('a.d. VI Kal. Mar. MMDCCLXXVII');
      d.setDate(26);
      expect(d.toShortRomanString()).toEqual('a.d. V Kal. Mar. MMDCCLXXVII');
    });
  });
});
