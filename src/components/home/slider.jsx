import React from "react";
import icons from "./icons.js";

function Slider() {
	return (
		<section>
			<div className="flex items-center justify-center gap-2 py-4">
				{icons.map((icon) => {
					return (
						<div key={icon.id}>
							<img src={icon.image} alt={icon.title} className="px-2" />
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Slider;
