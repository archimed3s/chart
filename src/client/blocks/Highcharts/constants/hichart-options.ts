import {Options} from 'highcharts';

export const getChartOptions = (series: any[]): Options => {
	return {
		chart: {
			type: 'column'
		},
		title: {
			text: 'Population chart'
		},
		xAxis: {
			type: 'category',
			labels: {
				rotation: -45,
				style: {
					fontSize: '13px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Population (millions)'
			}
		},
		legend: {
			enabled: false
		},
		tooltip: {
			pointFormat: 'Population <b>{point.y}</b>'
		},
		series: [{
			name: 'Population',
			data: [...series],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y}',
				y: 10,
				style: {
					fontSize: '13px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		}]
	} as Options;
};
