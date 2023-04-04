import React from "react";

import featuresType from "../types/feature.types";

const HomepageFeature = ({ image, title, desc, imageOrder, mobile }: featuresType) => {
	return (
		<article className="w-full h-auto flex flex-col md:flex-row items-center justify-between my-[10vh] md:my-[20vh] gap-12 px-4">
			<div className={`w-full md:w-[50%]  h-auto relative flex justify-center order-2 md:order-${imageOrder}`}>
				{<img src={image} alt="" className={`${mobile ? "md:block hidden" : "block"}`} />}
				{mobile && <img src={mobile} alt="" className="block md:hidden" />}
			</div>
			<div className={`w-full md:w-[50%] order-1 md:order-${imageOrder == 1 ? 2 : 1}`}>
				<h2 className="text-2xl md:text-[40px] w-[100%] mb-4 leading-[42px]">{title}</h2>
				<p className="w-full text-md md:text-xl text-desc leading-[30px]">{desc}</p>
			</div>
		</article>
	);
};

export default HomepageFeature;
