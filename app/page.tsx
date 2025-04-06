"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import DropdownSheet from "./components/DropdownSheet";

export default function Home() {
	const [active, setActive] = useState(false);

	return (
		<div>
			<Navbar active={active} setActive={setActive} />
			{active ? <DropdownSheet /> : null}
		</div>
	);
};
