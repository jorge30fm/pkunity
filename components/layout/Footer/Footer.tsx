// external modules
import Link from "next/link";
import Image from "next/image";

// styles
import styles from "./Footer.module.css";

// internal components
import Logo from "../../logo/Logo";
import Button from "../../ui/button/Button";

// icons
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedin,
	FaMapMarkerAlt,
	FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer
			className={`flex flex-col  align-center bg-aqua color-dark ${styles.footer}`}
		>
			{/* contains logo, website name and contact info */}
			<div className="flex flex-col align-center">
				{/* contains logo and name so they can be positioned adjacent */}
				<div className="flex justify-center mt-4">
					<Logo />
					<h1 className="ml-1">PKUnity</h1>
				</div>

				{/* contact info */}
				<ul className={`mt-3 ${styles.noTextDecor}`}>
					<li className="mb-1 flex align-center">
						<FaMapMarkerAlt className="mr-1" /> Charlotte, NC
					</li>
					<li className="mb-1 flex align-center">
						<FaEnvelope className="mr-1" /> info@pkunity.com
					</li>
				</ul>
				<Link href="/signup">
					<Button padding=".5em 3em">Create an account</Button>
				</Link>
			</div>

			{/* Links */}
			<div className="flex justify-space-around mt-4 border-bottom pb-4 w-100">
				<div className="flex flex-col align-center">
					<h2 className={styles.linksTitle}>QUICK LINKS</h2>
					<ul className={`flex align-center flex-col mb-1 ${styles.noBullets}`}>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/">About</Link>
						</li>
						<li>
							<Link href="/">Dashboard</Link>
						</li>
						<li>
							<Link href="/">Account</Link>
						</li>
						<li>
							<Link href="/">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="flex flex-col align-center">
					<h2 className={styles.linksTitle}>GET INVOLVED</h2>
					<ul className={`flex align-center flex-col mb-1 ${styles.noBullets}`}>
						<li>
							<Link href="/">Contribute</Link>
						</li>
						<li>
							<Link href="/">Feedback</Link>
						</li>
						<li>
							<Link href="/">Donate</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="mt-3 grid-container">
				<Link
					href="#"
					className="col-6 text-center"
				>
					Terms of Service
				</Link>
				<Link
					href="#"
					className="col-6 text-center"
				>
					Privacy Policy
				</Link>
				<p className="col-12 text-center">
					&copy; 2023 PKUnity. All rights reserved.{" "}
				</p>
			</div>

			<div className={`flex justify-space-around mt-3 ${styles.socials}`}>
				<FaFacebookSquare />
				<FaInstagram />
				<FaTwitter />
				<FaGithub />
				<FaLinkedin />
			</div>
		</footer>
	);
};
export default Footer;
