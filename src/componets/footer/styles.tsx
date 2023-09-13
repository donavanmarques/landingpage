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

export const ContainerFooter = styled.footer`
	position: relative;
	padding-top: 80px;
	bottom: 0;
	border-top: 2px solid #1817171d;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-height: 400px;
`;

export const ContentFooter = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 240px;
	padding-right: 240px;
	bottom: 0;
	width: 100%;
	height: 100%;

	@media (max-width: 1020px) {
		justify-content: center;
		flex-direction: column-reverse;
		padding-left: 20px;
		padding-right: 20px;
	}
`;

export const LeftSide = styled.div`
	@media (max-width: 1020px) {
		width: 100%;
		margin-top: 22px;
	}
`;

export const RightSide = styled.div`
	display: flex;
	gap: 120px;

	@media (max-width: 1020px) {
		justify-content: space-between;
		width: 100%;
	}
`;

export const Links = styled.div`
	display: flex;
	gap: 16px;
	flex-direction: column;

	.p2:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: 0.25s;
	}
`;
