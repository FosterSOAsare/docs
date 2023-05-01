import React, { useEffect, useRef, useState } from "react";
import closePopup from "../utils/close_popup";

import ContentCard from "./ContentCard";
import SortPopUp from "./SortPopUp";
import OwnerPopUp from "./OwnerPopUp";

import { RiArrowDownSFill } from "react-icons/ri";
import { AiOutlineUnorderedList, AiOutlineSortAscending } from "react-icons/ai";
import { BsGrid3X3 } from "react-icons/bs";
import { CgFolder } from "react-icons/cg";

const MainPageContent = ({ name, mainPageTypeImage }: any) => {
	const [view, setView] = useState("grid");
	const [ownerFilter, setOwnerFilter] = useState({ display: "none", filter: "anyone" });
	const [sortFilter, setSortFilter] = useState({ display: "none", filter: "opened" });
	const ownerRef = useRef<any>();
	const sortRef = useRef<any>();

	function displayOwnerFilterPopUp() {
		setOwnerFilter((prev) => {
			return { ...prev, display: "block" };
		});
	}
	function displaySortFilterPopUp() {
		setSortFilter((prev) => {
			return { ...prev, display: "block" };
		});
	}

	useEffect(() => {
		closePopup(ownerRef, () => {
			setOwnerFilter((prev) => {
				return { ...prev, display: "none" };
			});
		});
		closePopup(sortRef, () => {
			setSortFilter((prev) => {
				return { ...prev, display: "none" };
			});
		});
	}, [closePopup]);

	return (
		<main className="w-full h-auto min-h-[100vh] pt-[64px]  mx-auto pb-[100px]">
			<div className="doc__controls  sticky top-[64px] z-[3] bg-white py-4 ">
				<div className="flex justify-between items-center w-full max-w-[960px] mx-auto">
					<p className="font-medium">Recent {name}</p>
					<div className={`flex justify-between items-center ${view === "grid" ? "w-2/5" : "w-1/2"}`}>
						<div className="relative" ref={ownerRef}>
							<div className="flex gap-2 p-2 hover:cursor-pointer hover:bg-search rounded-[5px]  justify-start items-center h-full w-full" onClick={displayOwnerFilterPopUp}>
								<p className="text-[14px]">{ownerFilter.filter === "anyone" ? "Owned by anyone" : ownerFilter.filter === "me" ? "Owned by me" : "Not owned by me"}</p>
								<RiArrowDownSFill />
							</div>
							{ownerFilter.display === "block" && <OwnerPopUp ownerFilter={ownerFilter} setOwnerFilter={setOwnerFilter} />}
						</div>
						{/* Setting sort text in list view */}
						{view === "list" && (
							<div>
								{sortFilter.filter === "opened"
									? "Last opened by anyone"
									: sortFilter.filter === "modified"
									? "Last modified by me"
									: sortFilter.filter === "all-modified"
									? "Last modified"
									: "Title"}
							</div>
						)}
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
							<div className="relative" ref={sortRef}>
								<div className="bg-transparent p-2 rounded-full hover:bg-search" title="Sort options" onClick={() => displaySortFilterPopUp()}>
									<AiOutlineSortAscending />
								</div>
								{sortFilter.display === "block" && <SortPopUp sortFilter={sortFilter} setSortFilter={setSortFilter} />}
							</div>
							<div className="bg-transparent p-2 rounded-full hover:bg-search" title="Open file picker">
								<CgFolder />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`h-auto  w-full max-w-[960px] mx-auto  ${view === "grid" ? "grid" : "block"} grid-cols-4 gap-8 pt-[20px]`}>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((e, index) => (
					<ContentCard key={index} layout={view} shared={(index + 1) % 2 === 0} mainPageTypeImage={mainPageTypeImage} index={index} />
				))}
			</div>
		</main>
	);
};

export default MainPageContent;
