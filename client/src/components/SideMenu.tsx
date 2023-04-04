import React from "react";

import moreTools from "../data/side-menu.data";

import LogoIcon from "@assets/docs.svg";

const SideMenu = () => {
	return (
		<aside className="w-full h-[100vh] bg-[rgba(0,0,0,.4)] fixed z-30 top-0 left-0">
			<article className="w-[30%] bg-white h-full relative">
				<div className="gap-3 h-[74%] overflow-auto">
					<header className="w-full h-16  flex justify-between items-center px-8 border-b-[1px] border-border ">
						<a className="flex items-center gap-1 text-[20px] rounded-[5px]" href="/ ">
							<img src={LogoIcon} alt="" />
							<p className="font-medium">Google Docs</p>
						</a>
					</header>
					<nav className="w-full h-auto mt-8 px-8">
						<a href="" className="block mb-6 font-medium">
							Overview
						</a>
						<a href="" className="block mb-6 font-medium">
							Features
						</a>
						<a href="" className="block mb-6 font-medium">
							Security
						</a>
						<a href="" className="block mb-6 font-medium">
							Pricing
						</a>
					</nav>

					<section className="w-full px-8">
						<h3 className="mb-2">More tools</h3>
						<nav>
							{moreTools.map((tool, index) => (
								<a key={index} href={tool.link} className="flex w-full py-2  hover:bg-[#F8F9FA] rounded-[35px] mb-4 justify-start items-center px-4 gap-4 font-medium">
									<img src={tool.image} alt="" />
									<p>{tool.name}</p>
								</a>
							))}
						</nav>
					</section>
				</div>
				<div className="absolute bottom-0 left-0 bg-white w-full h-auto p-3">
					<a href="" className="block w-full px-4 py-3 mb-2 rounded-[5px] bg-secondary text-white text-center">
						Try Docs for Work
					</a>
					<a href="" className="block w-full px-4 py-3 mb-2 rounded-[5px] border-border border-[1px] hover:border-secondary text-secondary text-center">
						Go to Docs
					</a>
					<a href="" className="block w-full px-4 pt-3 rounded-[5px] text-secondary text-center">
						Sign In
					</a>
				</div>
			</article>
		</aside>
	);
};

export default SideMenu;
