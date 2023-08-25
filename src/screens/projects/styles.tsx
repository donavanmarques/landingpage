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
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1900px;
`;

export const TitleProjects = styled.div`
	width: 100%;
	display: flex;
	gap: 6px;
	flex-direction: column;
`;

export const ProjectsDiv = styled.div`
	padding-top: 40px;
	padding-bottom: 60px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	gap: 40px;
	transition: ease-in-out 0.3s;

	.card {
		transition: ease-in-out 0.3s;
		transform: scale(1);
	}

	.card:hover {
		cursor: pointer;
		transition: ease-in-out 0.2s;
		transform: scale(1.02);
	}
`;
