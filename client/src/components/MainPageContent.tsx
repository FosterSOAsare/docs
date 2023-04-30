import React, { useState } from "react";

import ContentCard from "./ContentCard";

import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineUnorderedList, AiOutlineSortAscending } from "react-icons/ai";
import { BsGrid3X3 } from "react-icons/bs";
import { CgFolder } from "react-icons/cg";
const MainPageContent = ({ name, mainPageTypeImage }: any) => {
	const [view, setView] = useState("grid");
	return (
		<main className="w-full h-auto min-h-[100vh] pt-[64px]  mx-auto pb-[100px]">
			<div className="doc__controls  sticky top-[64px] z-[3] bg-white py-4 ">
				<div className="flex justify-between items-center w-full max-w-[960px] mx-auto">
					<p className="font-medium">Recent {name}</p>
					<div className="flex justify-between items-center w-2/5">
						<div className="flex gap-2 justify-start items-center hover:bg-search p-2 rounded-[5px] hover:cursor-pointer">
							<p className="text-[14px]">Owned by anyone</p>
							<RiArrowDownSFill />
						</div>
						<div className="controls w-auto gap-2 flex items-center justify-between">
							<div
								onClick={() => {
									setView((prev) => (prev === "list" ? "grid" : "list"));
								}}
								className="bg-transparent p-2 rounded-full hover:bg-search"
								title={`${view === "list" ? "Grid" : "List"} view`}>
								{view === "list" && <BsGrid3X3 />}
								{view === "grid" && <AiOutlineUnorderedList />}
							</div>
							<div className="bg-transparent p-2 rounded-full hover:bg-search" title="Sort options">
								<AiOutlineSortAscending />
							</div>
							<div className="bg-transparent p-2 rounded-full hover:bg-search" title="Open file picker">
								<CgFolder />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-auto  w-full max-w-[960px] mx-auto grid grid-cols-4 gap-8 pt-[20px]">
				{[1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => (
					<ContentCard key={index} layout="grid" shared={(index + 1) % 2 === 0} mainPageTypeImage={mainPageTypeImage} />
				))}
			</div>
		</main>
	);
};

export default MainPageContent;
