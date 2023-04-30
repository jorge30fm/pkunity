import styles from "./LandingNav.module.css";

import Logo from "../../logo/Logo";

// mui components
import {
	AppBar,
	Container,
	Toolbar,
	Button,
	IconButton,
	Box
} from "../../../app/components/@mui/material/index";
import { MenuIcon } from "../../../app/components/@mui/icons-material/index";

const LandingNav = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					<Button
						color="secondary"
						variant="contained"
						size="small"
					>
						Sign Up
					</Button>
					<Box sx={{flexGrow: 1, display: "flex", justifyContent: "center"}}>
						<img
							src="/logo.svg"
							alt="logo"
							height={40}
							width={40}
						/>
					</Box>
					<IconButton>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default LandingNav;
