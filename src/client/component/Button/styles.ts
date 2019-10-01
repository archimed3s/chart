import styled from 'styled-components';

export const Button = styled.button`
	width: 100px;
	height: 30px;
	background: ${({theme}) => theme.buttonBg};
	border: 1px solid ${({theme}) => theme.buttonBd};
	border-radius: 3px;
	font-size: 15px;
	text-align: center;
	cursor: pointer;
`;
