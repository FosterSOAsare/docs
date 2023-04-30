import { FaCheck } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiRename } from "react-icons/bi";
import { TfiNewWindow } from "react-icons/tfi";
import { MdLibraryAddCheck } from "react-icons/md";
import { useState } from "react";

type ownerPopUpTypes = {
	setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
	setOffline: React.Dispatch<React.SetStateAction<boolean>>;
	offline: boolean;
};
const ActionsPopup = ({ setShowPopup, offline, setOffline }: ownerPopUpTypes) => {
	return (
		<div className={`w-[230px] h-auto bg-white absolute top-[120%]  -left-[100px] z-[4]  rounded-[5px] shadow-custom py-2`}>
			<ul className="list-none">
				<li className="text-[14px] mb-[3px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4" onClick={() => setShowPopup(false)}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">
						<BiRename className="text-md" />
					</div>
					<p> Rename</p>
				</li>
				<li className="text-[14px] mb-[3px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4" onClick={() => setShowPopup(false)}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">
						<RiDeleteBinLine className="text-lg" />
					</div>
					<p> Remove</p>
				</li>
				<li className="text-[14px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4" onClick={() => setShowPopup(false)}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center">
						<TfiNewWindow className="text-lg" />
					</div>
					<p> Open in new tab</p>
				</li>
				<li
					className="text-[14px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4"
					onClick={() => {
						setOffline((prev) => !prev);
						setShowPopup(false);
					}}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">
						<MdLibraryAddCheck className="text-lg" />
					</div>
					<div className="flex justify-between items-center w-[85%] h-full">
						<p> Available offline</p>
						<div className={`w-[40px] h-[20px] ${!offline ? " bg-border" : "bg-[#1a73e854] "}  rounded-[20px] flex items-center justify-center relative`}>
							<div className={`absolute h-[25px] w-[25px] ${!offline ? "-left-[5px] bg-white" : "-right-[5px] bg-[#1a73e8] "} rounded-full `}></div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ActionsPopup;
