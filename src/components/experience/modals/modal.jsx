import React from "react";

const Modal = ({ onClose, experience }) => {
	return (
		<main className="fixed z-[1] w-screen h-full flex items-center justify-center left-0 top-0 backdrop-blur-md">
			<div
				className={`p-8 rounded-lg shadow-lg w-[36rem] relative ${experience?.background}`}
			>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"
					aria-label="Close"
				>
					&times;
				</button>
				<div className="flex items-end mb-6 gap-4">
					<img
						src={experience?.image}
						alt={experience?.company}
						className="w-18 h-19"
					/>
					<h2 className="text-size-sm font-semibold text-text-primary mb-2">
						{experience?.company}
					</h2>
				</div>
				<h3 className="text-md font-semibold text-text-primary mb-4">
					{experience?.title || "Trainee Software Developer"}
				</h3>
				<p className="mb-4">Role and Responsibilities</p>
				<ul className="list-none pl-5 mb-2">
					{experience?.content?.map((item, idex) => (
            
						<li key={idex} className="py-2">
							{item.text}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default Modal;
