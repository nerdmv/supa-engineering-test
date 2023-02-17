export default function getUniqueDates (dates = []) {
	const uniqueDates = new Set();
	for (const time of dates) {
		if (isNaN(Date.parse(time))) continue;
		uniqueDates.add(time.substring(0, 10));
	}
	return uniqueDates;
}
