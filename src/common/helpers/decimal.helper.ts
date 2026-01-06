import { Decimal } from '@prisma/client/runtime/library';

/**
 * Utility class for precise decimal calculations in financial operations.
 * Uses Decimal.js to avoid floating-point precision errors.
 */
export class DecimalHelper {
  /**
   * Safely converts a value to Decimal
   */
  static toDecimal(value: number | string | Decimal | null | undefined): Decimal {
    if (value === null || value === undefined) {
      return new Decimal(0);
    }
    if (value instanceof Decimal) {
      return value;
    }
    return new Decimal(value);
  }

  /**
   * Adds two decimal values
   */
  static add(a: number | string | Decimal, b: number | string | Decimal): Decimal {
    return this.toDecimal(a).plus(this.toDecimal(b));
  }

  /**
   * Subtracts b from a
   */
  static subtract(a: number | string | Decimal, b: number | string | Decimal): Decimal {
    return this.toDecimal(a).minus(this.toDecimal(b));
  }

  /**
   * Multiplies two decimal values
   */
  static multiply(a: number | string | Decimal, b: number | string | Decimal): Decimal {
    return this.toDecimal(a).times(this.toDecimal(b));
  }

  /**
   * Divides a by b
   */
  static divide(a: number | string | Decimal, b: number | string | Decimal): Decimal {
    const divisor = this.toDecimal(b);
    if (divisor.isZero()) {
      return new Decimal(0);
    }
    return this.toDecimal(a).dividedBy(divisor);
  }

  /**
   * Converts Decimal to number, rounded to 2 decimal places for currency
   */
  static toNumber(value: Decimal | number | string | null | undefined): number {
    const decimal = this.toDecimal(value);
    // Round to 2 decimal places for currency precision
    return decimal.toDecimalPlaces(2).toNumber();
  }

  /**
   * Checks if value is effectively zero (within epsilon)
   */
  static isZero(value: Decimal | number | string | null | undefined): boolean {
    const decimal = this.toDecimal(value);
    return decimal.abs().lessThan(0.01); // Less than 1 cent
  }

  /**
   * Ensures value is not negative zero
   */
  static normalizeZero(value: Decimal | number | string | null | undefined): Decimal {
    const decimal = this.toDecimal(value);
    if (this.isZero(decimal)) {
      return new Decimal(0);
    }
    return decimal;
  }

  /**
   * Sums an array of decimal values
   */
  static sum(values: Array<number | string | Decimal | null | undefined>): Decimal {
    return values.reduce<Decimal>((acc, val) => acc.plus(this.toDecimal(val)), new Decimal(0));
  }

  /**
   * Rounds a decimal value to a specific number of decimal places
   */
  static round(value: number | string | Decimal | null | undefined, precision: number = 2): Decimal {
    return this.toDecimal(value).toDecimalPlaces(precision);
  }

  /**
   * Formats a decimal value as currency (for display purposes)
   */
  static formatCurrency(value: Decimal | number | string | null | undefined, decimals: number = 2): string {
    const decimal = this.toDecimal(value);
    return decimal.toFixed(decimals);
  }
}
