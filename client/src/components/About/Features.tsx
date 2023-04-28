import React from "react";
import HomepageFeature from "./Feature";
import featuresType from "../../types/feature.types";

import { BsChevronDown } from "react-icons/bs";

const Features = ({ features, name }: { features: featuresType[]; name: string }) => {
	return (
		<section className="w-full pt-[30px] relative overflow-hidden">
			<section className="max-w-screen-lg mx-auto w-full h-full">
				<a className="mx-auto flex items-center justify-center flex-col p-3 gap-2 rounded-[3px] " href="#features">
					<p>See what you can do with Google {name}</p>
					<BsChevronDown size={24} />
				</a>
				<section id="features" className="w-full">
					{features.map((feature: featuresType, index: number) => (
						<HomepageFeature key={index} {...feature} />
					))}
				</section>
			</section>
			<aside className="absolute top-2 right-0 hidden mdl:block">
				<img src="https://lh3.googleusercontent.com/LdYwcT1HsIt_MlYbQvGFff1uRr0QTdnDsKVkD4-PqFR0vaPk5MPPGkjkfJmucjam6QGijZ_vwpn3dDtJp7fQvCxyXClNfu8flxJCk1oss7JijH61IPk=w1024" alt="" />
			</aside>
			<aside className="absolute top-[26%] -left-2 hidden mdl:block">
				<img src="https://lh3.googleusercontent.com/-_yE8i04XneR2Xbsn9rOZKnWucDzIY60RDFIJa5Cq2-vs8L3nyvRC5HzHVX-BRNWL9-EIg4lrq5L881cWVaaREb7LxZwxQZoycnKYbt9SlEUk6sA8XY=w1024" alt="" />
			</aside>
			<aside className="absolute top-[55%] -right-2 hidden mdl:block">
				<img src="https://lh3.googleusercontent.com/XTMYoa9c1pGX9RpR36coczN6guA-am-pY1NCgZSbl5_Mi2QwhKp7VE--dZGE5QomzRJrfoMtkIw1xLZeDFNDPwSq4RoWsrKQZH7Kk142JfgxO_4gIrA=w1024" alt="" />
			</aside>
		</section>
	);
};

export default Features;
