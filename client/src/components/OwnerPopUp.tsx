import { FaCheck } from "react-icons/fa";

type ownerTypes = {
	display: string;
	filter: string;
};

type ownerPopUpTypes = {
	ownerFilter: ownerTypes;
	setOwnerFilter: React.Dispatch<React.SetStateAction<ownerTypes>>;
};
const OwnerPopUp = ({ ownerFilter, setOwnerFilter }: ownerPopUpTypes) => {
	function ownerFilterFunc(filter: string) {
		setOwnerFilter(() => {
			return { display: "none", filter };
		});
	}
	return (
		<div className={`w-[200px] h-auto bg-white absolute top-[100%] left-0  rounded-[5px] shadow-custom`}>
			<ul className="list-none">
				<li className="text-[14px] mb-[3px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4" onClick={() => ownerFilterFunc("anyone")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">{ownerFilter.filter === "anyone" && <FaCheck className="text-md" />}</div>
					<p> Owned by anyone</p>
				</li>
				<li className="text-[14px] mb-[3px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4" onClick={() => ownerFilterFunc("me")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">{ownerFilter.filter === "me" && <FaCheck className="text-md" />}</div>
					<p> Owned by me</p>
				</li>
				<li className="text-[14px] flex justify-start items-center gap-2 hover:bg-hover py-2 px-4" onClick={() => ownerFilterFunc("notme")}>
					<div className="w-[20px] h-[80%]  flex items-center justify-center ">{ownerFilter.filter === "notme" && <FaCheck className="text-md" />}</div>
					<p> Not owned by me</p>
				</li>
			</ul>
		</div>
	);
};

export default OwnerPopUp;
