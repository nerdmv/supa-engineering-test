import getGroupedPeriods from "./src/getGroupedPeriods.mjs";
import getPeriodLength from "./src/getPeriodLength.mjs";
import { logTable } from './util.mjs';
import { spawnSync } from 'child_process';

import JSON5 from 'json5'

const result = spawnSync('python3', ['seed.py']);
const loginTimestamps = JSON5.parse(result.stdout);

populateDisplayTable(getGroupedPeriods(loginTimestamps));

function populateDisplayTable(groupedPeriods = new Set()) {
	const tableData = Array.from(groupedPeriods.values()).sort((periodA, periodB) => {
		const diffA = getPeriodLength(periodA.start, periodA.end);
		const diffB = getPeriodLength(periodB.start, periodB.end) 
		if (diffA === diffB) {
			return periodA.start > periodB.start ? 1 : -1;
		}
		return diffA < diffB ? 1 : -1;
	})

	logTable(tableData);
}


