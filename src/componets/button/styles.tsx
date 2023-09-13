import { styled } from "styled-components";

export const BodyButtom = styled.button`
	border: none;
	outline: none;
	border-radius: 9px;
	width: fit-content;

	p {
		padding: 19px 32px;
	}

	:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: 0.25s;
	}

	@media (max-width: 900px) {
		border-radius: 6px;
		.p2 {
			font-size: 14px;
		}
		p {
			padding: 12px 18px;
		}
	}
`;
