"use client";
import React, { useState } from "react";
import AnimatedBurger from "./MenuButton";
import { activeProps } from "../types";

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


const Navbar = ({active, setActive}: activeProps) => {
	return (
		<div className="flex border-b-[0.1px] h-16 border-white justify-end items-center">
			<AnimatedBurger active={active} setActive={setActive}/>
		</div>
	);
};

export default Navbar;
