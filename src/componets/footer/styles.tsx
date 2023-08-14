import styled from "styled-components";

export const GradientDiv = styled.div`
	opacity: 100%;
	position: relative;
	width: 100%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(255, 183, 0, 0.192),
		rgba(236, 181, 41, 0.247),
		rgba(233, 63, 63, 0.548),
		rgba(108, 134, 230, 0.514),
		rgba(63, 100, 233, 0.247),
		#ffffff
	);
`;

export const GradientDivMid = styled.div`
	opacity: 80%;
	position: relative;
	width: 90%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(255, 183, 0, 0.192),
		rgba(236, 181, 41, 0.247),
		rgba(233, 63, 63, 0.548),
		rgba(108, 134, 230, 0.514),
		rgba(63, 100, 233, 0.363),
		#ffffff
	);
`;

export const GradientBottom = styled.div`
	opacity: 40%;
	position: relative;
	width: 60%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(255, 183, 0, 0.192),
		rgba(233, 63, 63, 0.548),
		rgba(63, 100, 233, 0.699),
		#ffffff
	);
`;

export const ContainerFooter = styled.div`
	padding-top: 80px;
	border-top: 2px solid #1817171d;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;
