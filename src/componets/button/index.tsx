import { SyncLoader } from "react-spinners";
import { BodyButtom } from "./styles";
import { useNavigate } from "react-router-dom";

interface Iprops {
	text: string;
	color: string;
	textColor: string;
	link?: string;
	loading?: boolean;
}

export function Button(Props: Iprops) {
	const navigate = useNavigate();
	return (
		<BodyButtom
			onClick={() => {
				Props.link && navigate(Props.link);
			}}
			style={{ backgroundColor: Props.color }}
		>
			<p style={{ color: Props.textColor }} className="p2">
				{Props.loading ? <SyncLoader color="#ffffff" /> : Props.text}
			</p>
		</BodyButtom>
	);
}
