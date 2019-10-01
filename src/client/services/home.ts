import fetch from 'isomorphic-unfetch';

import {URLS} from '../constants/urls';
import {IPigPopulation} from '../types/home';

interface IWildPigData {
	pigPopulation: IPigPopulation[]
}

export const fetchWildPigData = async (): Promise<IWildPigData> => {
	const res = await fetch(URLS.WILD_PIG_DATA);
	const json = await res.json();

	return {
		pigPopulation: json['PIG POPULATIONS']
	};
};
