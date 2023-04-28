import React from "react";
import advantagesType from "../../types/advantage.types";
import Advantage from "./Advantage";

const Advantages = ({ advantages }: { advantages: advantagesType[] }) => {
	return (
		<section className="bg-background2 w-full h-auto advantages px-6 sm:px-12 py-20 ">
			<div className="max-w-screen-lg mx-auto w-full flex-col sm:flex-row h-full flex justify-between items-center gap-12">
				{advantages.map((advantage: advantagesType, index: number) => (
					<Advantage key={index} {...advantage} />
				))}
			</div>
		</section>
	);
};

export default Advantages;
