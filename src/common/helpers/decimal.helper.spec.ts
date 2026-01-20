import { Test, TestingModule } from '@nestjs/testing';
import { DecimalHelper } from './decimal.helper';
import { Decimal } from '@prisma/client/runtime/library';

describe('DecimalHelper', () => {
  describe('toDecimal', () => {
    it('should handle null/undefined by returning 0', () => {
      expect(DecimalHelper.toDecimal(null).toNumber()).toBe(0);
      expect(DecimalHelper.toDecimal(undefined).toNumber()).toBe(0);
    });

    it('should convert strings and numbers', () => {
      expect(DecimalHelper.toDecimal('10.5').toNumber()).toBe(10.5);
      expect(DecimalHelper.toDecimal(10.5).toNumber()).toBe(10.5);
    });

    it('should preserve existing Decimal instances', () => {
      const d = new Decimal(5);
      expect(DecimalHelper.toDecimal(d)).toBe(d);
    });
  });

  describe('Arithmetic Operations (Precision Checks)', () => {
    it('should add correctly (handling 0.1 + 0.2)', () => {
      // Standard JS: 0.1 + 0.2 = 0.30000000000000004
      const result = DecimalHelper.add(0.1, 0.2);
      expect(result.toNumber()).toBe(0.3);
      expect(result.toString()).toBe('0.3');
    });

    it('should subtract correctly', () => {
      const result = DecimalHelper.subtract(0.3, 0.1);
      expect(result.toNumber()).toBe(0.2);
    });

    it('should multiply correctly', () => {
      const result = DecimalHelper.multiply(0.1, 0.2);
      expect(result.toNumber()).toBe(0.02);
    });

    it('should divide correctly', () => {
      const result = DecimalHelper.divide(0.3, 0.1);
      expect(result.toNumber()).toBe(3);
    });

    it('should handle division by zero safely (return 0)', () => {
      const result = DecimalHelper.divide(100, 0);
      expect(result.toNumber()).toBe(0);
    });
  });

  describe('sum', () => {
    it('should sum an array of mixed types correctly', () => {
      const values = [10, '20', new Decimal(30), null, undefined, 5.5];
      const result = DecimalHelper.sum(values);
      expect(result.toNumber()).toBe(65.5);
    });

    it('should return 0 for empty array', () => {
      expect(DecimalHelper.sum([]).toNumber()).toBe(0);
    });
  });

  describe('normalizeZero (Negative Zero Fix)', () => {
    it('should convert -0 to 0', () => {
      // Simulate a negative zero explicitly if possible, or result of calculation
      const negZero = new Decimal(-0);
      // OR result of 0 * -1
      const calculatedNegZero = new Decimal(0).times(-1);
      
      expect(DecimalHelper.normalizeZero(negZero).isZero()).toBe(true);
      expect(DecimalHelper.normalizeZero(negZero).toString()).toBe('0');
      
      expect(DecimalHelper.normalizeZero(calculatedNegZero).isZero()).toBe(true);
      expect(DecimalHelper.normalizeZero(calculatedNegZero).toString()).toBe('0');
    });

    it('should normalize small negative numbers to 0 (epsilon check)', () => {
      const smallNeg = -0.000001;
      expect(DecimalHelper.normalizeZero(smallNeg).toNumber()).toBe(0);
    });

    it('should keep legitimate negative numbers', () => {
      const realNeg = -5;
      expect(DecimalHelper.normalizeZero(realNeg).toNumber()).toBe(-5);
    });
  });

  describe('formatCurrency', () => {
    it('should format with 2 decimal places', () => {
      expect(DecimalHelper.formatCurrency(10)).toBe('10.00');
      expect(DecimalHelper.formatCurrency(10.5)).toBe('10.50');
      expect(DecimalHelper.formatCurrency(10.555)).toBe('10.56'); // Rounding check
    });
  });
});
