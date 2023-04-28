import React from "react";

import featuresType from "../../types/feature.types";

const Feature = ({ image, title, desc, imageOrder, mobile }: featuresType) => {
	return (
		<article className="w-full h-auto flex flex-col mdl:flex-row items-center justify-between my-[10vh] mdl:my-[20vh] gap-12 px-6 sm:px-10">
			<div className={`w-full mdl:w-[50%]  h-auto relative flex justify-center order-2 ${imageOrder == 2 ? "md:order-2" : "md:order-1"}`}>
				{<img src={image} alt="" className={`${mobile ? "sm:block hidden" : "block"}`} />}
				{mobile && <img src={mobile} alt="" className="block sm:hidden" />}
			</div>
			<div className={`w-full mdl:w-[50%] order-1 ${imageOrder == 1 ? "md:order-2" : "md:order-1"}`}>
				<h2 className="text-2xl sm:text-4xl w-[100%] mb-4 leading-[42px]">{title}</h2>
				<p className="w-full text-md sm:text-xl text-desc leading-[30px]">{desc}</p>
			</div>
		</article>
	);
};

export default Feature;
