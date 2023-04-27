import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import DocsImage from "@assets/docs.svg";

const DocsPage = () => {
	const { setHeaderData } = useOutletContext<any>();

	useEffect(() => {
		setHeaderData({
			name: "Docs",
			image: DocsImage,
		});
	}, []);

	return <div>Docs</div>;
};

export default DocsPage;
