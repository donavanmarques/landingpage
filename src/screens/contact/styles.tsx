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

export const FirstContent = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	flex-direction: column;
	padding-bottom: 40px;
`;

export const SecondContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const CardEmail = styled.form`
	border: 1px solid #ebebeb;
	margin-top: 60px;
	margin-bottom: 60px;
	display: flex;
	flex-direction: column;
	background-color: #f6f6f6;
	border-radius: 12px;
	box-shadow: 6px 6px 20px rgba(0.8, 1, 0.2, 0.1);
	width: 100%;
	max-width: 1024px;
	height: fit-content;

	span {
		color: red;
		font-size: 10px;
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	justify-content: center;
	padding: 10px 32px;
`;

export const CardTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	border-bottom: 0.5px solid #ebebeb;

	p {
		padding: 18px;
	}
`;

export const CardRow = styled.div`
	display: flex;
	gap: 8px;
	width: 100%;
	padding-bottom: 12px;
	border-bottom: 1px solid #c5c5c5;
	justify-content: flex-start;

	input {
		width: 50%;
		outline: none;
		border: none;
		background-color: #f6f6f6;
	}
`;

export const MessageBox = styled.textarea`
	background-color: #f3f3f3;
	min-height: 200px;
	width: 100%;
	border-radius: 12px;
	resize: none;
	outline: none;
	border: none;
	padding: 24px;
`;

export const ThirdContent = styled.div`
	padding: 40px;
	display: flex;
	gap: 40px;
	justify-content: center;

	.icon {
		transition: ease-in-out 0.3s;
		transform: scale(1.05);
	}

	.icon:hover {
		cursor: pointer;
		transition: ease-in-out 0.2s;
		transform: scale(1.4);
	}
`;

export const SentEmail = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SentEmailRight = styled.div`
	display: flex;
`;

export const SentEmailLeft = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
`;
