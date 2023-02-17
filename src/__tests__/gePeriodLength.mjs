import {describe, expect, test} from '@jest/globals';
import getPeriodLength from '../getPeriodLength.mjs';


describe('getPeriodLength Function', () => {
	test('If any of the passed dates are invalid. It should return 0', () => {
		expect(getPeriodLength('2023-01-01', 'invalid date')).toBe(0);
		expect(getPeriodLength('invalid', '2023-01-01')).toBe(0);
		expect(getPeriodLength('invalid', 'inalid')).toBe(0);
	})

	test('Same date should return 1', () => {
		expect(getPeriodLength('2023-01-01', '2023-01-01')).toBe(1);
	})

	test('Should return inclusive difference', () => {
		expect(getPeriodLength('2023-01-01', '2023-01-02')).toBe(2);
		expect(getPeriodLength('2023-01-01', '2023-01-03')).toBe(3);
	})

	test('Swaping first and second parameter should return same result', () => {
		expect(getPeriodLength('2023-01-03', '2023-01-01')).toBe(3);
		expect(getPeriodLength('2023-01-01', '2023-01-03')).toBe(3);
	})
})
