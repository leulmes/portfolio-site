import React from "react";

const updateDate = (): number => {
	const date = new Date();
	return date.getFullYear();
};
const Footer = () => {
	return (
		<div className="text-white flex justify-center h-14 #151312 items-center">
			<div className="flex flex-col items-center justify-center font-main text-lg mb-14">
				<span>&copy; {updateDate()}</span>
				<span className="flex gap-1">
					Crafted by Leul Mesfin — powered by
					<span className="animate-pulse">🍪</span>
				</span>
			</div>
		</div>
	);
};

export default Footer;
