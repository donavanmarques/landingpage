import styled from "styled-components";

export const GradientDiv = styled.div`
	opacity: 100%;
	position: relative;
	width: 100%;
	height: 100px;
	filter: blur(30px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.4),
		rgba(233, 63, 63, 0.39),
		rgba(255, 183, 0, 0.281),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const GradientDivMid = styled.div`
	opacity: 80%;
	position: relative;
	width: 90%;
	height: 100px;
	filter: blur(30px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.4),
		rgba(233, 63, 63, 0.39),
		rgba(255, 183, 0, 0.281),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const GradientBottom = styled.div`
	opacity: 40%;
	position: relative;
	width: 80%;
	height: 100px;
	filter: blur(30px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.4),
		rgba(233, 63, 63, 0.39),
		rgba(255, 183, 0, 0.281),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const ContainerNav = styled.div`
	position: absolute;
	height: 60px;
	width: 70%;
	background-color: #ffff;
	opacity: 28%;
	border-radius: 12px;
	top: 40px;
`;
