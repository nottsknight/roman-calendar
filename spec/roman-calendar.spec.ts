import {getRomanShortDate} from '../src/roman-calendar';

describe('roman-calendar', () => {
  describe('getRomanShortDate', () => {
    it('should correctly convert Kalends', () => {
      const kalends = getRomanShortDate(new Date('2024-01-01'));
      expect(kalends).toEqual('Kal. Ian. MMDCCLXXVII');
    });

    it('should correctly convert Nones', () => {
      const nones = getRomanShortDate(new Date('2024-01-07'));
      expect(nones).toEqual('Non. Ian. MMDCCLXXVII');
    });

    it('should correctly convert Ides', () => {
      const ides = getRomanShortDate(new Date('2024-01-15'));
      expect(ides).toEqual('Eid. Ian. MMDCCLXXVII');
    });
  });
});
