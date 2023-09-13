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

	@media (max-width: 1263px) {
		padding-left: 40px;
		padding-right: 40px;
	}

	@media (max-width: 600px) {
		padding-left: 20px;
		padding-right: 20px;
		margin-bottom: 40px;
	}
`;

export const TitleProjects = styled.div`
	width: 100%;
	display: flex;
	gap: 6px;
	flex-direction: column;
	margin-bottom: 22px;

	@media (max-width: 1263px) {
		margin-bottom: 40px;
		h1 {
			font-size: 60px;
		}

		.p3 {
			font-size: 18px;
		}
	}
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
	transform: scale(1.02);

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
`;
