import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import gmail from "/images/email.png";
import linkedIn from "/images/linkedin.png";
import github from "/images/GitHub.png";
import twitter from "/images/Twitter.png";

const Footer = () => {
	return (
		<footer className="relative flex items-center justify-center">
			<section className="flex flex-col items-center justify-center gap-6 p-10">
				<h3 className="text-size-3xl font-medium">Let's Connect</h3>
				<div className="flex flex-row gap-10">
					<img
						src={gmail}
						alt="Gmail"
						className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
					/>
					<img
						src={linkedIn}
						alt="LinkedIn"
						className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
					/>
					<img
						src={github}
						alt="GitHub"
						className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
					/>
					<img
						src={twitter}
						alt="Twitter"
						className="w-10 h-10 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
					/>
				</div>
				<span className="text-size-xs text-text-accent">
					Created by Serati Vilankulu
				</span>
			</section>
			<button
				className="fixed bottom-8 right-8 shadow-default rounded-full bg-primary p-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out z-50"
				aria-label="Scroll to top"
			>
				<MdOutlineKeyboardDoubleArrowUp className="size-sm" />
			</button>
		</footer>
	);
};

export default Footer;
