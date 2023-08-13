import { BodyButtom } from "./styles";

interface Props {
	text: string;
	color: string;
}

export function Button(Props: Props) {
	return (
		<BodyButtom style={{ backgroundColor: Props.color }}>
			<p className="p2">{Props.text}</p>
		</BodyButtom>
	);
}
