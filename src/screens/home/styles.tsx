import styled from "styled-components";

export const Body = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
`;

export const FirstContent = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 240px;
	padding-right: 240px;

	width: 100%;
`;

export const LeftSidefirstContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 700px;
	gap: 40px;

	span {
		color: #808080;
	}
`;

export const RightSidefirstContent = styled.div``;

export const SecondContent = styled.div`
	padding-left: 240px;
	padding-right: 240px;
	margin-top: 80px;
	margin-bottom: 80px;
	min-height: 120px;
	display: flex;
	gap: 18px;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
export const AboutBar = styled.div`
	width: 4px;
	border-radius: 2px;
	height: 100px;
	background-color: #e93f3f;
`;

export const AboutText = styled.div`
	max-width: 840px;
`;

export const ThirdContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 40px;
	padding-left: 240px;
	padding-right: 240px;
	margin-bottom: 120px;
`;

export const TopThirdContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const BottomThirdContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
`;

export const Projects = styled.div`
	display: flex;
	transform: scale(1.05);
	justify-content: center;
	width: 100%;
	gap: 40px;
	transition: ease-in-out 0.3s;
	transform: scale(1.05);

	.card:hover {
		cursor: pointer;
		transition: ease-in-out 0.3s;
		transform: scale(1.05);
	}
`;

export const CardProject = styled.div`
	width: 522px;
	height: 636px;
	border-radius: 6px;
	background-color: #f6f6f6;
	box-shadow: 6px 6px 20px rgba(0.8, 1, 0.2, 0.1);
`;

export const FourthContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding-left: 240px;
	padding-right: 240px;
	margin-bottom: 120px;
`;

export const FourthContentTop = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-start;
`;

export const SkillsCard = styled.div`
	margin-top: 28px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 120px;

	.vibrate-1:hover {
		cursor: pointer;
		-webkit-animation: vibrate-1 0.3s linear infinite both;
		animation: vibrate-1 0.3s linear infinite both;
	}

	@-webkit-keyframes vibrate-1 {
		0% {
			-webkit-transform: translate(0);
			transform: translate(0);
		}
		20% {
			-webkit-transform: translate(-2px, 2px);
			transform: translate(-2px, 2px);
		}
		40% {
			-webkit-transform: translate(-2px, -2px);
			transform: translate(-2px, -2px);
		}
		60% {
			-webkit-transform: translate(2px, 2px);
			transform: translate(2px, 2px);
		}
		80% {
			-webkit-transform: translate(2px, -2px);
			transform: translate(2px, -2px);
		}
		100% {
			-webkit-transform: translate(0);
			transform: translate(0);
		}
	}
	@keyframes vibrate-1 {
		0% {
			-webkit-transform: translate(0);
			transform: translate(0);
		}
		20% {
			-webkit-transform: translate(-2px, 2px);
			transform: translate(-2px, 2px);
		}
		40% {
			-webkit-transform: translate(-2px, -2px);
			transform: translate(-2px, -2px);
		}
		60% {
			-webkit-transform: translate(2px, 2px);
			transform: translate(2px, 2px);
		}
		80% {
			-webkit-transform: translate(2px, -2px);
			transform: translate(2px, -2px);
		}
		100% {
			-webkit-transform: translate(0);
			transform: translate(0);
		}
	}

	@-webkit-keyframes flip-vertical-right {
		0% {
			-webkit-transform: rotateY(0);
			transform: rotateY(0);
		}
		100% {
			-webkit-transform: rotateY(180deg);
			transform: rotateY(180deg);
		}
	}
	@keyframes flip-vertical-right {
		0% {
			-webkit-transform: rotateY(0);
			transform: rotateY(0);
		}
		100% {
			-webkit-transform: rotateY(180deg);
			transform: rotateY(180deg);
		}
	}
`;

export const FifthContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-left: 240px;
	padding-right: 240px;
	margin-bottom: 120px;
`;

export const LeftSideFifthContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;

	.p3 {
		margin-bottom: 40px;
	}
`;

export const RightSideFifthContent = styled.div``;

export const SixtContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-left: 240px;
	padding-right: 240px;
	margin-bottom: 120px;
`;

export const TopSixtContent = styled.div`
	display: flex;

	gap: 72px;

	img {
		cursor: pointer;
	}
`;

export const MidSixtContent = styled.div`
	display: flex;
	margin-top: 42px;
	gap: 48px;
`;

export const BottomSixtContent = styled.div``;
