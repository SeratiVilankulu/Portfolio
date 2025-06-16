import React, { useState } from "react";
import experienceData from "./experienceData.js";
import Modal from "./modals/modal.jsx";

function Experience() {
	const [openModal, setOpenModal] = useState(null);

	// Function to handle popup modal logic
	function openPopupModal(id) {
		setOpenModal(id);
	}

	return (
		<section className="py-45 px-70">
			<div className="flex justify-between gap-40 nowrap">
				<div className="flex flex-col items-start justify-center w-1/2">
					<section>
						<div>
							<h2 className="text-size-lg font-medium mb-6 text-text-primary">
								Core Experience
							</h2>
							<div className="flex flex-col gap-10">
								<span className="text-size-3xl font-semibold text-text-primary">
									Combining passion and transforming ideas into visually
									stunning stories.
								</span>
								<p className="text-md text-text-secondary">
									I approach each project with a burning passion to craft
									something truly remarkable. I specialize in transforming ideas
									into beautifully crafted products.
								</p>
								<button className="flex items-center justify-center shadow-default p-2 rounded-md w-50 h-10 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
									Contact Me
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
										className="bi bi-cursor-fill ml-2"
									>
										<path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
									</svg>
								</button>
							</div>
						</div>
					</section>
				</div>
				<div className="p-8 w-1/2">
					<section>
						<hr className="border-t-[rgb(233,233,233)] border-t border-solid" />
						{experienceData.map((experience) => (
							<div key={experience.id} className="my-8">
								<div className="flex items-center justify-between">
									<h3 className=" text-size-md font-semibold text-center">
										<span className="font-medium">{experience.company}</span>
									</h3>
									<date className="text-[12px] font-medium text-text-secondary">
										( {experience.startDate} - {experience.endDate} )
									</date>
								</div>
								<div className="flex items-end justify-between mt-2">
									<h4 className="text-size-2xl font-medium text-text-primary mt-4">
										{experience.title}
									</h4>
									<span
										className="text-right text-[12px] font-semibold text-text-secondary cursor-pointer"
										onClick={() => openPopupModal(experience.id)}
									>
										view
									</span>
								</div>
								<hr className="my-8 border-t-[rgb(233,233,233)] border-t border-solid" />
								{/* Open modal for this experience when clicked */}
								{openModal === experience.id && (
									<Modal
										openModal={openModal === experience.id}
										onClose={() => setOpenModal(null)}
										experience={experience}
									/>
								)}
							</div>
						))}
					</section>
				</div>
			</div>
		</section>
	);
}

export default Experience;
