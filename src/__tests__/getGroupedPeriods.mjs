import { describe, expect, test } from '@jest/globals';
import getGroupedPeriods from '../getGroupedPeriods.mjs';

describe('getGroupedPeriods Function', () => {
	test('If arguements empty. It should return new Map()', () => {
		expect(getGroupedPeriods([])).toEqual(new Map());
	});

	const loginTimestamps = [
		'2021-03-13 15:13:05',
		'2021-03-13 23:13:05', // 2

		'2021-03-16 15:13:05',
		'2021-03-16 23:13:05', // 7

		'2021-03-17 07:13:05',
		'2021-03-17 15:13:05',
		'2021-03-17 23:13:05', // 14

		'2021-03-18 07:13:05',
		'2021-03-18 15:13:05', // 7
	];

	test('Each Period must have start, end and length.', () => {
		const loginTimestamps = ['2021-03-13 15:13:05'];
		expect(getGroupedPeriods(loginTimestamps)).toEqual(
			new Map([
				[
					0,
					{
						start: '2021-03-13',
						end: '2021-03-13',
						length: 1,
					},
				],
			])
		);
	});

	test('Length of each period must difference between start and end, including start date', () => {
		const loginTimestamps = ['2021-03-13 15:13:05', '2021-03-14 15:13:05'];
		expect(getGroupedPeriods(loginTimestamps)).toEqual(
			new Map([
				[
					0,
					{
						start: '2021-03-13',
						end: '2021-03-14',
						length: 2,
					},
				],
			])
		);
	});

	test('Should be able to group consecutive dates together.', () => {
		// data as per example
		const exampleData = [
			'2021-03-13 15:13:05',
			'2021-03-13 23:13:05',

			'2021-03-16 15:13:05',
			'2021-03-16 23:13:05',

			'2021-03-17 07:13:05',
			'2021-03-17 15:13:05',
			'2021-03-17 23:13:05',

			'2021-03-18 07:13:05',
			'2021-03-18 15:13:05',
		];
		expect(Array.from(getGroupedPeriods(exampleData).values())).toEqual([
			{
				start: '2021-03-13',
				end: '2021-03-13',
				length: 1,
			},
			{
				start: '2021-03-16',
				end: '2021-03-18',
				length: 3,
			},
		]);
	});
});
