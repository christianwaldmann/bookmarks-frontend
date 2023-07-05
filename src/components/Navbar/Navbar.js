import React from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar({ ...restProps }) {
	return (
		<>
			<div className="hidden sm:block">
				<NavbarDesktop {...restProps} />
			</div>
			<div className="block sm:hidden">
				<NavbarMobile {...restProps} />
			</div>
		</>
	);
}
