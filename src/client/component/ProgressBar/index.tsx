import React, {FC} from 'react';

import * as style from './styles';

interface IProps {
	currentYear: number;
	yearsRangeMin: number;
	yearsRangeMax: number;
}

const Button: FC<IProps> = ({currentYear, yearsRangeMin, yearsRangeMax}) => {
	return (
		<style.ProgressBar type="range" value={currentYear} min={yearsRangeMin} max={yearsRangeMax} readOnly/>
	);
};

export default Button;