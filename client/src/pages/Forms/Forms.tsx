import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import FormsImage from "@assets/forms.svg";

const Forms = () => {
	const { setHeaderData } = useOutletContext<any>();

	useEffect(() => {
		setHeaderData({
			name: "Forms",
			image: FormsImage,
		});
	}, []);
	return <div>Forms</div>;
};

export default Forms;
