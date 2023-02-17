import { describe, expect, test } from '@jest/globals';
import getUniqueDates from '../getUniqueDates.mjs';

describe('getUniqueDates Function', () => {
	test('If arguements empty. It should return new Set()', () => {
		expect(getUniqueDates([])).toEqual(new Set());
	});

	test('Must not include time in the result', () => {
		expect(Array.from(getUniqueDates(['2023-01-01 23:30:00']))[0]).toBe(
			'2023-01-01'
		);
	});

	test('Should ignore invalid dates', () => {
		expect(
			getUniqueDates([
				'asdfasdfa',
				'2023-01-01 23:30:00',
				'2023-01-01 23:30:00',
				'asdfasfA,',
				'2023-01-02',
				'sdfasdf',
				'2023-01-03',
				'2023-01-03',
			])
		).toEqual(new Set(['2023-01-01', '2023-01-02', '2023-01-03']));
	});

	// It's a Set bro :/
	test('Should not include same date twice.', () => {
		expect(
			getUniqueDates(['2023-01-01 23:30:00', '2023-01-01 23:30:00'])
		).toEqual(new Set(['2023-01-01']));

		expect(
			getUniqueDates([
				'2023-01-01 23:30:00',
				'2023-01-01 23:30:00',
				'2023-01-02',
				'2023-01-03',
				'2023-01-03',
			])
		).toEqual(new Set(['2023-01-01', '2023-01-02', '2023-01-03']));
	});
});
