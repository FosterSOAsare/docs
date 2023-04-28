import React, { useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import moreTools from "../../data/side-menu.data";
import pages from "../../data/main-side-menu";
import { stateType } from "../../types/side-menu.types";

import DriveImage from "@assets/drive.svg";

type SideMenuPropsType = {
	slideOut: () => void;
	toggle: stateType;
	headerData: { name: string; image: string };
};

const SideMenu = ({ slideOut, toggle, headerData }: SideMenuPropsType) => {
	// Parent and child are used to be able to check the click's target and close the menu accordingly
	const parentRef = useRef<HTMLDivElement | null>(null) as React.MutableRefObject<HTMLDivElement>;
	const grandParentRef = useRef<HTMLDivElement | null>(null) as React.MutableRefObject<HTMLDivElement>;
	const location = useLocation();

	useEffect(() => {
		grandParentRef.current.addEventListener("click", setToggle);
		function setToggle(e: any) {
			let parent = parentRef.current;
			const node = e.target as Node;
			if (!parent.contains(node)) {
				slideOut();
			}
		}
	}, []);

	useEffect(() => {
		slideOut();
	}, [location]);

	return (
		<aside className={`w-full h-[100vh] bg-[rgba(0,0,0,.4)] fixed z-30 top-0 left-0 ${toggle.show ? "block" : "hidden"}`} ref={grandParentRef}>
			<article className={`w-[90%] max-w-xs bg-white  h-full relative transition-all duration-500 ${toggle.slide === "in" ? "left-0" : "-left-[100%]"} `} ref={parentRef}>
				<div className="gap-3 h-[100%] overflow-auto">
					<header className="w-full h-16  flex justify-between items-center px-8 border-b-[1px] border-border ">
						<a className="flex items-center gap-1 text-[20px] rounded-[5px]" href="/ ">
							<p className="font-medium">Google {headerData?.name}</p>
						</a>
					</header>

					<section className="w-full px-4 pt-8 border-b-[2px] pb-2">
						<nav>
							{pages.map((tool, index) => (
								<NavLink key={index} to={tool.link} className="flex w-full py-2  hover:bg-[#F8F9FA] rounded-[35px] mb-2 justify-start items-center px-4 gap-4 font-medium">
									<img src={tool.image} alt="" />
									<p>{tool.name}</p>
								</NavLink>
							))}
						</nav>
					</section>
					<section className="w-full px-4 pt-4 border-b-[2px] pb-2">
						<nav>
							<div className="flex w-full py-2  hover:bg-[#F8F9FA] rounded-[35px] mb-2 justify-start items-center px-4 gap-4 font-medium">
								<img alt="" />
								<p>Settings</p>
							</div>
							<div className="flex w-full py-2  hover:bg-[#F8F9FA] rounded-[35px] mb-2 justify-start items-center px-4 gap-4 font-medium">
								<img alt="" />
								<p>Help & Feedback</p>
							</div>
						</nav>
					</section>
					<section className="w-full px-4 pt-4 border-b-[2px] pb-2">
						<nav>
							<a href={"https://www.google.com/drive/?hl=en"} className="flex w-full py-2  hover:bg-[#F8F9FA] rounded-[35px] mb-2 justify-start items-center px-4 gap-4 font-medium">
								<img src={DriveImage} alt="" />
								<p>Drive</p>
							</a>
						</nav>
					</section>
					<section className="w-full h-auto px-4 mt-[40px]">
						<ul className=" flex items-center justify-center gap-[20px]">
							<li>
								<a href="https://policies.google.com/privacy?hl=en" className="opacity-70 hover:opacity-100" target="_blank" rel="noreferrer">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="https://policies.google.com/terms?hl=en" className="opacity-70 hover:opacity-100" target="_blank" rel="noreferrer">
									Terms of service{" "}
								</a>
							</li>
						</ul>
					</section>
				</div>
			</article>
		</aside>
	);
};

export default SideMenu;
