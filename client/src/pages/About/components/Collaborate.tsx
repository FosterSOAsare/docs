import React from "react";

import PlayStoreIcon from "@assets/google_play.svg";
import AppStoreIcon from "@assets/app_store.svg";

const Collaborate = ({ appStoreLink, playStoreLink, point }: { appStoreLink: string; playStoreLink: string; point: string }) => {
	return (
		<section id="collaborate" className="py-12 sm:py-10 md:py-24 relative overflow-hidden px-4">
			<div className="w-full h-full max-w-screen-lg mx-auto flex justify-center items-center flex-col">
				<h1 className="w-full sm:w-[90%] text-2xl text-medium sm:text-4xl mb-4 mx-auto  text-center">Collaborate from anywhere, on any device</h1>
				<p className="w-full sm:w-[80%] mx-auto  text-desc text-center text-lg sm:text-lg">
					Access, create, and edit your {point} wherever you are — from any mobile device, tablet, or computer — even when offline.
				</p>
				<div className="mt-6 w-full sm:h-24 h-auto  flex-col sm:flex-row flex justify-center gap-3 items-center">
					<a href={playStoreLink} target="_blank" rel="noreferrer" className="w-[50%] sm:w-[30%] lg:w-[15%]">
						<img src={PlayStoreIcon} alt="" className="w-full" />
					</a>
					<a href={appStoreLink} target="_blank" rel="noreferrer" className="w-[50%] sm:w-[30%] lg:w-[15%]">
						<img src={AppStoreIcon} alt="" className="w-full" />
					</a>
				</div>
			</div>
			<aside className="absolute top-[35%] -right-2 hidden lg:block">
				<img src="https://lh3.googleusercontent.com/hWl6SS7ryc7NY1-OEnUKcLSosWSGWXesIVH-TmBD4AOKVfQL5MzEQuXcy8jFI5NIs2dTftP_J9BpbEJkGiP44CN2YkaRTcZUPVV6M40QLJxPj4WpJI0=w1024" alt="" />
			</aside>
		</section>
	);
};

export default Collaborate;
