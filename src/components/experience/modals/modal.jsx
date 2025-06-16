import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaCheck } from "react-icons/fa6";

const Modal = ({ openModal, onClose, experience }) => {
	return (
		<Dialog
			as="div"
			className="relative z-10 focus:outline-none"
			open={openModal}
			onClose={onClose}
		>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full max-w-full items-center justify-center p-4 backdrop-blur-md">
					<DialogPanel
						transition
						className={`w-full max-w-3xl rounded-xl p-8 duration-200 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-lg relative ${experience?.background}`}
					>
						<button
							onClick={onClose}
							className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"
							aria-label="Close"
						>
							&times;
						</button>
						<div className="flex flex-row gap-4 items-center justify-center">
							<section>
								<h3 className="text-size-lg font-medium text-text-primary mb-4">
									{experience?.title}
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
							</section>
							<section className="flex flex-col items-center mb-6 gap-4">
								<img
									src={experience?.image}
									alt={experience?.company}
									className="w-full h-full mt-8"
								/>
							</section>
						</div>
						<div>
							<section className="grid grid-cols-2 gap-2 mb-2 w-[32rem]">
								{experience?.skillsButton?.map((item, idex) => (
									<span
										key={idex}
										className={`flex flex-row items-center gap-2 p-2 text-text-secondary text-size-sm w-[14rem] ${experience?.background} rounded-4xl`}
									>
										<FaCheck
											className={`text-primary text-size-sm ${experience?.skillsColor} p-[2px] rounded-lg`}
										/>
										{item.skill}
									</span>
								))}
							</section>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default Modal;
