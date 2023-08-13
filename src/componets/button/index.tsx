import { BodyButtom } from "./styles";

interface Props {
	text: string;
	color: string;
	textColor: string;
}

export function Button(Props: Props) {
	return (
		<BodyButtom style={{ backgroundColor: Props.color }}>
			<p style={{ color: Props.textColor }} className="p2">
				{Props.text}
			</p>
		</BodyButtom>
	);
}
