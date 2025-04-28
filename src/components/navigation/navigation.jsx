import React from "react";
import { Link } from "react-scroll";
import moon from "../../public/images/Moon.png";

function navigation() {
	return (
		<nav className="bg-primary p-[40px]">
			<div className="flex items-center justify-between h-8">
				<Link className="text-text-primary text-logo-size text-shadow-lg/20 font-logo-font italic tracking-wider cursor-pointer">
					SV
				</Link>
				<div className="flex items-center gap-26">
					<div className="flex items-center h-full gap-8 text-white font-bold text-lg">
						<Link
							to="#home"
							smooth={true}
							duration={300}
							className="text-text-primary font-regular hover:underline underline-offset-3 cursor-pointer"
						>
							Home
						</Link>
						<Link
							to="#experience"
							smooth={true}
							duration={300}
							className="text-text-primary font-regular hover:underline underline-offset-3 cursor-pointer"
						>
							Experience
						</Link>
						<Link
							to="#project"
							smooth={true}
							duration={300}
							className="text-text-primary font-regular hover:underline underline-offset-3 cursor-pointer"
						>
							Project
						</Link>
						<Link
							to="#contact"
							smooth={true}
							duration={300}
							className="text-text-primary font-regular hover:underline underline-offset-3 cursor-pointer"
						>
							Contact
						</Link>
					</div>
					<div className="shadow-default rounded-full bg-primary p-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
						<img src={moon} alt="Dark mode button" className="size-sm" />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default navigation;
