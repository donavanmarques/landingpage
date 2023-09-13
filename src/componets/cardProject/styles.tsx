import styled from "styled-components";

export const CardProject = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	width: 360px;
	min-width: 350px;
	height: fit-content;

	border-radius: 6px;
	background-color: #f6f6f6;
	box-shadow: 6px 6px 20px rgba(0.8, 1, 0.2, 0.1);

	@media (max-width: 900px) {
		width: 300px;
		min-width: 300px;

		.p1 {
			font-size: 14px;
		}
	}
`;

interface TopCardProjectProps {
	color1: string;
	color2: string;
}

export const TopCardProject = styled.div<TopCardProjectProps>`
	border-radius: 6px 6px 0px 0px;
	display: flex;

	justify-content: center;
	align-items: center;
	height: 310px;

	${({ color1, color2 }) => `
    background: linear-gradient(
      to right,
      ${color1},
      ${color2}
    );
  `}

	img {
		width: 240px;
	}

	@media (max-width: 900px) {
		img {
			width: 180px;
		}
	}
`;

export const BottomCardProject = styled.div`
	display: flex;
	flex-direction: column;
	padding: 18px;
	gap: 12px;
	height: fit-content;
	min-height: 230px;
`;

export const ContainerTag = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;

export const Tag = styled.div`
	display: flex;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	background-color: #1a1a1a;
	border-radius: 4px;
	p {
		color: #fafafa;
	}
`;
