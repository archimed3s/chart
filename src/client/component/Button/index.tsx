import React, {FC} from 'react';

import * as style from './styles';

interface IProps {
	isPaused: boolean;
	callBack: () => void;
}

const Button: FC<IProps> = ({isPaused, callBack}) => {
	return (
		<style.Button title="play/pause" onClick={callBack}>
			{!isPaused ? 'Play' : 'Pause'}
		</style.Button>
	);
};

export default Button;
