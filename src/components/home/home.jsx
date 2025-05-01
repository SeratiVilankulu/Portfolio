import React from "react";
import ProfilePicture from "/images/portfolio_image.png";
import Slider from "./slider.jsx";

function Home() {
	return (
		<main id="home" className="relative top-2">
			<div className="flex flex-col items-center justify-center ">
				<img
					src={ProfilePicture}
					alt="Portfolio image"
					className="py-2 h-[20rem]"
				/>
				<h1 className="text-center text-text-primary font-medium text-size-md">
					Software Developer
				</h1>
				<p className="text-center text-text-secondary font-regular py-4 px-2">
					A driven and detail-oriented individual <br />
					with strong analytical skills and a <br />
					passion for technology.
				</p>
				<Slider />
			</div>
		</main>
	);
}

export default Home;
