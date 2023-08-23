import styled from "styled-components";

export const CardProject = styled.div`
	width: 422px;
	height: 522px;
	border-radius: 6px;
	background-color: #f6f6f6;
	box-shadow: 6px 6px 20px rgba(0.8, 1, 0.2, 0.1);

	display: flex;
	flex-direction: column;
`;

interface TopCardProjectProps {
	color1: string;
	color2: string;
}

export const TopCardProject = styled.div<TopCardProjectProps>`
	opacity: 0.9;
	border-radius: 6px 6px 0px 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60%;

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
`;

export const BottomCardProject = styled.div`
	display: flex;
	flex-direction: column;
	/* border-top: 1px solid #627070; */
	padding: 22px;
	gap: 12px;
`;

export const ContainerTag = styled.div`
	display: flex;
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
