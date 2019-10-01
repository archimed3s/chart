import {IPigPopulation} from '../../../types/home';
import {IChartRange} from '../types';

export const formatDataToSeries = (data: IPigPopulation[], currentYear: number | null) => {
	if (!currentYear) {
		// if not provided get the lowest one (from API)
		currentYear = Math.min(
			...data
				.map(({year}) => year)
				.filter((value, index, self) => self.indexOf(value) === index)
		);
	}

	const filteredYears = data.filter(({year}) => year === currentYear);

	return filteredYears.map((val) => ([val.island, val.pigPopulation]));
};

export const getChartYearsRange = (data: IPigPopulation[]): IChartRange => {
	const years = data.map(({year}) => year).filter((value, index, self) => self.indexOf(value) === index);

	return {
		min: Math.min(...years),
		max: Math.max(...years)
	};
};
