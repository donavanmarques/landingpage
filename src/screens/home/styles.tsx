import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

export const Body = styled.div`
	padding-left: 120px;
	padding-right: 120px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1900px;

	@media (max-width: 1263px) {
		padding-left: 40px;
		padding-right: 40px;
	}

	@media (max-width: 600px) {
		padding-left: 20px;
		padding-right: 20px;
	}
`;

export const FirstContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 1263px) {
		h1 {
			font-size: 60px;
		}

		.p3 {
			font-size: 18px;
		}

		img {
			display: none;
		}
	}
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
	margin-top: 80px;
	margin-bottom: 80px;
	min-height: 120px;
	height: 100%;
	display: flex;
	gap: 18px;
	align-items: center;
	justify-content: center;
	width: 100%;

	.jello-horizontal:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: 0.25s;
	}

	.jello-horizontal {
		-webkit-animation: jello-horizontal 1.2s linear 1s 2 both;
		animation: jello-horizontal 1.2s linear 1s 2 both;
	}

	@-webkit-keyframes jello-horizontal {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}
		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}
		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}
		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}
		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}
		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	@keyframes jello-horizontal {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}
		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}
		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}
		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}
		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}
		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	@media (max-width: 900px) {
		gap: 6px;
		.p2 {
			font-size: 14px;
		}
	}
`;

export const AboutBar = styled.div`
	display: flex;
	width: 4px;
	border-radius: 2px;
	height: 80px;
	background-color: #e93f3f;

	@media (max-width: 900px) {
		width: 6px;
	}
`;

export const AboutText = styled.div`
	max-width: 840px;
	color: #808080;
`;

export const ThirdContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 40px;
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
	justify-content: center;
	width: 100%;
	gap: 40px;
	transition: ease-in-out 0.3s;
	transform: scale(1.05);

	.card {
		opacity: 0.9;
		transition: ease-in-out 0.3s;
		transform: scale(1);
	}

	.card:hover {
		transition: ease-in-out 0.2s;
		transform: scale(1.02);
		opacity: 1;
	}

	@media (max-width: 1263px) {
		margin-top: 40px;
		flex-direction: column;
		align-items: center;
	}
`;

export const FourthContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
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

	@media (max-width: 900px) {
		gap: 28px;
		img {
			width: 90px;
		}
	}
`;

export const FifthContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 120px;

	@media (max-width: 1263px) {
		h2 {
			font-size: 36px;
			margin-bottom: 12px;
		}
		.p3 {
			font-size: 18px;
		}
		justify-content: center;
		img {
			display: none;
		}
	}
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
	margin-bottom: 120px;
`;

export const TopSixtContent = styled.div`
	display: flex;

	gap: 72px;

	img {
		cursor: pointer;
	}

	@media (max-width: 600px) {
		gap: 32px;
	}
`;

export const MidSixtContent = styled.div`
	display: flex;
	margin-top: 42px;
	gap: 48px;

	p:hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

export const BottomSixtContent = styled.div``;
