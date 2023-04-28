import React from "react";
import { Link } from "react-router-dom";

const GetStarted = ({ name }: { name: string }) => {
	return (
		<section id="getStarted" className="py-12 sm:py-16 md:py-24 border-border relative overflow-hidden">
			<div className="w-full h-full max-w-screen-lg mx-auto flex justify-center items-center flex-col  ">
				<h1 className="text-2xl sm:text-4xl mb-4">Ready to get started?</h1>

				<div className="flex justify-center gap-4 mt-6 flex-col sm:flex-row w-[60%] sm:full">
					<a href="/premium/info" target="_blank" rel="noreferrer" className="px-6 h-12 rounded-[5px] bg-secondary font-medium flex justify-center items-center text-white">
						Try {name} for Work
					</a>
					<Link
						to={`/${name.toLowerCase()}`}
						className="px-6 h-12 rounded-[5px] text-secondary font-medium border-border border-[1px] hover:border-secondary flex justify-center items-center ">
						Go to {name}
					</Link>
				</div>
			</div>
			<aside className="absolute bottom-0 -left-2 hidden lg:block">
				<img src="https://lh3.googleusercontent.com/5ENDQP8kSi6cTdflVOyjCg-zrUJPQ1EfxYKiEkWkwrSNp8TaqrBmFVpKfhOOQ4tM9ST5D7956nobaowYGzlhfUqIEklaJTeOhJnlCmRGrYnoHmHAMv4=w1024" alt="" />
			</aside>
		</section>
	);
};

export default GetStarted;
