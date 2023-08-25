import {
	BottomCardProject,
	CardProject,
	ContainerTag,
	Tag,
	TopCardProject,
} from "./styles";

interface Props {
	title: string;
	tags: string[];
	description: string;
	image: string;
	color1: string;
	color2: string;
}

export function CardProjects(Props: Props) {
	return (
		<CardProject className="card">
			<TopCardProject color1={Props.color1} color2={Props.color2}>
				<img src={Props.image} alt="" />
			</TopCardProject>
			<BottomCardProject>
				<p className="t2">{Props.title}</p>
				<ContainerTag>
					{Props.tags?.map((element) => {
						return (
							<Tag>
								<p className="t1">{element}</p>
							</Tag>
						);
					})}
				</ContainerTag>
				<p className="p1">{Props.description}</p>
			</BottomCardProject>
		</CardProject>
	);
}
