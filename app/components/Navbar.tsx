'use client'
import React from "react";
import AnimatedBurger from "./MenuButton";

// interface NavLink {
// 	title: string;
// 	href: string;
// }
// const navLinks: NavLink = [
//     {title: 'Home', href: '/home'},
//     {title: 'Experience', href: '/experience'},
//     {title: 'Projects', href: '/projects'},
//     {title: 'Contact', href: '/contact'},
// ];

const Navbar = () => {
	return (
		<div className="flex border-b-[0.1px] h-16 border-white justify-end items-center">
			<AnimatedBurger />
		</div>
	);
};

export default Navbar;
