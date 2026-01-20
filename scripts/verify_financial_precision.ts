
import { DecimalHelper } from '../src/common/helpers/decimal.helper';
import { Decimal } from '@prisma/client/runtime/library';

async function run() {
  console.log('🧪 Starting DecimalHelper Verification...');

  try {
    // 1. toDecimal
    console.log('Testing toDecimal...');
    const d1 = DecimalHelper.toDecimal(10.5);
    if (d1.toNumber() !== 10.5) throw new Error('toDecimal failed for number');
    
    // 2. Arithmetic
    console.log('Testing Arithmetic...');
    const result_add = DecimalHelper.add(0.1, 0.2);
    // 0.1 + 0.2 = 0.30000000000000004 in number
    if (result_add.toNumber() !== 0.3) throw new Error(`Add failed: ${result_add.toString()} != 0.3`);
    console.log('✅ Add (0.1 + 0.2) = 0.3');

    // 3. Sum
    console.log('Testing Sum...');
    const values = [10, '20', new Decimal(30), null, undefined, 5.5];
    const sum = DecimalHelper.sum(values);
    if (sum.toNumber() !== 65.5) throw new Error(`Sum failed: ${sum.toNumber()} != 65.5`);
    console.log('✅ Sum 65.5');

    // 4. Negative Zero
    console.log('Testing Negative Zero...');
    const negZero = new Decimal(-0);
    const normalized = DecimalHelper.normalizeZero(negZero);
    if (!normalized.isZero() || normalized.toString() !== '0') throw new Error(`Negative zero failed: ${normalized.toString()}`);
    console.log('✅ Negative Zero normalized');

    console.log('🎉 All Manual Checks Passed!');
  } catch (error) {
    console.error('❌ Verification Failed:', error);
    process.exit(1);
  }
}

run();
