import React, {FC, useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {IPigPopulation} from '../../types/home';
import Button from '../../component/Button';
import ProgressBar from '../../component/ProgressBar';

import {getChartOptions} from './constants/hichart-options';
import {CHART_INTERVAL} from './constants/chart-interval';
import {formatDataToSeries, getChartYearsRange} from './services';
import * as style from './styles';

interface IProps {
	pigPopulation: IPigPopulation[];
}

const HighCharts: FC<IProps> = ({pigPopulation}) => {
	const {query} = useRouter();
	const passedYear = query.year && Number(query.year);

	const [yearsRange] = useState({
		min: getChartYearsRange(pigPopulation).min,
		max: getChartYearsRange(pigPopulation).max
	});
	const [currentYear, setCurrentYear] = useState(passedYear || yearsRange.min);
	const [options, setOptionsValue] = useState({});
	const [isPaused, setIsPaused] = useState(query.paused !== 'true');

	const chartOptions = formatDataToSeries(pigPopulation, currentYear);

	const onPlay = (): void => {
		setIsPaused(!isPaused);
	};

	const setQueryProps = (paused: boolean, year: number): void => {
		Router.push({
			pathname: '/',
			query: {paused: `${paused}`, year}
		});
	};

	useEffect(() => {
		if (passedYear && (passedYear > yearsRange.max || passedYear < yearsRange.min)) {
			alert('Wrong passed year from query');
			throw new Error('Pass valid data');
		}

		setCurrentYear(passedYear || yearsRange.min);
		setOptionsValue(getChartOptions(chartOptions));
	}, []);

	useEffect(() => {
		let interval: number | undefined;

		if (isPaused) {
			interval = setInterval(() => {
				setCurrentYear((currentYear: number): number => {
					const year = currentYear >= yearsRange.max ? yearsRange.min : currentYear + 1;

					setOptionsValue(getChartOptions(formatDataToSeries(pigPopulation, year)));
					setQueryProps(!isPaused, year);

					return year;
				});

			}, CHART_INTERVAL);
		} else {
			clearInterval(interval);
			setQueryProps(true, currentYear || yearsRange.min);
		}

		return () => clearInterval(interval);
	}, [isPaused]);

	return (
		<>
			<HighchartsReact highcharts={Highcharts} options={options} allowChartUpdate={true}/>
			<style.Wrapper>
				<Button isPaused={isPaused} callBack={onPlay}/>
				<ProgressBar currentYear={currentYear} yearsRangeMin={yearsRange.min} yearsRangeMax={yearsRange.max}/>
				<output>{currentYear}</output>
			</style.Wrapper>
		</>
	);
};

export default HighCharts;
