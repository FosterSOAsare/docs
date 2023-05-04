import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import closePopup from "../utils/close_popup";

import ActionsPopup from "./ActionsPopup";

import { TbUsers } from "react-icons/tb";

type contentCardType = {
	layout: string;
	shared: boolean;
	mainPageTypeImage: string;
	index: number;
	name: string;
};
const ContentCard = ({ layout, shared, mainPageTypeImage, index, name }: contentCardType) => {
	const [showPopup, setShowPopup] = useState(false);
	const ActionRef = useRef<any>();
	const [offline, setOffline] = useState(false);
	const [position, setPosition] = useState({ x: "", y: "" });

	useEffect(() => {
		// Since the useEffect changes on each layout change , there is a need for a cleanup function remove the event listener that was set
		// This cleanup is returned from the closePopup function and then used in the useEffect here
		let cleanupFunc = closePopup(ActionRef, () => {
			setShowPopup(false);
		});
		return cleanupFunc;
	}, [closePopup, layout]);

	function displayActionPopup(e: any) {
		setPosition({ y: window.innerHeight - e.clientY < 200 ? "top" : "bottom", x: window.innerWidth - e.clientX < 200 ? "left" : "right" });
		setShowPopup(true);
	}

	return (
		<>
			{layout === "grid" && (
				<div
					className={`w-full max-w-[350px] mx-auto border-[1px] h-[300px] rounded-[5px]  hover:cursor-pointer ${
						name === "Sheet" ? "hover:border-[#188038]" : name === "Doc" ? "hover:border-[#1a73e8]" : name === "Slide" ? "hover:border-[#f9ab00]" : "hover:border-[#8430ce]"
					} `}>
					<div className="image w-full h-[220px] flex items-center justify-center">
						<p className="opacity-60 text-sm">Thumbnail Here</p>
					</div>
					<div className="w-full  p-2 pt-3 h-[80px] border-t-[1px]">
						<h3>
							{name} {index + 1}
						</h3>
						<div className="w-full flex items-center justify-between">
							<div className="flex justify-start items-center gap-[4px]">
								<div>
									<img src={mainPageTypeImage} alt="" />
								</div>
								{shared && <TbUsers className="text-lg tracking-[10px]" />}

								<p className="opacity-60 text-[12px]">Opened Jun 11,2020 </p>
							</div>
							<div className="relative grid" ref={ActionRef}>
								<div className="w-[30px] h-[30px] hover:bg-search rounded-full flex items-center justify-center" onClick={displayActionPopup}>
									<BsThreeDotsVertical />
								</div>
								{showPopup && <ActionsPopup setShowPopup={setShowPopup} offline={offline} setOffline={setOffline} position={position} />}
							</div>
						</div>
					</div>
				</div>
			)}
			{layout === "list" && (
				<div
					className={`w-full px-4 h-auto rounded-[25px]  hover:cursor-pointer  flex items-center items-between gap-4  ${
						name === "Sheet" ? "hover:bg-[#e6f4ea]" : name === "Doc" ? "hover:bg-[#e8f0fe]" : name === "Slide" ? "hover:bg-[#fef7e0]" : "hover:bg-[#f3e8fd]"
					} list`}>
					<div className="w-[22px] h-[22px] ">
						<img src={mainPageTypeImage} alt="" className="w-full h-full" />
					</div>

					<div className="w-full  px-2 h-[50px] border-b-[1px] flex items-center justify-between py-[2px] list__desc">
						<div className="w-1/2  flex items-center justify-start" id="doc__name">
							<div className="flex gap-[10px] items-center justify-start">
								<h3>Resume</h3>
								{shared && <TbUsers className="text-lg opacity-80" />}
							</div>
						</div>
						<div className="w-1/2 flex items-center justify-between">
							<p className="text-center">me</p>
							<p className="opacity-60 text-[12px]">Jun 11,2020 </p>

							<div className="relative list" ref={ActionRef}>
								<div className="w-[30px] h-[30px] hover:bg-search rounded-full flex items-center justify-center" onClick={displayActionPopup}>
									<BsThreeDotsVertical />
								</div>
								{showPopup && <ActionsPopup setShowPopup={setShowPopup} offline={offline} setOffline={setOffline} position={position} />}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ContentCard;
