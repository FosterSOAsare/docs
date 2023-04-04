import React from "react";

import advantagesType from "../types/advantage.types";

const HomepageAdvantage = ({ title, desc, image }: advantagesType) => {
	return (
		<article className="w-[33%] ">
			<img src={image} alt="" />
			<h3 className="font-medium my-4 text-[20px]">{title}</h3>
			<p className="text-[14px] text-desc">{desc}</p>
		</article>
	);
};

export default HomepageAdvantage;
