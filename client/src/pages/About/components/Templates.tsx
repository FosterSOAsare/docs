import React from "react";
import templateTypes from "../../../types/templates.type";

const Templates = ({ templates, name, link }: { templates: templateTypes[]; name: string; link: string }) => {
	return (
		<section id="templates" className="py-12 md:py-24 sm:py-16 border-border border-b-[1px] px-6">
			<div className="w-full h-full max-w-screen-lg mx-auto flex justify-center items-center flex-col ">
				<h1 className="text-2xl sm:text-4xl mb-4">Get a head start with templates</h1>
				<p className="w-[82%] text-desc text-center text-md sm:text-lg">
					Choose from a variety of dashboards, project trackers, and other professionally-designed templates to kick things off quickly.
				</p>
				<div className="w-full h-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-6 items-center mb-12 mt-8">
					{templates.map((template: templateTypes, index: number) => (
						<div key={index} className="">
							<p className="text-center mb-2 font-medium">{template.name}</p>
							<img src={template.image} alt="" />
						</div>
					))}
				</div>

				<p className="font-medium">
					Visit the{" "}
					<a href={link} target="_blank" rel="noreferrer" className="text-secondary">
						{name} Template Gallery{" "}
					</a>{" "}
					for more.
				</p>
			</div>
		</section>
	);
};

export default Templates;
