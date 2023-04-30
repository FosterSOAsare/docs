import { ReactNode, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";

type sortTypes = {
	display: string;
	filter: string;
};

type sortPopUpTypes = {
	sortFilter: sortTypes;
	setSortFilter: React.Dispatch<React.SetStateAction<sortTypes>>;
};

const SortPopUp = ({ sortFilter, setSortFilter }: sortPopUpTypes) => {
	const ownerRef = useRef<any>();
	function sortFilterFunc(filter: string) {
		setSortFilter(() => {
			return { display: "none", filter };
		});
	}

	return (
		<div className={`w-[200px] h-auto bg-white absolute top-[100%] -left-[100px]  rounded-[5px] shadow-custom`} ref={ownerRef}>
			<ul className="list-none">
				<li className="text-[14px] mb-[3px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-2" onClick={() => sortFilterFunc("opened")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">{sortFilter.filter === "opened" && <FaCheck className="text-md" />}</div>
					<p className="text-[14px]"> Last opened by anyone</p>
				</li>
				<li className="text-[14px] mb-[3px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-2" onClick={() => sortFilterFunc("modified")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">{sortFilter.filter === "modified" && <FaCheck className="text-md" />}</div>
					<p className="text-[14px]"> Last modified by me</p>
				</li>
				<li className="text-[14px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-2" onClick={() => sortFilterFunc("all-modified")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">{sortFilter.filter === "all-modified" && <FaCheck className="text-md" />}</div>
					<p className="text-[14px]">Last modified</p>
				</li>
				<li className="text-[14px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-2" onClick={() => sortFilterFunc("title")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center">{sortFilter.filter === "title" && <FaCheck className="text-md" />}</div>
					<p>Title</p>
				</li>
			</ul>
		</div>
	);
};

export default SortPopUp;
