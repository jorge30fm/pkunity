
import styles from "./LandingNav.module.css";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Logo from "../../logo/Logo";
// MUIComponents imports
import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const LandingNav = () => {
	return (
		<Box sx={{ flexGrow: 1 }}></Box>

		// <nav className={`${styles.nav} `}>
		// 	<ul className="grid-container pt-3 pr-3 pb-3 pl-3">
		// 		<li className="col-4 start-1">
		// 			<Link href="/signup">
		// 				<Button padding=".5em">Sign Up</Button>
		// 			</Link>
		// 		</li>
		// 		<li className={` col-2 start-7  `}>
		// 			<Logo />
		// 		</li>
		// 		<li className="col-1 start-12">
		// 			<FaBars className={styles.burgerMenu} />
		// 		</li>
		// 	</ul>
		// </nav>
	);
};
//q: how to add svg file saved in public folder
// a: https://stackoverflow.com/questions/62640609/how-to-add-svg-file-saved-in-public-folder
// a: https://stackoverflow.com/questions/62640609/how-to-add-svg-file-saved-in-public-folder   <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
export default LandingNav;
