import React from "react";

import advantagesType from "../types/advantage.types";

const HomepageAdvantage = ({ title, desc, image }: advantagesType) => {
	return (
		<article className="sm:w-[33%] w-full ">
			<img src={image} alt="" />
			<h3 className="font-normal my-4 mt-6 text-[20px]">{title}</h3>
			<p className="text-lg text-desc">{desc}</p>
		</article>
	);
};

export default HomepageAdvantage;
