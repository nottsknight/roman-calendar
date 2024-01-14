import {getRomanShortDate} from '../src/roman-calendar';

describe('roman-calendar', () => {
  describe('getRomanShortDate', () => {
    it('should correctly return the principal days', () => {
      const kalends = getRomanShortDate(new Date('2024-01-01'));
      expect(kalends).toEqual('Kal. Ian. MMXXIV');
      const nones = getRomanShortDate(new Date('2024-01-07'));
      expect(nones).toEqual('Non. Ian. MMXXIV');
      const ides = getRomanShortDate(new Date('2024-01-15'));
      expect(ides).toEqual('Eid. Ian. MMXXIV');
    });
  });
});
