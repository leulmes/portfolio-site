"use client";
import React from "react";
import AnimatedBurger from "./AnimatedBurger";
import { activeProps } from "../types";
import Logo from "./Logo";

const Navbar = ({menu, setMenu}: activeProps) => {
	return (
		<nav className="flex border-b-[0.1px] h-16 justify-between border-white items-center bg-[#181818] sticky top-0 z-50">
			<Logo />
			<AnimatedBurger menu={menu} setMenu={setMenu}/>
		</nav>
	);
};

export default Navbar;
