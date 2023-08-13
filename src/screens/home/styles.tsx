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
	padding-left: 220px;
	padding-right: 220px;

	width: 100%;
`;

export const LeftSidefirstContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 700px;
	gap: 40px;
`;

export const RightSidefirstContent = styled.div``;

export const SecondContent = styled.div`
	padding-left: 220px;
	padding-right: 220px;
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
	padding-left: 220px;
	padding-right: 220px;
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
`;

export const Projects = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	gap: 40px;
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
	padding-left: 220px;
	padding-right: 220px;
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
`;
