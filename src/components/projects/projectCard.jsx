import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const ProjectsCard = ({
	title,
	technologies,
	image,
	background,
	textColor,
}) => {
	return (
		<div
			className={`rounded-3xl flex flex-col  px-6 py-8 w-full sm:w-[300px] ${background}`}
		>
			<img src={image} alt={title} className="h-50 object-contain mb-4" />
			<h2 className={`text-xl font-medium ${textColor}`}>{title}</h2>

			<div className={`mt-4 text-sm ${textColor}`}>
				<div className="flex justify-center gap-2 mt-2">
					<RiDoubleQuotesR className="text-[6rem]" />
					<div>
						<p className="font-bold">Tools:</p>
						<p className={`mt-1 ${textColor}`}>{technologies.join(", ")}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsCard;
