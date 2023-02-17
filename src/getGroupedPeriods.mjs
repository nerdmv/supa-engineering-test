import getPeriodLength from "./getPeriodLength.mjs";
import getUniqueDates from "./getUniqueDates.mjs";

export default function getGroupedPeriods (dates = []) {
	const uniqueDates = getUniqueDates(dates);

	let prevDate = null;
	const periods = new Map()
	let period = 0;

	for (const currDate of uniqueDates) {
		if (prevDate === null) {
			prevDate = currDate;
			periods.set(period, {
				start: currDate,
				end: currDate,
				length: 1,
			});
			continue;
		}
		const diff = getPeriodLength(prevDate, currDate);
		if (diff === 2) {
			const currentPeriod = periods.get(period);
			currentPeriod.end = currDate;
			currentPeriod.length = getPeriodLength(currentPeriod.start, currDate);
		} else {
			periods.set(++period, {
				start: currDate,
				end: currDate,
				length: 1
			})
		}

		prevDate = currDate;
	}

	return periods;
}
