import React from "react";
import { Link } from "react-router-dom";
import planFeatures from "../../data/plans.data";
import planFeaturesType from "../../types/planfeatures";
import addedSoftwares from "../../data/add-ons.data";
import AddOnsTypes from "../../types/add-ons.types";

const Plans = ({ name }: { name: string }) => {
	return (
		<section className="my-12 sm:py-8 md:my-24 md:px-10 px-4" id="plans">
			<div className="w-full mx-auto h-full max-w-screen-lg flex items-center justify-center flex-col">
				<h2 className="text-2xl w-[80%] text-center md:text-4xl mb-4">Find the plan that’s right for you</h2>
				<h3 className="text-md w-[80%] text-center md:text-xl font-normal mb-4">Google {name} is a part of Google Workspace</h3>
				<p className="font-medium text-md">Every plan includes</p>
				<article className="h-auto sm:h-[70px]  my-4 flex flex-col sm:flex-row justify-center gap-6">
					<div className="flex justify-center md:gap-6 gap-4">
						{addedSoftwares.map((software: AddOnsTypes, index: number) => {
							if (index <= 6) {
								return (
									<div key={index}>
										<img src={software.image} alt="" className="block mx-auto mb-2" />
										<p className="text-[12px] text-center hidden sm:block">{software.name}</p>
									</div>
								);
							}
						})}
					</div>
					<div className="flex justify-center gap-4 md:gap-6">
						{addedSoftwares.map((software: AddOnsTypes, index: number) => {
							if (index > 6) {
								return (
									<div key={index}>
										<img src={software.image} alt="" className="block mx-auto mb-2" />
										<p className="text-[12px] text-center hidden sm:block">{software.name}</p>
									</div>
								);
							}
						})}
					</div>
				</article>
				<article className="w-full ">
					<section className="w-full h-[270px] flex justify-between  bg-white md:relative sticky top-[65px]">
						<div className="w-[50%] sm:w-[40%] border-border border-r-[1px] h-full flex items-end pb-8 justify-center">
							<a className="block md:hidden text-secondary font-bold hover:underline hover:cursor-pointer">Try Docs for Work</a>
						</div>
						<div className="w-[25%] sm:w-[30%] border-border border-[1px] h-full border-l-0 p-6 flex items-center flex-col justify-end md:justify-center">
							<h3 className=" w-[200px] md:w-auto md:text-center text-sm sm:text-xl block -rotate-90  md:rotate-0 relative bottom-20 md:bottom-6 ">
								{" "}
								For Personal <span className="hidden md:block"> (Free)</span>{" "}
							</h3>

							<Link
								to={`/${name.toLowerCase()}`}
								className="hidden text-secondary md:flex justify-center items-center px-6 font-medium h-12 rounded-[3px] hover:cursor-pointer border-border hover:border-secondary border-[1px]">
								Go to {name}
							</Link>
						</div>
						<div className="w-[25%] sm:w-[30%] border-border border-[1px] h-full border-l-0 p-6 flex items-center flex-col justify-end md:justify-center ">
							<h3 className=" w-[200px] md:w-auto text-sm sm:text-xl block -rotate-90  md:rotate-0 relative bottom-20 md:bottom-6 ">Business Standard</h3>
							<h1 className="hidden md:block text-4xl text-secondary">$12 USD</h1>
							<p className="hidden md:block text-center text-sm text-desc">per user / month, 1 year commitment</p>
							<a className="hidden text-white md:flex justify-center items-center px-6 font-medium h-12 rounded-[3px] bg-secondary mt-6 mb-4 hover:cursor-pointer">Get Started</a>
							<a
								href="https://workspace.google.com/intl/en/pricing.html?utm_source=docsforwork&utm_medium=et&utm_content=seemoreplans&utm_campaign=pricing"
								target="_blank"
								rel="noreffer"
								className="hidden text-secondary font-medium">
								See more plans
							</a>
						</div>
					</section>
					{planFeatures.map((planFeature: planFeaturesType, index: number) => {
						return (
							<article key={index} className="flex justify-between items-center h-28  sm:h-16 border-border border-b-[1px]">
								<div className="w-[50%] sm:w-[40%] h-full border-border border-r-[1px] flex justify-start px-2 items-center">{planFeature.name}</div>
								<div className="w-[25%] sm:w-[30%] h-full border-border border-r-[1px] flex justify-center items-center">
									{typeof planFeature.free === "string" ? (
										<p className="w-[90%] text-xs sm:text-sm text-center font-medium">{planFeature.free}</p>
									) : (
										<planFeature.free size={24} color={planFeature?.free?.name === "HiOutlineCheck" ? "#185ABC" : "#000000"} />
									)}
								</div>
								<div className="w-[25%] sm:w-[30%] h-full border-border border-r-[1px] flex justify-center items-center">
									{typeof planFeature.paid === "string" ? (
										<p className="w-[90%] text-xs sm:text-sm text-center font-medium">{planFeature.paid}</p>
									) : (
										<planFeature.paid color={planFeature?.paid?.name === "HiOutlineCheck" ? "#185ABC" : "#000000"} size={24} />
									)}
								</div>
							</article>
						);
					})}
				</article>
			</div>
		</section>
	);
};

export default Plans;
