// external modules
import Link from "next/link";

// styles
import styles from "./Footer.module.css";

// internal components
import Logo from "../../logo/Logo";

//external components
import { Button, Typography, Grid } from "@mui/material";

// icons
import {
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
	GitHub as GitHubIcon,
	LinkedIn as LinkedInIcon,
	Place as PlaceIcon,
	Email as EmailIcon,
} from "@mui/icons-material";

const Footer = () => {
	return (
		<footer className={`${styles.footer}`}>
			{/* contains logo, website name and contact info */}
			<Grid
				container
				spacing={2}
			>
				{/* contains logo and name so they can be positioned adjacent */}
				<Grid
					item
					xs={12}
				>
					<Grid
						container
						spacing={2}
						mb={1}
						justifyContent="center"
					>
						<Grid item>
							<Logo />
						</Grid>
						<Grid item>
							<Typography
								variant="h2"
								className="ml-1"
							>
								PKUnity
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				{/* contact info */}
				<Grid
					item
					xs={12}
				>
					<Grid
						container
						direction="column"
						alignContent="center"
						justifyContent="center"
						rowSpacing={1}
					>
						<Grid
							item
							sx={{ position: "center" }}
						>
							<Grid
								container
								justifyContent="center"
								alignItems="center"
							>
								<Grid item>
									<PlaceIcon className="mr-1" />
								</Grid>
								<Grid item>Charlotte, NC</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid
								container
								justifyContent="center"
								alignItems="center"
							>
								<Grid item>
									<EmailIcon className="mr-1" />
								</Grid>
								<Grid item>info@pkunity.com</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							mt={2}
						>
							<Button
								variant="contained"
								color="secondary"
								href="./signup"
							>
								Create an account
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Links */}
			<Grid
				container
				spacing={2}
				mt={2}
				pb={2}
				className="border-bottom "
			>
				<Grid
					item
					xs={6}
				>
					<Typography
						variant="h5"
						textAlign="center"
					>
						QUICK LINKS
					</Typography>
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Home
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								About
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Dashboard
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Account
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Contact
							</Link>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={6}
				>
					<Typography
						variant="h5"
						textAlign="center"
					>
						GET INVOLVED
					</Typography>
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Contribute
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Feedback
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/"
								className={`${styles.noBullets}`}
							>
								Donate
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid
				container
				mt={1}
				mb={2}
			>
				<Grid
					item
					xs={6}
					textAlign="center"
				>
					<Link href="#">Terms of Service</Link>
				</Grid>
				<Grid
					item
					xs={6}
					textAlign="center"
				>
					<Link href="#">Privacy Policy</Link>
				</Grid>
				<Grid
					item
					xs={12}
					mt={1}
				>
					<Typography textAlign="center">
						&copy; 2023 PKUnity. All rights reserved.{" "}
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				justifyContent="space-around"
				className={` ${styles.socials}`}
			>
				<Grid item>
					<FacebookIcon />
				</Grid>
				<Grid item>
					<InstagramIcon />
				</Grid>
				<Grid item>
					<TwitterIcon />
				</Grid>
				<Grid item>
					<GitHubIcon />
				</Grid>
				<Grid item>
					<LinkedInIcon />
				</Grid>
			</Grid>
		</footer>
	);
};
export default Footer;
