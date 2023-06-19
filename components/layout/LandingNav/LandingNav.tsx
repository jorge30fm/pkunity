import styles from "./LandingNav.module.css";

import Logo from "../../logo/Logo";

// mui components
import {
	AppBar,
	Container,
	Toolbar,
	Button,
	IconButton,
	Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const LandingNav = () => {
	return (
		<AppBar  className={styles.overlay} color="transparent" sx={{zIndex: 1200}}>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Button
						color="secondary"
						variant="contained"
						size="small"
					>
						Sign Up
					</Button>
					<Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
						<img
							src="/logo.svg"
							alt="logo"
							className={styles.logo}
							height={40}
							width={40}
						/>
					</Box>
					<IconButton>
						<MenuIcon sx={{color:'white'}} />
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default LandingNav;
