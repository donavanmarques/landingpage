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
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.596),
		rgba(233, 63, 63, 0.548),
		rgba(255, 183, 0, 0.342),
		rgba(255, 255, 255, 2),
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
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.315),
		rgba(233, 63, 63, 0.507),
		rgba(255, 183, 0, 0.164),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const GradientBottom = styled.div`
	opacity: 40%;
	position: relative;
	width: 80%;
	height: 100px;
	filter: blur(40px);
	background-image: linear-gradient(
		to right,
		#ffffff,
		rgba(248, 248, 248, 2),
		rgba(63, 100, 233, 0.205),
		rgba(233, 63, 63, 0.151),
		rgba(255, 183, 0, 0),
		rgba(255, 255, 255, 2),
		#ffffff
	);
`;

export const ContainerNav = styled.div`
	top: 40px;
	border: 1px solid #ffffff2b;
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width: 60%;
	background-color: #ffffff34;
	border-radius: 12px;

	.bounce-top {
		-webkit-animation: bounce-top 0.9s both;
		animation: bounce-top 0.9s both;
	}

	@-webkit-keyframes bounce-top {
		0% {
			-webkit-transform: translateY(-45px);
			transform: translateY(-45px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 1;
		}
		24% {
			opacity: 1;
		}
		40% {
			-webkit-transform: translateY(-24px);
			transform: translateY(-24px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		65% {
			-webkit-transform: translateY(-12px);
			transform: translateY(-12px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		82% {
			-webkit-transform: translateY(-6px);
			transform: translateY(-6px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		93% {
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		25%,
		55%,
		75%,
		87% {
			-webkit-transform: translateY(0px);
			transform: translateY(0px);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		100% {
			-webkit-transform: translateY(0px);
			transform: translateY(0px);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
			opacity: 1;
		}
	}
	@keyframes bounce-top {
		0% {
			-webkit-transform: translateY(-45px);
			transform: translateY(-45px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 1;
		}
		24% {
			opacity: 1;
		}
		40% {
			-webkit-transform: translateY(-24px);
			transform: translateY(-24px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		65% {
			-webkit-transform: translateY(-12px);
			transform: translateY(-12px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		82% {
			-webkit-transform: translateY(-6px);
			transform: translateY(-6px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		93% {
			-webkit-transform: translateY(-4px);
			transform: translateY(-4px);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		25%,
		55%,
		75%,
		87% {
			-webkit-transform: translateY(0px);
			transform: translateY(0px);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		100% {
			-webkit-transform: translateY(0px);
			transform: translateY(0px);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
			opacity: 1;
		}
	}
`;

export const LeftSide = styled.div`
	padding: 16px 17px;
	display: flex;
	align-items: center;
	gap: 30px;

	.p2:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: 0.25s;
	}
`;

export const RightSide = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 17px;
	gap: 30px;

	.icon:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: 0.25s;
	}
`;
