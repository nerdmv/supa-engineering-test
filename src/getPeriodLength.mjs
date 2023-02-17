export default function getPeriodLength(date1, date2) {
	const diff = (Date.parse(date1) - Date.parse(date2)) / 1000 / 60 / 60 / 24;
	return isNaN(diff) ? 0 : Math.abs(diff) + 1;
}


