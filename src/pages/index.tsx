import React from 'react';
import {NextPage} from 'next';

import HighCharts from '../client/blocks/Highcharts';
import {fetchWildPigData} from '../client/services/home';
import {IPigPopulation} from '../client/types/home';

interface IProps {
	pigPopulation: IPigPopulation[]
}

const Home: NextPage<IProps> = ({pigPopulation}) => {
	return (
		<HighCharts pigPopulation={pigPopulation}/>
	);
};

Home.getInitialProps = async () => {
	return await fetchWildPigData();
};

export default Home;
