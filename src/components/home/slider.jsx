import React from "react";
import icons from "./icons.js";
import { motion } from "framer-motion";

function Slider() {
	return (
		<section className="relative w-[35rem] overflow-hidden">
			{/* Left gradient */}
			<div className="absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
			{/* Right gradient */}
			<div className="absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
			<div className="flex gap-5 w-full">
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="flex flex-shrink-0 items-center justify-center gap-5 py-4"
				>
					{icons.map((icon) => {
						return (
							<div key={icon.id}>
								<img
									src={icon.image}
									alt={icon.title}
									className="p-2 h-12 shadow-sm rounded-sm"
								/>
							</div>
						);
					})}
				</motion.div>
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="flex flex-shrink-0 items-center justify-center gap-5 py-4"
				>
					{icons.map((icon) => {
						return (
							<div key={icon.id}>
								<img
									src={icon.image}
									alt={icon.title}
									className="p-2 h-12 shadow-sm rounded-sm"
								/>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

export default Slider;
