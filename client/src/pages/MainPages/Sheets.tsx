import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import SheetsImage from "@assets/sheets.svg";

const Sheets = () => {
	const { setHeaderData } = useOutletContext<any>();

	useEffect(() => {
		setHeaderData({
			name: "Sheets",
			image: SheetsImage,
		});
	}, []);
	return <div>Sheets</div>;
};

export default Sheets;
