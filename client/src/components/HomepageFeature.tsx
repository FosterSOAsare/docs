import React from "react";

import featuresType from "../types/feature.types";

const HomepageFeature = ({ image, title, desc, imageOrder }: featuresType) => {
	return (
		<article className="w-full h-auto flex items-center justify-between my-[20vh] gap-12 ">
			<div className={`w-[50%]  h-auto relative flex justify-center order-${imageOrder}`}>
				<img src={image} alt="" />
			</div>
			<div className={`w-[50%] order-${imageOrder == 1 ? 2 : 1}`}>
				<h2 className="text-[40px] w-[100%] mb-4 leading-[42px]">{title}</h2>
				<p className="w-full text-xl text-desc leading-[30px]">{desc}</p>
			</div>
		</article>
	);
};

export default HomepageFeature;
