import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import closePopup from "../utils/close_popup";

import SharedImage from "@assets/shared.png";
import ActionsPopup from "./ActionsPopup";

type contentCardType = {
	layout: string;
	shared: boolean;
	mainPageTypeImage: string;
	index: number;
};
const ContentCard = ({ layout, shared, mainPageTypeImage, index }: contentCardType) => {
	const [showPopup, setShowPopup] = useState(false);
	const ActionRef = useRef<any>();
	const [offline, setOffline] = useState(false);
	const [position, setPosition] = useState("");
	useEffect(() => {
		closePopup(ActionRef, () => {
			setShowPopup(false);
		});
	}, [closePopup, layout]);

	function displayActionPopup(e: any) {
		setPosition(window.innerHeight - e.clientY < 200 ? "top" : "bottom");
		setShowPopup(true);
	}

	return (
		<>
			{layout === "grid" && (
				<div className="w-full border-[1px] h-[300px] rounded-[5px]  hover:cursor-pointer">
					<div className="image w-full h-[220px] flex items-center justify-center">
						<p className="opacity-60 text-sm">Thumbnail Here</p>
					</div>
					<div className="w-full  p-2 pt-3 h-[80px] border-t-[1px]">
						<h3>Resume</h3>
						<div className="w-full flex items-center justify-between">
							<div className="flex justify-start items-center gap-[4px]">
								<div>
									<img src={mainPageTypeImage} alt="" />
								</div>
								{shared && (
									<div>
										<img src={SharedImage} alt="" />
									</div>
								)}

								<p className="opacity-60 text-[12px]">Opened Jun 11,2020 </p>
							</div>
							<div className="relative" ref={ActionRef}>
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
				<div className="w-full px-4 h-auto rounded-[25px]  hover:cursor-pointer  flex items-center items-between gap-4 hover:bg-[#e8f0fe] list">
					<div className="w-[22px] h-[22px] ">
						<img src={mainPageTypeImage} alt="" className="w-full h-full" />
					</div>

					<div className="w-full  px-2 h-[50px] border-b-[1px] flex items-center justify-between py-[2px] list__desc">
						<div className="w-1/2  flex items-center justify-start" id="doc__name">
							<div className="flex gap-[5px] items-center justify-start">
								<h3>Resume</h3>
								{shared && (
									<div>
										<img src={SharedImage} alt="" />
									</div>
								)}
							</div>
						</div>
						<div className="w-1/2 flex items-center justify-between">
							<p className="text-center">me</p>
							<p className="opacity-60 text-[12px]">Jun 11,2020 </p>

							<div className="relative" ref={ActionRef}>
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
