import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const Modal = ({ openModal, onClose, experience }) => {
	return (
		<Dialog
			as="div"
			className="relative z-10 focus:outline-none"
			open={openModal}
			onClose={onClose}
		>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 backdrop-blur-md">
					<DialogPanel
						transition
						className={`w-full max-w-2xl rounded-xl p-6 duration-200 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-lg relative ${experience?.background}`}
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
							<h2 className="text-size-xl font-semibold text-text-primary mb-2">
								{experience?.company}
							</h2>
						</div>
						<h3 className="text-size-lg font-semibold text-text-primary mb-4">
							{experience?.title || "Trainee Software Developer"}
						</h3>
						<p className="mb-4">Role and Responsibilities</p>
						<ul className="list-decimal pl-5 mb-2">
							{experience?.content?.map((item, idex) => (
								<li
									key={idex}
									className="py-2 text-text-secondary text-size-sm"
								>
									{item.text}
								</li>
							))}
						</ul>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Modal;
