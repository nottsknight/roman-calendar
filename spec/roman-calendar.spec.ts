import {getRomanShortDate, getRomanLongDate} from '../src/roman-calendar';

describe('roman-calendar', () => {
  describe('getRomanShortDate', () => {
    it('should correctly convert Kalends', () => {
      const kalends = getRomanShortDate(new Date('2024-01-01'));
      expect(kalends).toEqual('Kal. Ian. MMDCCLXXVII');
    });

    it('should correctly convert Nones', () => {
      const nones = getRomanShortDate(new Date('2024-01-05'));
      expect(nones).toEqual('Non. Ian. MMDCCLXXVII');
    });

    it('should correctly convert Ides', () => {
      const ides = getRomanShortDate(new Date('2024-01-13'));
      expect(ides).toEqual('Eid. Ian. MMDCCLXXVII');
    });
  });

  describe('getRomanLongDate', () => {
    it('should correctly convert Kalends', () => {
      const kalends = getRomanLongDate(new Date('2024-01-01'));
      expect(kalends).toEqual('Kalendis Ianuarii MMDCCLXXVII');
    });

    it('should correctly convert Nones', () => {
      const nones = getRomanLongDate(new Date('2024-01-05'));
      expect(nones).toEqual('Nonis Ianuarii MMDCCLXXVII');
    });

    it('should correctly convert Ides', () => {
      const ides = getRomanLongDate(new Date('2024-01-13'));
      expect(ides).toEqual('Idibus Ianuarii MMDCCLXXVII');
    });
  });
});
