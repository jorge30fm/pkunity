import React from "react";
import classes from "./Logo.module.css";
import Image from "next/image";


interface LogoProps {
	width?: string;
	height?: string
}
const Logo: React.FC<LogoProps> =  ({height, width}) => {
	const styles = {
		height: height ?? '40px', //use height prop if available, otherwise use 40px
		width: width ?? '40px' //use width prop if available, otherwise use 40px
	};
	return (
		<div style={styles} className={`${classes.logo}`}>
			<Image
				src="/logo.svg"
				fill
				object-fit="contain"
				alt="Logo"
				className={`${classes.logoImg} bg-blush`}
			/>
		</div>
	);
}
export default Logo