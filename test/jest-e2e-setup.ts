import 'dotenv/config';
process.env.NODE_ENV = 'test';

// Mock console.log and console.error to keep E2E test output clean
console.log = jest.fn();
console.error = jest.fn();
