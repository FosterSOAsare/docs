import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import closePopup from "../utils/close_popup";

import SharedImage from "@assets/shared.png";
import ActionsPopup from "./ActionsPopup";

type contentCardType = {
	layout: string;
	shared: boolean;
	mainPageTypeImage: string;
};
const ContentCard = ({ layout, shared, mainPageTypeImage }: contentCardType) => {
	const [showPopup, setShowPopup] = useState(false);
	const ActionRef = useRef<any>();
	const [offline, setOffline] = useState(false);
	useEffect(() => {
		closePopup(ActionRef, () => {
			setShowPopup(false);
		});
	}, [closePopup]);
	return (
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
						<div className="w-[30px] h-[30px] hover:bg-search rounded-full flex items-center justify-center" onClick={() => setShowPopup(true)}>
							<BsThreeDotsVertical />
						</div>
						{showPopup && <ActionsPopup setShowPopup={setShowPopup} offline={offline} setOffline={setOffline} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
